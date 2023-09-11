import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function IntroducaoEstilos() {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://www.fakepersongenerator.com/Face/male/male20151086253590271.jpg' }}
                style={styles.img}
            />

            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textGray]} >Nome:</Text>
                <Text style={[styles.text, styles.textBlack]} >Frank S Leija</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textGray]} >Email:</Text>
                <Text style={[styles.text, styles.textBlack]} >max1991@hotmail.com</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textGray]} >Telefone:</Text>
                <Text style={[styles.text, styles.textBlack]} >631-862-6875</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: 'yellow',
        margin: 20,
        padding: 10
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'gray'
    },
    textContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20
    },
    textGray: {
        color: 'gray'
    },
    textBlack: {
        color: 'black'
    }
})