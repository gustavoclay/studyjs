import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'

export default function DigiteSeuNome() {

    // let nome = 'Test'
    const [nome, setNome] = useState('')

    return (
        <View>
            <Text>{nome}</Text>

            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                keyboardType='numeric'
                onChangeText={textoDigitado => setNome(textoDigitado)}
            />
        </View>
    )
}