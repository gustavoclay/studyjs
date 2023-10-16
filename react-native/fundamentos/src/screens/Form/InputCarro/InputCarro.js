import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function InputCarro({ adicionarCarro }) {

  const [carro, setCarro] = useState('')

  function handleInput() {
    adicionarCarro(carro)
    setCarro('')
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        mode='outlined'
        label={'Adicionar Carro'}
        value={carro}
        onChangeText={value => setCarro(value)}
        keyboardType='numeric'
      />

      <Button style={styles.button} mode='contained' onPress={handleInput}>Add</Button>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '90%',
  },
  input: {
    flex: 3,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
})
