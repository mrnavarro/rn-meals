/* eslint-disable react/prop-types */
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'


const CategoryMealsScreen = (props) => {
  const { navigation } = props
  const { getParam } = navigation
  const catId = getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  return (
    <MealList
      listData={displayedMeals}
      navigation={navigation}
    />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return {
    headerTitle: selectedCategory.title,
  }
}


export default CategoryMealsScreen
