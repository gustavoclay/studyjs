import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function Form() {

  const [carros, setCarros] = useState(['Ford Focus'])
  const [inputValue, setInputValue] = useState('')
  const [edit, setEdit] = useState(false)
  const [valueEdit, setValueEdit] = useState(null)

  function handleInput() {

    if (edit) {
      editarCarro(valueEdit, inputValue)
      setInputValue('')
      setEdit(false)
      setValueEdit(null)

    } else {
      adicionarCarro(inputValue)
      setInputValue('')
    }

  }

  function handleEdit(carro) {
    setEdit(true)
    setValueEdit(carro)
    setInputValue(carro)
  }

  function adicionarCarro(carro) {
    setCarros([...carros, carro])
  }

  function editarCarro(carro, newCarro) {
    setCarros(carros.map(c => c === carro ? newCarro : c))
  }

  function excluirCarro(carro) {
    setCarros(carros.filter(c => c !== carro))
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          mode='outlined'
          label={edit ? 'Editar Carro' : 'Adicionar Carro'}
          value={inputValue}
          onChangeText={value => setInputValue(value)}
        />

        <Button style={styles.button} mode='contained' onPress={handleInput}>{edit ? 'Edit' : 'Add'}</Button>


      </View>

      <FlatList
        style={styles.list}
        data={carros}
        renderItem={({ item }) => (
          <Card mode='outlined' style={{ marginTop: 5 }}>
            <Card.Content style={styles.cardContainer}>
              <Text style={{ width: '70%' }}>{item}</Text>
              <IconButton icon={'pen'} onPress={() => handleEdit(item)} />
              <IconButton icon={'trash-can-outline'} onPress={() => excluirCarro(item)} />
            </Card.Content>
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
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
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
