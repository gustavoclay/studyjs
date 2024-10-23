'use client'

import Pagina from '@/components/Pagina';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

export default function AlunosPage() {

  const [alunos, setAlunos] = useState([])
  const [faculdades, setFaculdades] = useState([])
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    const alunosLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];
    setAlunos(alunosLocalStorage);

    const faculdadesLocalStorage = JSON.parse(localStorage.getItem('faculdades')) || [];
    setFaculdades(faculdadesLocalStorage);

    const cursosLocalStorage = JSON.parse(localStorage.getItem('cursos')) || [];
    setCursos(cursosLocalStorage);

  }, []);

  function excluir(aluno) {
    if (window.confirm(`Deseja realmente excluir o curso ${aluno.nome}?`)) {
      const novosAlunos = alunos.filter((item) => item.id !== aluno.id);
      localStorage.setItem('alunos', JSON.stringify(novosAlunos));
      setCursos(novosAlunos);
      alert(`Aluno ${aluno.nome} excluído com sucesso!`);
    }
  }

  function getCurso(id) {
    const curso = cursos.find((item) => item.id === id);
    return curso ? curso.nome : 'Desconhecido';
  }

  function getFaculdade(id) {
    const faculdade = faculdades.find((item) => item.id === id);
    return faculdade ? faculdade.nome : 'Desconhecido';
  }

  return (
    <Pagina titulo={"Alunos"}>

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/alunos/form'><FaPlusCircle /> Novo </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Período</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>
                <img src={aluno.foto} alt={aluno.nome} style={{ width: '50px' }} />
              </td>
              <td>{aluno.matricula}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.sobrenome}</td>
              <td>{getCurso(aluno.curso)}</td>
              <td>{getFaculdade(aluno.faculdade)}</td>
              <td>{aluno.periodo}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/alunos/form?id=${aluno.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(aluno)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};
