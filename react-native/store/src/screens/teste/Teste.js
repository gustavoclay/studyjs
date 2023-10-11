import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Teste({ navigation, router }) {
  return (
    <View>
      <Button mode='contained-tonal' onPress={() => {
        navigation.push('Teste')
      }} >
        CLIQUE
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})
