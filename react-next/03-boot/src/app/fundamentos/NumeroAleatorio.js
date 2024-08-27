export default function NumeroAleatorio() {

  const numeroAleatorio = Math.round(Math.random() * 100)
  return (
    <>
      <h3>Número Aleatório:</h3>
      <p>{numeroAleatorio}</p>
    </>
  )

}
