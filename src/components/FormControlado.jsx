import React, { useState } from 'react';

const FormControlado = () => {

    const [todo, setTodo] = useState({
        title: 'Todo 01',
        description: 'Descripcion 01',
        state: 'pendiente',
        priority: true
    })

    //Desestructuramos el objeto e
    const {title,description, state, priority} = todo;

    const handleSubmitt = (e) =>{
        e.preventDefault();
        console.log(title,description,state)       
      }
    
    const handleChange = e => {
        //Desestructuramos el objeto e
        const {name,type,checked, value} = e.target
         setTodo ({
            ...todo,
            // En corchetes puedes meter como entre comillas una propiedad para que no se rompa el codigo ejemplo todo['propiedad-x']
            [name] : type === 'checkbox' 
                                ? checked
                                : value,
         })
         console.log(checkbox)
    }
      
  return (
    <form onSubmit={handleSubmitt} >
        <input type="text" 
            placeholder="Ingresar" 
            className="form-control mb-2 mt-4"
            name="title"
            value={title}
            // Utilizamos spreadOperator para crear una copia del state y marcarle unicamente el cambio en su propiedad correspondiente
            onChange={handleChange}
        />
        
        <textarea className="form-control mb-2" 
                placeholder="Ingresa descripción"
                name="description"
                onChange={handleChange}
        />
        <div className='form/check mb-2'>
            <input type="checkbox" 
                   name='priority' 
                   className='form-check-input' 
                   id='inputCheck'
                   checked = {priority}
                   //onChange = {(e) => setTodo({...todo, priority:e.target.checked})}
                   onChange ={handleChange}
            />
            <label htmlFor="inputCheck"> Dar prioridad</label>
        </div>
        
        <select className="form-select mb2"
                name="state"
                onChange={handleChange}>
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
    <button className=" btn btn-primary form-control" type="submit" >Procesar</button>   
    
</form>
  )
}

export default FormControlado;
