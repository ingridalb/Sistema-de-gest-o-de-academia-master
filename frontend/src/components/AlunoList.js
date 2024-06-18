// src/components/AlunoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlunoList = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/alunos/')
      .then(response => {
        setAlunos(response.data);
      })
      .catch(error => {
        console.error('Houve um erro!', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
