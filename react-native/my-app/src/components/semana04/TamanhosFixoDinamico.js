import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function TamanhosFixoDinamico() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'yellow' }}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'gray' }}></View>
    </View>
  )
}

const styles = StyleSheet.create({})