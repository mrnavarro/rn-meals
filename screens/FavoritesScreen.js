/* eslint-disable react/prop-types */
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = (props) => {
  const { navigation } = props
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <MealList
      listData={favMeals}
      navigation={navigation}
    />
  )
}

FavoritesScreen.navigationOptions = (navData) => {
  const { navigation } = navData
  const { toggleDrawer } = navigation
  return {
    headerTitle: 'Your Favorites',
    headerLeft:
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title='Menu'
      iconName='ios-menu'
      onPress={() => {
        toggleDrawer()
      }}
    />
  </HeaderButtons>,
  }
}

export default FavoritesScreen
