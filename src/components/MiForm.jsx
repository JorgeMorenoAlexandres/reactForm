import React, { useRef, useState } from 'react';

const MiForm = () => {
    //Hook que se utiliza para referencia del form
    const form = useRef(null);

    const [error, setError] = useState('');

    const HandleSubmit = (e) =>{
        //Previene la carga de la página
        e.preventDefault();
        setError('');
    //*****Creamos la información del formulario en una data****
        const data = new FormData(form.current);
        //Construye el objeto de la data
        const {correo, descripcion} = Object.fromEntries([...data.entries()])
        console.log(correo, descripcion) ;

    //Validar los datos
    if(!correo.trim() || !descripcion.trim()) return setError("debes llenar los datos");

    }

    return (
        <form action="" onSubmit={HandleSubmit} ref={form}>    
            <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name='correo'/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='descripcion'/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {error !== '' && error}
        </form>
    )
}

export default MiForm;
