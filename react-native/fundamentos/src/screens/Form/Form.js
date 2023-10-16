import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper'
import InputCarro from './InputCarro/InputCarro'

export default function Form() {

  const [carros, setCarros] = React.useState(['Ford Focus'])

  function adicionarCarro(carro) {
    setCarros([...carros, carro])
  }

  return (
    <View style={styles.container}>

      <InputCarro adicionarCarro={adicionarCarro} />

      <FlatList
        style={styles.list}
        data={carros}
        renderItem={({ item }) => (
          <Card mode='outlined' style={{ margin: 5 }}>
            <Card.Title title={item} />
          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  list: {
    width: '90%',
    margin: 10
  }
})
