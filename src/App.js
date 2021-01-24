import React, { useState } from 'react';
import Header from './components';
import './App.css';


/*
    componente
    propriedade
    estado e imutabilidade
    3 pilares do REACT FRONTEND

*/
function App(){

    const [projects, setProjects] = useState (['Desenvolvilment de app', 'Front-end web']);
    //useState retorna um array de 2 posições
    // 1- variável com seu valor inicial
    //  2- função para atualizarmos esse valor

    function handleAddProject(){
        

        setProjects([ ...projects,  `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }
    return (
        <>
   <Header title="Projects"/>
        <ul>

        {projects.map(project => <li key={project}>{project}</li>)}

        </ul>
        <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
       
        </>
    );
}

export default App;
