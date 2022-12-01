import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas,cambiarTareas,mostrarCompletadas}) => {
    const toggleCompletada = (id) =>{
        console.log(id);
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id)
            { // PREGUNTO POR CADA TAREA SI EL ID ES EL MISMO
                return {...tarea, completada : !tarea.completada} //DEVUELVO TODAS LAS COSAS DE T AREA PERO MODIFICO COMPLETADA
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


    const borrarTarea = (id) =>{
        cambiarTareas(tareas.filter((tarea) =>{
            if(tarea.id !== id){
                return tarea;
            }
            return;
        })); //Devolvemos un arreglo excepto un elemento SI ES IGUAL entonces No devolvemos, sino SI
    }
    return ( 
        <ul className="lista-tareas">
            { tareas.length > 0 ? tareas.map((tarea) =>{
                if(mostrarCompletadas){
                    return <Tarea  
                        key={tarea.id} 
                        tarea={tarea} 
                        toggleCompletada={toggleCompletada} 
                        editarTareas={editarTareas} 
                        borrarTarea={borrarTarea} />

                }else if(!tarea.completada){
                    return <Tarea  
                        key={tarea.id} 
                        tarea={tarea} 
                        toggleCompletada={toggleCompletada} 
                        editarTareas={editarTareas} 
                        borrarTarea={borrarTarea} />

                }
                return;
            })
            : <div className="lista-tareas__mensaje">~ No hay tareas ~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;