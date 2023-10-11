import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Users() {
  return (
    <View style={styles.container}>
      <Text>Users</Text>
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
