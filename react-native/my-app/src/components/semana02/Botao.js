import { Button } from "react-native";

export default function Botao() {


    function executar() {
        console.warn("Clicou")
    }

    return (
        <>
            {/* REFERENCIA */}
            <Button
                title="Clique Aqui"
                onPress={executar}
            />
            {/* FUNCAO */}
            <Button
                title="Clique Aqui 2"
                onPress={function () {
                    console.warn("Clicou 2")
                }}
            />
            {/* ARROW */}
            <Button
                title="Clique Aqui 3"
                onPress={() => console.warn("Clicou 3")}
            />
        </>
    )

}