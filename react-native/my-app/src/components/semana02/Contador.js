import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Contador(props) {

    const [valor, setValor] = useState(props.inicial || 0)

    // let valor = props.inicial || 0

    function incrementar() {
        setValor(valor + 1)
        console.warn(valor)
    }
    
    function decrementar() {
        setValor(valor - 1)
        console.warn(valor)
    }

    return (
        <View >
            <Text style={{fontSize: 30, borderColor: 'black', borderWidth: 1, padding: 10}}>{valor}</Text>
            <Button title='+' onPress={incrementar} />
            <Button title='-' onPress={decrementar} />
        </View>
    )
}

const styles = StyleSheet.create({


})