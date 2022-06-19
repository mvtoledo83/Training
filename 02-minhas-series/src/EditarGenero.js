import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

const EditarGenero = (props) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
            .get('/api/genres/1655476774835')
            .then(res => {
                setName(res.data.name)
            })

    }, [])

    console.log('Propriedades:'+ props)

    const onChange = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios.post('/api/genres', {
            name
        })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return <Navigate to='/generos' />
    }
    return (
        <div className="container">
            <h1>Editar Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input value={name} onChange={onChange} type="text" className="form-control" id="name" placeholder="Nome do Gênero" />
                </div>
                <button type='button' onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero