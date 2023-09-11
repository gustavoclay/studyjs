import { StyleSheet } from 'react-native';

const FontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
}

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30
    }
})

export default defaultStyle