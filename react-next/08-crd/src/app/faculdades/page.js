'use client'

import Pagina from '@/components/Pagina';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

export default function page() {

  const [faculdades, setFaculdades] = useState([])

  useState(() => {
    const faculdadesLocalStorage = JSON.parse(localStorage.getItem('faculdades')) || []
    setFaculdades(faculdadesLocalStorage)
  }, [])


  function excluir(faculdade) {
    if (window.confirm(`Deseja realmente excluir a faculdade ${faculdade.nome}?`)) {
      const novasFaculdades = faculdades.filter((item) => item.id !== faculdade.id)
      localStorage.setItem('faculdades', JSON.stringify(novasFaculdades))
      setFaculdades(novasFaculdades)
      alert('Faculdade excluída com sucesso!')
    }
  }


  return (
    <Pagina titulo="Lista de Faculdades">

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/faculdades/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereco</th>
            <th>Cidade</th>
            <th>UF</th>
            <th>País</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {faculdades.map((faculdade) => (
            <tr key={faculdade.id}>
              <td>{faculdade.nome}</td>
              <td>{faculdade.endereco}</td>
              <td>{faculdade.cidade}</td>
              <td>{faculdade.uf}</td>
              <td>{faculdade.pais}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/faculdades/form?id=${faculdade.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(faculdade)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </Pagina>
  )
}
