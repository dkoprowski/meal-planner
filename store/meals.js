export const state = () => ({
  titles: {},
  mealList: [],
})

export const mutations = {
  addMeals(state, meals) {
    const titles = {}
    meals.forEach((meal) => (titles[meal.id] = meal.title))
    state.titles = titles
    state.mealList = meals
  },
}
