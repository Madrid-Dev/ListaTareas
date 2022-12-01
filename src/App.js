import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas'
import React, {useState,useEffect} from 'react';
import ListaTareas from './componentes/ListaTarea';

const App= ()=>{
  let configMostrarCompletadas = '';
  if(localStorage.getItem('completadas')=== null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('completadas') === 'true';}

  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  const [mostrarCompletadas, cambiarCompletadas] = useState(configMostrarCompletadas);

  

  //Use effect para las tareas insertadas
  useEffect(() =>{
    //CADA VEZ QUE SE CAMBIE ALGO SE SETEA EN STORAGE ESTO
    localStorage.setItem('tareas',JSON.stringify(tareas));
    
  },[tareas]);

  //Use effect para el muestreo de completadas
  useEffect(() =>{
    //CADA VEZ QUE SE CAMBIE ALGO SE SETEA EN STORAGE ESTO
    localStorage.setItem('completadas',mostrarCompletadas.toString());
    
  },[mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas = {mostrarCompletadas} 
        cambiarCompletadas={cambiarCompletadas}/>
      <FormularioTareas 
        tareas ={tareas} 
        cambiarTareas = {cambiarTareas}/>
      <ListaTareas 
        tareas = {tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas={mostrarCompletadas}></ListaTareas>
    </div>
  );
}

export default App;
