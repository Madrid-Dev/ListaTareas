import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas,cambiarTareas}) => {
    const toggleCompletada = (id) =>{
        console.log(id);
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id)
            { // PREGUNTO POR CADA TAREA SI EL ID ES EL MISMO
                return {...tarea, completada : !tarea.completada}
            }
            return tarea;
        }));
    }

    const editarTareas = (id,texto) =>{
        cambiarTareas(tareas.map((tarea)=> {
            if(tarea.id === id){
                console.log(tarea.texto);
                return{
                    ...tarea,
                    texto : texto
                    
                }
                
            }
            return tarea;
        }));
    }
    return ( 
        <ul className="lista-tareas">
            { tareas.length > 0 ? tareas.map((tarea) =>{
                return <Tarea  key={tarea.id} tarea={tarea} toggleCompletada={toggleCompletada} editarTareas={editarTareas} />

                })
            : <div className="lista-tareas__mensaje">~ No hay tareas ~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;