/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen:MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
)

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => (
        <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      ),
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  },
},
)

export default createAppContainer(MealsFavTabNavigator)