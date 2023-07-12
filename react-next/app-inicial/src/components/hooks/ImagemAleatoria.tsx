import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
    // let pesquisa: string = ''
    const url = 'https://source.unsplash.com/featured'

    // function getUrlImagem() {
    //     return `${url}?${pesquisa}`
    // }

    function renderButton(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `}
                onClick={() => {
                    setPesquisa(valor)
                    console.log("🚀 ~ file: ImagemAleatoria.tsx:14 ~ renderButton ~ pesquisa:", valor)

                }}
            >
                {valor}
            </button>
        )
    }


    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image
                className="rounded-md"
                src={`${url}/${tamanho}x${tamanho}?${pesquisa}`}
                height={300} width={300} alt="Imagem aleatoria"
            />
            <div className="flex justify-between gap-5">
                {renderButton('abstract')}
                {renderButton('city')}
                {renderButton('person')}
            </div>
            <div>
                <input
                    className="p-2 rounded-md outline-none w-full"
                    type="number"
                    value={tamanho}
                    onChange={e => {
                        setTamanho(+e.target.value)
                    }} />
            </div>
        </div>
    )
}