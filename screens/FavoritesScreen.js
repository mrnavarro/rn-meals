import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const FavoritesScreen = () => (
  <View style={styles.screen}>
    <Text> The Categories Screen! </Text>
  </View>
)

export default FavoritesScreen
