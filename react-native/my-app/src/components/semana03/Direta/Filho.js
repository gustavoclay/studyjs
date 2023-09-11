import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Filho(props) {
    return (
        <>
            <Text style={styles.titulo} >{props.titulo}</Text>
            <Text style={styles.descricao}>{props.descricao}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30
    },
    descricao: {
        fontSize: 20,
        color: '#777'
    }
})