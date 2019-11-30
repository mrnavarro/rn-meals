/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTIle'
import HeaderButton from '../components/HeaderButton'

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


const CategoriesScreen = (props) => {
  const { navigation } = props
  const { navigate, goBack } = navigation

  const renderGridItem = (itemData) => (
    <CategoryGridTile
      title={itemData.item.title}
      onSelect={() => navigate({
        routeName: 'CategoryMeals',
        params: {
          categoryId: itemData.item.id,
        },
      })}
      color={itemData.item.color}
    />
  )
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
}

CategoriesScreen.navigationOptions = (navData) => {
  const { navigation } = navData
  const { toggleDrawer } = navigation
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen
