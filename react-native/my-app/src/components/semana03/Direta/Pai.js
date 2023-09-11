import React from 'react'
import { StyleSheet } from 'react-native'
import Filho from './Filho'

export default function Pai() {
    return (
        <>
            <Filho titulo="Os Vingadores" descricao="Filme de super-heróis da marca Marvel" />
            <Filho titulo="Homem Aranha" descricao="Filme de super-herói da Universal" />
            <Filho titulo="Super Homem" descricao="Filme de super-herói da DC" />
        </>
    )
}

const styles = StyleSheet.create({})