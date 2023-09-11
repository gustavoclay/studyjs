import React from 'react'
import { Text } from 'react-native'
import defaultStyle from '../../../styles/DefaultStyle'

export default function Membro(props) {
    return (
        <Text style={defaultStyle.text} >{props.nome} {props.sobreNome}</Text>
    )
}