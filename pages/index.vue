<template>
  <div class="container">
    <div>
      <h1 class="title">meal-planner</h1>
      <div v-for="day in days" :key="day.id" class="day">
        <NuxtLink :to="`/day/${day.id}`">
          <h2>{{ day.name }}</h2>
        </NuxtLink>
        <p v-for="meal in getMealsForDay(day.id)" :key="meal.id">
          <!-- <NuxtLink :to="`/meal/${meal.id}`">{{ meal.title }}</NuxtLink> -->
          {{ meal.title }}
        </p>
      </div>
      <!-- <ul>
        <li v-for="meal in meals" :key="meal.id">
          <NuxtLink :to="`/meal/${meal.id}`">{{ meal.title }}</NuxtLink>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    meals() {
      return this.$store.state.meals.mealList
    },
    days() {
      const meals = this.$store.state.meals.mealList
      const days = this.$store.state.meals.days
      return days.filter((day) =>
        meals.some((meal) => meal.dayIds.includes(day.id))
      )
    },
  },
  methods: {
    getMealsForDay(dayId) {
      const meals = this.$store.state.meals.mealList
      return meals.filter((meal) => meal.dayIds.includes(dayId))
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding: 5px 25px;
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

.day {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid gray;

  width: 100%;
}
</style>
