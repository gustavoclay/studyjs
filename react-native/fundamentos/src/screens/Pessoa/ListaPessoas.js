import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, MD3Colors, Text } from 'react-native-paper'

export default function ListaPessoas({ navigation }) {

  const [pessoas, setPessoas] = useState([])


  function adicionar(pessoa) {
    console.log("🚀 ~ file: ListaPessoas.js:11 ~ adicionar ~ pessoa:", pessoa)
    setPessoas([...pessoas, pessoa])
  }

  function editar(pessoa, newPessoa) {
    console.log("🚀 ~ file: ListaPessoas.js:15 ~ editar ~ newPessoa:", newPessoa)
    setPessoas(pessoas.map(item => item === pessoa ? newPessoa : item))
  }

  function excluir(pessoa) {
    setPessoas(pessoas.filter(item => item !== pessoa))
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
          <Card mode='outlined' style={styles.card}>

            <Card.Content style={styles.cardContent}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                <Text>{item.peso}</Text>
                <Text>{item.altura}</Text>
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
        )}


      />

      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigation.navigate('FormPessoa', { acao: adicionar })}
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
