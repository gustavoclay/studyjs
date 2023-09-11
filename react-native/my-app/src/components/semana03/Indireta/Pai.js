import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Filho from './Filho'


export default function Pai() {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text style={styles.texto}>{num}</Text>
            <Filho
                min={0}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30
    }
})