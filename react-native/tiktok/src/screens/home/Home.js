import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={styles.labelText}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, styles.labelSelectedText]}>Para Você</Text>
        </TouchableOpacity>
      </View>



      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    zIndex: 99,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 60
  },
  labelText: {
    color: '#DDD',
    fontSize: 16,
    marginBottom: 2
  },
  labelSelectedText: {
    color: '#fff',
    fontWeight: '500',
  }
})
