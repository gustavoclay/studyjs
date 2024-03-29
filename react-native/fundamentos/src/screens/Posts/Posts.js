import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Posts({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')}></Button>
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
