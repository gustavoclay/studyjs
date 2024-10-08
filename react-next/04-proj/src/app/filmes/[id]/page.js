'use client'

import { useEffect, useState } from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import Link from 'next/link'

export default function page(props) {

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    getFilme()
    getAtores()
  }, [])

  async function getFilme() {
    const resultado = await apiFilmes.get('/movie/' + props.params.id + '?language=pt-BR')
    const filme = resultado.data
    console.log(filme)
    setFilme(filme)
  }

  async function getAtores() {
    const resultado = await apiFilmes.get('/movie/' + props.params.id + '/credits?language=pt-BR')
    const atoresRecebidos = resultado.data.cast
    console.log(atoresRecebidos)
    setAtores(atoresRecebidos)
  }

  return (
    <Pagina titulo={filme.title}>

      {filme.id && (
        <>

          {/* Informações do Filme */}
          <Row>
            <Col md={3}>
              <CardImg variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
            </Col>

            <Col md={9}>
              <p><strong>Orçamento: </strong>{filme.budget} $</p>
              <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
              <p><strong>Duração: </strong>{filme.runtime} min</p>
              <p><strong>Nota: </strong>{filme.vote_average}</p>
              <div>
                <strong>Gêneros: </strong>
                <ul>
                  {filme.genres.map(item => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              </div>
              <p>{filme.overview}</p>
            </Col>

          </Row>

          {/* Elenco do Filme */}

          <Row className='mt-2'>
            <h2 className='text-center'>Elenco</h2>
          </Row>

          <Row md={6}>

            {atores.map(item => (
              <Col className='py-3'>
                <Link href={'/atores/' + item.id}>
                  <CardImg variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                </Link>
              </Col>
            ))}

          </Row>

        </>
      )
      }

    </Pagina>
  )
}
