'use client'

import { useEffect, useState } from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

export default function page(props) {

  const [serie, setSerie] = useState({})

  useEffect(() => {
    getSerie()
  }, [])

  async function getSerie() {
    const resultado = await apiFilmes.get('/tv/' + props.params.id + '?language=pt-BR')
    const serie = resultado.data
    setSerie(serie)
  }

  function retornarSerie() {
    return (
      <Pagina titulo={serie.original_name}>
        <Row>

          <Col md={3}>
            <CardImg variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
          </Col>

          <Col md={9}>
            <p><strong>Data de Lançamento: </strong>{serie.first_air_date}</p>
            <p><strong>Duração: </strong>{serie.runtime} min</p>
            <p><strong>Nota: </strong>{serie.vote_average} ⭐</p>
            <p><strong>Temporadas: </strong>{serie.number_of_seasons}</p>
            <p><strong>Episódios: </strong>{serie.number_of_episodes}</p>
            <div>
              <strong>Gêneros: </strong>
              <ul>
                {serie.genres.map(item => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
            <p>{serie.overview}</p>
          </Col>

        </Row>
      </Pagina>
    )
  }

  function retornarCarregando() {
    return (
      <Pagina>Carregando...</Pagina>
    )
  }


  return (
    serie.id ? retornarSerie() : retornarCarregando()
  )
}
