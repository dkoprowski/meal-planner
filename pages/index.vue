<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-meal-planner</h1>
      <ul>
        <li v-for="meal in meals" :key="meal.id">
          <NuxtLink :to="`/meal/${meal.id}`">{{ meal.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
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

    try {
      const db = await $axios.$post(
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

      db.results.forEach((entry) => {
        console.log(entry)
      })

      const meals = db.results
        .filter((meal) => meal?.properties?.Name?.title?.length > 0)
        .map((meal) => ({
          id: meal.id,
          title: meal.properties.Name.title[0].plain_text,
        }))

      return {
        meals,
      }
    } catch (e) {
      console.log({ e })

      return { meals: [] }
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
