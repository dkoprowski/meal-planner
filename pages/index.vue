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
  computed: {
    meals() {
      return this.$store.state.meals.mealList
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
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
