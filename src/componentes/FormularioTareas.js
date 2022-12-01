import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import{ v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({tareas,cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState(''); 
    // HAGO ESTO PARA PODER CAMBIAR EL INPUT SIEMPRE QUE HAGO UN CAMBIO
    // ESTO SE HACE YA QUE SINO COMO PODRIA VALIDAR ESE VALOR
    // CON UN ESTADO CHECKEO QUE CAMBIO HAY, LO CAMBIO Y LO PUEDO ASIGNAR

    const handleInput = (e) =>{
        cambiarInputTarea(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        

        cambiarTareas(
            [
                ...tareas,//Tomar todo el valor de tareas
                 {
                    id:uuidv4(),
                    texto:inputTarea,
                    completada: false
                 }
            ]
        );
        cambiarInputTarea('');
    }

    return ( 
        <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="formulario-tareas__input" 
                placeholder='Escribe una tarea aqui...'
                value={inputTarea}
                onChange={(e) => handleInput(e)}
                />

                <button 
                className="formulario-tareas__btn" 
                type='submit'>

                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                        className = 'formulario-tareas__icono-btn'/>                 
                </button>
        </form>

     );
}
 
export default FormularioTareas;