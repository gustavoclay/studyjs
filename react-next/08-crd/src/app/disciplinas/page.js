'use client'

import Pagina from '@/components/Pagina';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

export default function page() {

  const [disciplinas, setDisciplinas] = useState([]);
  const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
  const professores = JSON.parse(localStorage.getItem('professores')) || [];

  useEffect(() => {
    const disciplinasLocalStorage = JSON.parse(localStorage.getItem('disciplinas')) || [];
    setDisciplinas(disciplinasLocalStorage);
  }, []);

  function excluir(disciplina) {
    if (window.confirm(`Deseja realmente excluir a disciplina ${disciplina.nome}?`)) {
      const novasDisciplinas = disciplinas.filter((item) => item.id !== disciplina.id);
      localStorage.setItem('disciplinas', JSON.stringify(novasDisciplinas));
      setDisciplinas(novasDisciplinas);
      alert('Disciplina excluída com sucesso!');
    }
  }

  function getCursoNome(id) {
    const curso = cursos.find(curso => curso.id === id);
    return curso ? curso.nome : 'Desconhecido';
  }

  function getProfessorNome(id) {
    const professor = professores.find(professor => professor.id === id);
    return professor ? professor.nome : 'Desconhecido';
  }

  return (
    <Pagina titulo="Lista de Disciplinas">

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/disciplinas/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Curso</th>
            <th>Professor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina.id}>
              <td>{disciplina.nome}</td>
              <td>{disciplina.descricao}</td>
              <td>{disciplina.status}</td>
              <td>{getCursoNome(disciplina.curso)}</td>
              <td>{getProfessorNome(disciplina.professor)}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/disciplinas/form?id=${disciplina.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(disciplina)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}
