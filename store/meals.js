export const state = () => ({
  titles: {},
  mealList: [],
  days: [],
})

export const mutations = {
  addMeals(state, meals) {
    const titles = {}
    meals.forEach((meal) => (titles[meal.id] = meal.title))
    state.titles = titles
    state.mealList = meals
  },
  addDays(state, days) {
    state.days = days
  },
}
