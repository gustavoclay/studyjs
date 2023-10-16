import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <Button title='Go to Configurations' onPress={() => navigation.navigate('Configurations')}></Button>
      <Button title='Go to posts' onPress={() => navigation.navigate('Posts')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
