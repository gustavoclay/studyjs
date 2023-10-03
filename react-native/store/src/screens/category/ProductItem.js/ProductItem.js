import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProductItem(props) {

  const [product, setProduct] = useState(props.route.params)




  return (
    <View>
      <Text>ProductItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
