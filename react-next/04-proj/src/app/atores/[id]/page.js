'use client'

import { useEffect, useState } from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'
import Link from 'next/link'


export default function page(props) {

  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])
  const [series, setSeries] = useState([])
  const [imagens, setImagens] = useState([])

  useEffect(() => {
    getAtor()
    getImagens()
    getFilmes()
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

  async function getImagens() {
    const resultado = await apiFilmes.get('/person/' + props.params.id + '/images?language=pt-BR')
    const imagensRecebidas = resultado.data.profiles
    setImagens(imagensRecebidas)
  }

  return (
    <Pagina titulo={ator.name}>

      {ator.id && (
        <>

          {/* Informações do Ator */}
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

          {/* Imagens do Ator */}
          <div className='mt-2'>
            <h2 className='text-center'>Imagens</h2>
          </div>

          <Row md={6}>
            {imagens.map(imagem => {
              return (
                <Col className='py-2'>
                  <CardImg src={'https://image.tmdb.org/t/p/w500/' + imagem.file_path} />
                </Col>
              )
            })}
          </Row>

          {/* Filmes do Ator */}
          <div className='mt-2'>
            <h2 className='text-center'>Filmes</h2>
          </div>

          <Row md={4}>
            {filmes.map(filme => {
              return (
                <Col className='py-2'>
                  <Link href={'/filmes/' + filme.id}>
                    <CardImg src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                  </Link>
                </Col>
              )
            })}

          </Row>

        </>


      )}

    </Pagina>
  )
}
