/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A screen',
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
)

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
)

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals',
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals',
    },
  },

}

const MealsFavTabNavigator =
  Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: 'white',
      shifting: true,
      barStyle: {
        backgroundColor: Colors.primaryColor,
      },
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accentColor,
      },
    })

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  })

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  },
)

export default createAppContainer(MainNavigator)
