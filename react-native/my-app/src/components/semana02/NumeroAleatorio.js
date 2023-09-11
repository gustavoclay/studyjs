import { Text } from "react-native";

export default function NumeroAleatorio(props) {

    props.min += 1000
    props.max += 2000

    // const {min, max} = props
    let {min, max} = props

    min += 1000
    max += 2000

    const delta = max - min + 1
    const numeroAleatorio = parseInt(Math.random() * delta + min)

    return <Text>Numero Aleatorio: {numeroAleatorio}</Text>


}