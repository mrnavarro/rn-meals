/* eslint-disable react/prop-types */
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
})


const CategoryMealsScreen = (props) => {
  const { navigation } = props
  const { navigate, getParam } = navigation
  const catId = getParam('categoryId')
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  const renderMealItem = itemData => (
    <MealItem
      title={itemData.item.title}
      image={itemData.item.imageUrl}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      onSelectMeal={() => {
        navigate({
          routeName: 'MealDetail',
          params: {
            mealId:itemData.item.id,
          },
        })
      }}
    />
  )
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
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
