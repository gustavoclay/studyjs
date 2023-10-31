import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Dialog, MD3Colors, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function ListaPessoasStorage({ navigation }) {

  const [pessoas, setPessoas] = useState([])

  useState(() => {
    getPesssoas()
    console.log("🚀 ~ file: ListaPessoasStorage.js:11 ~ getPesssoas ~ pessoas:", pessoas)
  }, [])

  async function getPesssoas() {
    await AsyncStorage.getItem('@pessoas').then(response => {
      const resultado = JSON.parse(response) || []
      setPessoas(resultado)
    })
  }

  async function adicionar(pessoa) {
    try {
      const novaListaPessoas = pessoas
      pessoas.push(pessoa)
      await AsyncStorage.setItem('@pessoas', JSON.stringify(novaListaPessoas))
      setPessoas(novaListaPessoas)
      Toast.show({ type: 'success', text1: 'Pessoa adicionada com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar pessoa: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar pessoa' })
    }
  }

  async function editar(pessoa, newPessoa) {
    try {
      const novaListaPessoas = pessoas.map(item => item === pessoa ? newPessoa : item)
      await AsyncStorage.setItem('@pessoas', JSON.stringify(novaListaPessoas))
      setPessoas(novaListaPessoas)
      Toast.show({ type: 'success', text1: 'Pessoa editada com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar pessoa: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar pessoa' })
    }
  }

  async function excluir(pessoa) {
    try {
      const novaListaPessoas = pessoas.filter(item => item !== pessoa)
      await AsyncStorage.setItem('@pessoas', JSON.stringify(novaListaPessoas))
      setPessoas(novaListaPessoas)
      Toast.show({ type: 'success', text1: 'Pessoa excluida com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar pessoa: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar pessoa' })
    }
  }

  function getImc(pessoa) {
    const imc = pessoa.peso / ((pessoa.altura / 100) * (pessoa.altura / 100));
    return imc.toFixed(2);
  }

  return (
    <View style={styles.container}>

      <View style={{ padding: 5 }}>
        <Text variant='titleLarge' style={{ textAlign: 'center', fontWeight: 'bold' }}>Lista</Text>
      </View>

      <FlatList
        style={styles.list}
        data={pessoas}
        renderItem={({ item }) => (
          <>
            <Card mode='outlined' style={styles.card}>

              <Card.Content style={styles.cardContent}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                  <Text>Peso: {item.peso}</Text>
                  <Text>Altura: {item.altura}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>IMC</Text>
                  <Text>{getImc(item)}</Text>
                </View>
              </Card.Content>

              <Card.Actions>
                <Button
                  onPress={() => navigation.navigate('FormPessoa', { acao: editar, pessoa: item })}
                >
                  Editar
                </Button>

                <Button
                  onPress={() => excluir(item)}
                >
                  Excluir
                </Button>
              </Card.Actions>

            </Card>

          </>
        )}


      />

      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigation.navigate('FormPessoaStorage', { acao: adicionar })}
      >
        Adicionar
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '95%'
  },
  card: {
    margin: 5
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: MD3Colors.primary80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 10,
  },
  button: {
    margin: 10,
    width: '90%'
  }
})
