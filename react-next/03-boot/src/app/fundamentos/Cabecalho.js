export default function Cabecalho(props){

  // console.log(props)

  return (
    <header style={{textAlign: 'center'}}>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
      <hr />
    </header>
  )
}
