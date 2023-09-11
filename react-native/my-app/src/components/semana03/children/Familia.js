import React from 'react'
import { Text } from 'react-native'
import defaultStyle from '../../../styles/DefaultStyle'
export default function Familia(props) {

    return (
        <>
            <Text style={defaultStyle.text}>Membros da Família {props.nomeFamilia}</Text>
            {props.children}
        </>
    )
}
