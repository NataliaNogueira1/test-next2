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
    <div className="space-y-4 my-4 flex gap-2 rounded-md items-center justify-center shadow-lg min-w-[60%] h-full overflow-x-auto" style={{ backgroundColor: '#dce6f0' }}>
      <table className="p-6 my-[10%] min-w-[85%] min-h-[60%] border-none items-center justify-center">
          
          <thead className="text-xl text-dark">
            <tr>
              <th className="px-3 text-center font-normal">N°</th>
              <th className="px-3 text-center font-normal">Nome:</th>
              <th className="px-3 text-center font-normal">Turma:</th>
              <th className="px-3 text-center font-normal">Líder</th>
              <th className="px-3 text-center font-normal">Expulsar</th>
              <th className="px-3 text-center font-normal">Situação:</th>
            </tr>
          </thead>
        
          <tbody>
            {alunos.map ((aluno) => (
              <tr key={aluno.id}>
                    <td className="p-3 text-center">  
                      <button
                        className="bg-white text-center w-full flex items-center justify-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
                        {aluno.id}
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white text-left w-full flex items-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
                        {aluno.firstName}
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="bg-white text-left w-full flex items-center gap-2 text-dark p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}>
                        {aluno.address.state}
                      </button>
                    </td>
                    <td className="p-3 pl-5 text-center">
                      <button
                      className="bg-white flex items-center justify-center gap-2 p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}
                      title="Promover aluno a lider"
                      >
                        <FaCrown className="text-2xl" />
                      </button>
                    </td>
                    <td className="p-3 pl-10 text-center">
                      <button
                      className="bg-white flex items-center justify-center gap-2 text-red-600 p-2 rounded-md border border-2" style={{ borderColor: '#7E9DD6' }}
                      title="Expulsar aluno"
                      >
                        <MdCancel className="text-2xl" />
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                      className="text-center w-full flex items-center justify-center gap-2 text-white p-2 rounded-md" style={{ backgroundColor: '#1D154A' }}
                      title="Excluir tarefa"
                      >
                        Aprovado
                      </button>
                    </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
  