import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Api from '../../services/Api'
import CategoryItem from './components/CategoryItem/CategoryItem'

export default function Home({ navigation, router }) {

  const [products, setProducts] = React.useState([])

  useEffect(() => {

    Api.get('/products/categories')
      .then((response) => {
        setProducts(response.data)
      }).catch((error) => {
        console.log("DEU RUIM", error)
      })

  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.titleArea}>
        <Text variant='titleLarge' style={styles.title} >STORE</Text>
      </View>


      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => < CategoryItem category={item} navigation={navigation} />}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  list: {
    width: '90%'
  },
  titleArea: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'orange',
  },
  title: {
    fontWeight: 'bold'
  }
})
