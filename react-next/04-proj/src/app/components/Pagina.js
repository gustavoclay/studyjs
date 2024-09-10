import { Container } from 'react-bootstrap'
import BarraNavegacao from './BarraNavegacao'

export default function Pagina(props) {
  return (
    <>

      <BarraNavegacao />

      <div className='bg-secondary text-white text-center p-3 mb-3'>
        <h1>{props.titulo}</h1>
      </div>


      <Container className='mb-5'>
        {props.children}
      </Container>

    </>
  )
}
