<template>
  <div>
    <h1>{{ details.name }}</h1>
    <ul>
      <li v-for="meal in meals" :key="meal.id">
        <NuxtLink :to="`/meal/${meal.id}`">{{ meal.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    meals() {
      const dayId = this.$route.params.id
      const meals = this.$store.state.meals.mealList
      return meals.filter((meal) => meal.dayIds.includes(dayId))
    },
    details() {
      const dayId = this.$route.params.id
      const days = this.$store.state.meals.days
      return days.find((day) => day.id === dayId)
    },
  },
}
</script>

<style></style>
