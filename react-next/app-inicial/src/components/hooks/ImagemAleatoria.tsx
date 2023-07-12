import Image from "next/image"

export default function ImagemAleatoria() {

    let pesquisa: string = ''
    const url = 'https://source.unsplash.com/featured/300x300'

    function getUrlImagem() {
        return `${url}?${pesquisa}`
    }

    function renderButton(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `}
                onClick={() => {
                    pesquisa = valor
                    console.log("🚀 ~ file: ImagemAleatoria.tsx:14 ~ renderButton ~ pesquisa:", getUrlImagem())

                }}
            >
                {valor}
            </button>
        )
    }


    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <Image src={getUrlImagem()} height={300} width={300} alt="Imagem aleatoria" />
            <div className="flex justify-between gap-5">
                {renderButton('abstract')}
                {renderButton('city')}
                {renderButton('person')}
                I</div>
        </div>
    )
}