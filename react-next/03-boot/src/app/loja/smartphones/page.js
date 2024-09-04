'use client'

import Pagina from "@/app/components/Pagina";
import apiLoja from "@/app/services/apiLoja";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Produto from "../Produto";


export default function page() {

  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    apiLoja.get('/products/category/smartphones').then(response => {
      console.log(response.data)
      setSmartphones(response.data.products)
    })
  }, [])



  return (
    <Pagina titulo="Smartphones">
      <Row xs={1} sm={2} md={3} lg={4}>
        {smartphones.map((smartphone) => {
          return (
            <Col className="py-2">
              <Produto produto={smartphone} />
            </Col>
          )
        })}
      </Row>


    </Pagina>
  )
}
