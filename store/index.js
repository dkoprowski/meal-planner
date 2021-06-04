export const actions = {
  async nuxtServerInit(store, context) {
    const DATABASE_ID = '9548bf6ae6514fe4a3a5182ef97a3385'
    const MY_NOTION_TOKEN = 'secret_m7ZTC9PKYmRFxOkqKE7156RxH04aMaNqXPPErIRLXJt'

    const data = JSON.stringify({
      filter: {
        property: 'Dzien',
        multi_select: {
          is_not_empty: true,
        },
      },
    })

    const db = await context.$axios.$post(
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

    const meals = db.results
      .filter((meal) => meal?.properties?.Name?.title?.length > 0)
      .map((meal) => ({
        id: meal.id,
        title: meal.properties.Name.title[0].plain_text,
      }))

    store.commit('meals/addMeals', meals)
  },
}
