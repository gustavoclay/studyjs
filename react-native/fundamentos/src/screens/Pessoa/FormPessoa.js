import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Text, MD3Colors } from 'react-native-paper'

export default function FormPessoa({ navigation, route }) {

  const acao = route.params.acao
  const pessoa = route.params.pessoa

  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const [showMensagemErro, setShowMensagemErro] = useState(false)

  useState(() => {
    if (pessoa) {
      setNome(pessoa.nome)
      setPeso(pessoa.peso)
      setAltura(pessoa.altura)
    }

  }, [])

  useState(() => {
    return () => {
      setNome('')
      setPeso('')
      setAltura('')
    }
  })

  useState(() => {

  }, [])


  function salvar() {

    if(!nome || !peso || !altura) {
      setShowMensagemErro(true)
      return
    }

    const newPessoa = {
      nome,
      peso,
      altura
    }

    console.log(pessoa)

    if (pessoa) {
      acao(pessoa, newPessoa)
    } else {
      acao(newPessoa)
    }

    navigation.goBack()

  }


  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>

        {showMensagemErro && (
          <Text style={{ color: 'red' }}>Preencha todos os campos!</Text>
        )}

        <TextInput
          style={styles.input}
          label={'Nome'}
          placeholder='Digite o nome'
          mode='outlined'
          value={nome}
          onChangeText={text => setNome(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

        <TextInput
          style={styles.input}
          label={'Peso | KG'}
          placeholder='Digite o peso em kg'
          mode='outlined'
          keyboardType='numeric'
          value={peso}
          onChangeText={text => setPeso(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

        <TextInput
          style={styles.input}
          label={'Altura | cm'}
          placeholder='Digite a altura em cm'
          mode='outlined'
          keyboardType='numeric'
          value={altura}
          onChangeText={text => setAltura(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

      </View>

      <View style={styles.buttonContainer}>

        <Button
          style={styles.button}
          mode='contained-tonal'
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>

        <Button
          style={styles.button}
          mode='contained'
          onPress={salvar}
        >
          Salvar
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '90%',
    padding: 5,
    paddingTop: 20
  },
  input: {
    marginTop: 15,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
    gap: 10
  },
  button: {
    flex: 1,
    margin: 5
  }
})
