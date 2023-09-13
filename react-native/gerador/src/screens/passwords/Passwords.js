import { useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import useStorage from '../../hooks/useStorage'

export default function Passwords() {

  const [listPasswords, setListPasswords] = useState([])

  const { getItem } = useStorage();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem('passwords')
      setListPasswords(passwords)
      console.log(listPasswords)
    }

    loadPasswords();
  }, [isFocused])




  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.text}>Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4F709C',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    peddingRight: 14
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F2F7A1'
  },
  content: {
    // flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  }
})
