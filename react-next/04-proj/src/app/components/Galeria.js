import Link from 'next/link'
import { Card, Col, Row } from "react-bootstrap"
export default function Galeria(props) {

  const { titulo, lista, link } = props

  function getImagemUrl(item) {
    if (item.profile_path) {
      return 'https://image.tmdb.org/t/p/w500/' + item.profile_path
    } else if (item.poster_path) {
      return 'https://image.tmdb.org/t/p/w500/' + item.poster_path
    } else if (item.file_path) {
      return 'https://image.tmdb.org/t/p/w500/' + item.file_path
    } else {
      return 'https://dummyjson.com/image/500x750'
    }
  }

  function getLinkUrl(item) {
    if (item.id) {
      return link + '/' + item.id
    } else {
      return ''
    }

  }

  return (
    <>
      <Row className='mt-2'>
        <h2 className="text-center">
          {titulo}
        </h2>
      </Row>

      <Row md={4} className='mt-2'>
        {lista.map(item => {
          return (
            <Col className='py-3'>
              <Link href={getLinkUrl(item)}>
                <Card.Img variant="top" src={getImagemUrl(item)} />
              </Link>
            </Col>
          )
        })}
      </Row>

    </>
  )
}
