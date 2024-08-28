import styles from './fundamentos.module.css'

export default function Cabecalho(props) {

  // Estilos CSS
  // console.log(props)
  // <header className={styles.cabecalho}
  // <header style={{textAlign: 'center'}}>

  return (
    <header style={style}>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
      <hr />
    </header>
  )
}

const style = {
  textAlign: 'center',
  color: 'red'
}
