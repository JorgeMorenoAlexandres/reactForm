import { useRef, useState } from "react";

const NOcontrolado = () => {

  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmitt = (e) =>{
    e.preventDefault();
    setError('');
    // capturar los datos
    const data = new FormData(form.current);
    console.log(...data.entries());
    const {title, description, state} = Object.fromEntries([...data.entries()]);
    console.log(title, description, state);

    //Validar los datos
    if(!title.trim() || !description.trim() || !state.trim()) return setError("debes llenar los datos");

    //Enviar los datos

  } 

  return (
    <form onSubmit={handleSubmitt} ref={form} >
        <input type="text" 
               placeholder="Ingresar" 
               className="form-control mb-2 mt-4"
               name="title"
        />
        <textarea className="form-control mb-2" 
                  placeholder="Ingresa descripción"
                  name="description"
        />
        <select className="form-select mb2"
                name="state">
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        <button className=" btn btn-primary form-control" type="submit" >Procesar</button>
        { error !== '' && error}
        
    </form>
  )
}


export default NOcontrolado
