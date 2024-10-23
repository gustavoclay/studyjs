'use client'

import Pagina from '@/components/Pagina';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle, FaStar } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

export default function page() {

  const [cursos, setCursos] = useState([]);
  const [faculdades, setFaculdades] = useState([]);

  useEffect(() => {
    const cursosLocalStorage = JSON.parse(localStorage.getItem('cursos')) || [];
    setCursos(cursosLocalStorage);

    const faculdadesLocalStorage = JSON.parse(localStorage.getItem('faculdades')) || [];
    setFaculdades(faculdadesLocalStorage);
  }, []);

  function excluir(curso) {
    if (window.confirm(`Deseja realmente excluir o curso ${curso.nome}?`)) {
      const novosCursos = cursos.filter((item) => item.id !== curso.id);
      localStorage.setItem('cursos', JSON.stringify(novosCursos));
      setCursos(novosCursos);
      alert('Curso excluído com sucesso!');
    }
  }

  function getFaculdadeNome(id) {
    const faculdade = faculdades.find(faculdade => faculdade.id === id);
    return faculdade ? faculdade.nome : 'Desconhecida';
  }

  return (
    <Pagina titulo="Lista de Cursos">

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/cursos/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Área</th>
            <th>Nota</th>
            <th>Status</th>
            <th>Faculdade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.nome}</td>
              <td>{curso.descricao}</td>
              <td>{curso.area}</td>
              <td>{curso.nota} <FaStar /></td>
              <td>{curso.status}</td>
              <td>{getFaculdadeNome(curso.faculdade)}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/cursos/form?id=${curso.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(curso)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}
