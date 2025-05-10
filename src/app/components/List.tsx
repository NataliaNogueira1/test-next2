'use client';

import { useEffect, useState } from 'react';
import { FaCrown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface Aluno {
    id: number;
    firstName: string;
    address: {
        state: string;
    };
  }

export default function List(){

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10')
      .then(res => res.json())
      .then(data => setAlunos(data.users));
  }, []);

  return(
    <ul className="space-y-4 p-6 rounded-md shadow w-2/3" style={{ backgroundColor: '#dce6f0' }}>
        
        <div className="flex gap-2 text-2xl text-slate-900">
            <h1>N°</h1>
            <h1>Nome:</h1>
            <h1>Turma:</h1>
            <h1>Líder</h1>
            <h1>Expulsar</h1>
            <h1>Situação:</h1>
        </div>
      
      {alunos.map ((aluno) => (
        <li key={aluno.id} className="flex gap-2">
          <button
            className="!bg-white text-center w-1/6 flex items-center justify-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
            {aluno.id}
          </button>
          <button
            className="!bg-white text-left w-full flex items-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
            {aluno.firstName}
          </button>
          <button
            className="!bg-white text-left w-full flex items-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
            {aluno.address.state}
          </button>
          <button
          className="!bg-white w-1/6 flex items-center justify-center gap-2 p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}
          title="Promover aluno a lider"
          >
            <FaCrown className="text-2xl" />
          </button>
          <button
          className="!bg-white w-1/6 flex items-center justify-center gap-2 text-red-600 p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}
          title="Expulsar aluno"
          >
            <MdCancel className="text-2xl" />
          </button>
          <button
          className="text-center w-full flex items-center justify-center gap-2 text-white p-2 rounded-md" style={{ backgroundColor: '#1D154A' }}
          title="Excluir tarefa"
          >
            Aprovado
          </button>
        </li>

      ))}
    </ul>
  );
}
  