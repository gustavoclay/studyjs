import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Inbox() {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
