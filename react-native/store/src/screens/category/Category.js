import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Api from '../../services/Api'

export default function Category({ navigation, route }) {

  const params = route.params
  const [products, setProducts] = useState([])

  useEffect(() => {

    Api.get(`/products/category/${params.category}`)
      .then(response => {
        console.log(response.data.products)
        setProducts(response.data.products)
      })
      .catch((error) => {
        console.log("DEU RUIM", error)
      })

    console.log(params)
  }, [])


  return (
    <View>

      <View style={styles.titleArea}>
        <Text variant='titleLarge' style={styles.title} >{params.category.toUpperCase()}</Text>
      </View>

      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <Text>{item.brand}</Text>}
      />


    </View>
  )
}

const styles = StyleSheet.create({
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
