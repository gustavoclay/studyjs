import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
export default function CategoryItem({ category, navigation }) {

  return (
    <View style={styles.container}>
      <Button
        mode='contained-tonal'
        onPress={() => {
          navigation.navigate('Category', { category })
        }} >
        {String(category).toUpperCase()}</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  }
})
