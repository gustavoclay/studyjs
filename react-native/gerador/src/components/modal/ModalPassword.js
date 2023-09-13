import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useStorage from '../../hooks/useStorage';

export default function ModalPassword({ password, handleClose }) {

  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password)
    await saveItem('passwords', password)
    handleClose()
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Senha gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
          <Text style={styles.innerText}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
            <Text style={[styles.buttonText, styles.buttonSaveText]}>Salvar Senha</Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#F0F0F0',
    width: '80%',
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24
  },
  innerPassword: {
    backgroundColor: '#35A29F',
    width: '90%',
    padding: 14,
    borderRadius: 8
  },
  innerText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#F2F7A1'
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 8
  },
  buttonSave: {
    backgroundColor: '#4F709C',
    borderRadius: 8
  },
  buttonSaveText: {
    color: '#FFF',
    fontWeight: '600'
  }
})
