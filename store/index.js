export const actions = {
  /**
   *
   * @param {*} store
   * @param {import('@nuxt/types').Context} context
   */
  async nuxtServerInit(store, context) {
    const DATABASE_ID = context.env.databaseId
    const MY_NOTION_TOKEN = context.env.notionSecret

    const data = JSON.stringify({
      filter: {
        property: 'Dzien',
        multi_select: {
          is_not_empty: true,
        },
      },
    })

    const dbDetails = await context.$axios.$get(
      `https://api.notion.com/v1/databases/${DATABASE_ID}`,
      {
        headers: {
          Authorization: `Bearer ${MY_NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2021-05-13',
        },
      }
    )

    const mealsResponse = await context.$axios.$post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      data,
      {
        headers: {
          Authorization: `Bearer ${MY_NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2021-05-13',
        },
      }
    )

    // db.results.forEach((entry) => {
    // store.commit('meals/add')
    // })

    const meals = mealsResponse.results
      .filter((meal) => meal?.properties?.Name?.title?.length > 0)
      .map((meal) => ({
        id: meal.id,
        title: meal.properties.Name.title[0].plain_text,
        dayIds: meal.properties.Dzien.multi_select.map((day) => day.id),
      }))

    store.commit('meals/addMeals', meals)
    store.commit(
      'meals/addDays',
      dbDetails?.properties?.Dzien?.multi_select?.options ?? []
    )
  },
}
