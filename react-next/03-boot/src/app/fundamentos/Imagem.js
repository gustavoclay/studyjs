

export default function ImagemAleatoria() {

  const idAleatorio = Math.round(Math.random() * 201)

  const urlImagem = `https://picsum.photos/id/${idAleatorio}/300`

  console.log(urlImagem)

  return (
    <>
      <h3>Imagem aleatória</h3>
      <img src={urlImagem} alt="Imagem aleatória" />
    </>
  )
}
