import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas'
import React, {useState} from 'react';
import ListaTareas from './componentes/ListaTarea';

const App= ()=>{
  const [tareas, cambiarTareas] = useState(
    [
      {
        id:1,
        texto: 'Tarea 1',
        completada: false
     }

    ]
    
  );
  return (
    <div className='contenedor'>
      <Header/>
      <FormularioTareas tareas ={tareas} cambiarTareas = {cambiarTareas}/>
      <ListaTareas tareas = {tareas} cambiarTareas={cambiarTareas}></ListaTareas>
    </div>
  );
}

export default App;
