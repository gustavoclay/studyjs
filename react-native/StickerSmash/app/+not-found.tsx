import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}  >404 Not Found</Text>
        <Link style={styles.button} href="/index">Go to Home</Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF"
  },
  button: {
    fontSize: 20,
    color: "#FFF",
    textDecorationLine: "underline"
  }
})