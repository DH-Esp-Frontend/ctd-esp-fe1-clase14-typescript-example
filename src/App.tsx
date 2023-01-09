import React from 'react';
import './App.css';

interface Empleado {
  id: number;
  nombre: string;
  salario: number;
  empleado: boolean;
  departamento?: string;
}

function App() {
  const personas: Empleado[] = [
    {
      id: 1,
      nombre: "Steve",
      salario: 1000,
      empleado: true,
      departamento: "TI",
    },
    {
      id: 2,
      nombre: "Maria",
      salario: 0,
      empleado: false,
    },
    {
      id: 3,
      nombre: "Fernanda",
      salario: 1200,
      empleado: true,
      departamento: "RH",
    },
    {
      id: 4,
      nombre: "Carlos",
      salario: 0,
      empleado: false,
    },
  ];

  return (
    <div className="App">
      {personas.map(persona => <div>
        <p>{persona.id} - <strong>{persona.nombre}</strong> - Salário de US$ {persona.salario} - {persona.empleado ? 'Es empleado' : 'No es funcionario'} {persona.empleado && persona.departamento && `del departamento de ${persona.departamento}`}</p>
      </div>)}
    </div>
  );
}

export default App;
