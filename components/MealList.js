/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

const styles = StyleSheet.create({
  list:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
})
const MealList = (props) => {
  const { listData, navigation } = props
  const { navigate } = navigation
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
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width:'100%' }}
      />
    </View>
  )
}

export default MealList
