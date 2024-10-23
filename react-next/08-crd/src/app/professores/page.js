'use client'

import Pagina from '@/components/Pagina';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle, FaStar } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

export default function page() {

  const [professores, setProfessores] = useState([]);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const professoresLocalStorage = JSON.parse(localStorage.getItem('professores')) || [];
    setProfessores(professoresLocalStorage);

    const cursosLocalStorage = JSON.parse(localStorage.getItem('cursos')) || [];
    setCursos(cursosLocalStorage);
  }, []);

  function excluir(professor) {
    if (window.confirm(`Deseja realmente excluir o professor ${professor.nome}?`)) {
      const novosProfessores = professores.filter((item) => item.id !== professor.id);
      localStorage.setItem('professores', JSON.stringify(novosProfessores));
      setProfessores(novosProfessores);
      alert('Professor excluído com sucesso!');
    }
  }

  function getCursoNome(id) {
    const curso = cursos.find(curso => curso.id === id);
    return curso ? curso.nome : 'Desconhecido';
  }

  return (
    <Pagina titulo="Lista de Professores">

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/professores/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Matrícula</th>
            <th>Status</th>
            <th>Curso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.dataNascimento}</td>
              <td>{professor.matricula}</td>
              <td>{professor.status}</td>
              <td>{getCursoNome(professor.curso)}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/professores/form?id=${professor.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(professor)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}
