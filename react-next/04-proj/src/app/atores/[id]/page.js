'use client'

import Galeria from '@/app/components/Galeria'
import { useEffect, useState } from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'


export default function page(props) {

  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])
  const [series, setSeries] = useState([])
  const [imagens, setImagens] = useState([])

  useEffect(() => {
    getAtor()
    getFilmes()
    getSeries()
    getImagens()
  }, [])

  async function getAtor() {
    const resultado = await apiFilmes.get('/person/' + props.params.id + '?language=pt-BR')
    const ator = resultado.data
    setAtor(ator)
  }

  async function getFilmes() {
    const resultado = await apiFilmes.get('/person/' + props.params.id + '/movie_credits?language=pt-BR')
    const filmesRecebidos = resultado.data.cast
    setFilmes(filmesRecebidos)
  }

  async function getSeries() {
    const resultado = await apiFilmes.get('/person/' + props.params.id + '/tv_credits?language=pt-BR')
    const seriesRecebidas = resultado.data.cast
    setSeries(seriesRecebidas)
  }

  async function getImagens() {
    const resultado = await apiFilmes.get('/person/' + props.params.id + '/images?language=pt-BR')
    const imagensRecebidas = resultado.data.profiles
    setImagens(imagensRecebidas)
  }

  function retornarAtor() {
    return (
      <Pagina titulo={ator.name}>
        <Row>

          <Col md={3}>
            <CardImg variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
          </Col>

          <Col md={9}>
            <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
            <p><strong>Nacionalidade: </strong>{ator.place_of_birth}</p>
            <p><strong>Biografia: </strong></p>
            <p>{ator.biography}</p>
          </Col>

        </Row>

        <Galeria titulo="Imagens" lista={imagens} link="/atores" />

        <Galeria titulo="Filmes" lista={filmes} link="/filmes" />

        <Galeria titulo="Séries" lista={series} link="/series" />

      </Pagina>
    )
  }

  function retornarCarregando() {
    return (
      <Pagina>Carregando...</Pagina>
    )
  }

  return (
    ator.id ? retornarAtor() : retornarCarregando()
  )
}
