import React from 'react'
import { Button, StyleSheet } from 'react-native'

export default function Filho(props) {

    function gerarNumeroAleatorio(min, max) {
        const delta = max - min + 1
        return parseInt(Math.random() * delta + min)
    }

    return (
        <Button
            styles={styles.botao}
            title="Gerar Número Aleatório"
            onPress={() => {
                const numeroAleatorio = gerarNumeroAleatorio(props.min, props.max)
                props.funcao(numeroAleatorio)
            }}
        />
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 30
    }
})