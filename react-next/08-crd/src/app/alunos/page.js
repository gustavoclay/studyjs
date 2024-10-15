'use client'

import Pagina from '@/components/Pagina';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPenAlt, FaPlusCircle } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export default function AlunosPage() {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    const alunosLocalStorage = JSON.parse(localStorage.getItem('alunos')) || [];
    console.log("🚀 ~ useEffect ~ alunosLocalStorage:", alunosLocalStorage)
    setAlunos(alunosLocalStorage);
  }, []);


  function excluir(aluno) {
    const novosAlunos = alunos.filter((item) => item.id !== aluno.id);
    localStorage.setItem('alunos', JSON.stringify(novosAlunos));
    setAlunos(novosAlunos);
    toast.success(`Aluno ${aluno.nome} excluído com sucesso!`);
  }

  return (
    <Pagina titulo={"Alunos"}>

      <div className='text-end'>
        <Button variant="primary" className="my-3" href='/alunos/form'><FaPlusCircle /> Novo </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
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
              <td>{aluno.matricula}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.sobrenome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.faculdade}</td>
              <td>{aluno.periodo}</td>
              <td className='text-center'>
                <Button variant="warning" href={`/alunos/form/${aluno.id}`} title="Editar"><FaPenAlt /></Button>
                <Button variant="danger" className="ms-2" title="Excluir" onClick={() => excluir(aluno)}><FaX /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};
