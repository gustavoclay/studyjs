import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Componente() {

  let nome = "Matheus";
  let image = 'https://img.freepik.com/fotos-gratis/gato-fofo-deitado-na-grama_23-2150385852.jpg';



  return (
    <View>
      <Text>Hello World</Text>
      <Text style={{ color: 'red', fontSize: 30, margin: 15 }}>Primary APP</Text>
      <Text style={{ fontSize: 18, colocor: 'blue' }}>Programmer Test</Text>

      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={{fontSize: 18}}>
        {nome}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({})