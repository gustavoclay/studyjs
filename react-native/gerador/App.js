import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ModalPassword from './src/components/modal/ModalPassword'

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/|%()[]{}^!@#$?&"

export default function App() {
  const [size, setSize] = useState(10)
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ''

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(password)
    setModalVisible(true)

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>

      <Image
        source={{ uri: 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-minha-senha_114360-4294.jpg' }}
        style={styles.logo}
      />

      <Text style={styles.text}>{size} caracteres</Text>

      <View style={styles.sliderArea}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#4F709C'
          minimumTrackTintColor='#213555'
          thumbTintColor='#4F709C'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={[styles.text, styles.buttonText]}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={password} handleClose={() => setModalVisible(false)} />
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  text: {
    fontSize: 20
  },
  logo: {
    marginBottom: 60,
    marginTop: 40,
    width: 200,
    height: 200,
    borderRadius: 10
  },
  sliderArea: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 4
  },
  button: {
    height: 45,
    width: '80%',
    backgroundColor: '#213555',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#E5D283'

  }
})
