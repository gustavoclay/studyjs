import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

export default function Pessoa({ pessoa }) {

  const avatar = () => {
    return <Avatar.Image size={48} source={{ uri: pessoa.avatar }} />
  }

  return (
    <View style={styles.container}>
      <Card mode='contained'>
        <Card.Title title={pessoa.username} left={avatar} />

        <Card.Content style={styles.content}>

          <View style={styles.label}>
            <Text style={styles.bold} variant="bodyLarge" >Username:</Text>
            <Text variant="bodyLarge">{pessoa.username}</Text>
          </View>

          <View style={styles.label}>
            <Text style={styles.bold} variant="bodyLarge">Name:</Text>
            <Text variant="bodyLarge">{pessoa.first_name} {pessoa.last_name}</Text>
          </View>

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
  }

})
