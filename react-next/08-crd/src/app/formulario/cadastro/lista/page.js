'use client'

import Pagina from '@/components/Pagina';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function CadastroListaPage() {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    const alunosLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];
    console.log("🚀 ~ useEffect ~ alunosLocalStorage:", alunosLocalStorage)
    setAlunos(alunosLocalStorage);
  }, []);


  return (
    <Pagina titulo={"Alunos"}>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Período</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.matricula}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.sobrenome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.faculdade}</td>
              <td>{aluno.periodo}</td>
              <td>
                <img src={aluno.foto} alt={aluno.nome} style={{ width: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};
