import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function ParOuImpar({ num = 0 }) {

    // if (num % 2 === 0) {
    //     return <Text style={styles.text}>O numero {num} é Par</Text>
    // } else {
    //     return <Text style={styles.text}>O numero {num} é Impar</Text>
    // }

    // return (
    //     <>
    //         <Text style={styles.text}>O numero {num} é:</Text>
    //         {num % 2 === 0
    //             ? <Text style={styles.text}>Par</Text>
    //             : <Text style={styles.text}>Ímpar</Text>
    //         }
    //     </>
    // )


    return (
        <>
            <Text style={styles.text}>O numero {num} é:</Text>
            <Text style={{ ...styles.text, color: num % 2 === 0 ? 'red' : 'blue' }}>{num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
        </>
    )


}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})