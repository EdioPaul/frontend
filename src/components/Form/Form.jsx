import React, { useState, useEffect, useParams} from 'react';
import axios from 'axios'; 
import {useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'; 

import './Form.css';

const initialValue = {
  name: '',
  avatar: ''
}

const Form = (props) => {
const [values, setValues] = useState({initialValue})
const history = useHistory(); 
const id = props.match.params.id;

  useEffect(() => {
    if(id){
      axios.get(`https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`)
       .then((response) => {
        setValues(response.data);
      })
      .catch(error => { console.log(error) });
    }
  }, []);

  function onChange(ev) {
  const { name, value } = ev.target;

  setValues({ ...values, [name]: value });
}

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`
      : 'https://60831bd35dbd2c001757b2c7.mockapi.io/api/users'

    axios[method](url, values)
     .then((response) => {
      history.push('/home')
     })
      .catch(error => { console.log(error) });
  }

    return (
    <div className="user-form">
      <h1 className="user-form__title">Cadastro do usuário</h1>
      <form onSubmit={onSubmit}>
        <div className="user-form__form-control">
          <label htmlFor="name"></label>
          <input 
            id="name" 
            type="text" 
            name="name"
            placeholder="Nome"            
            onChange= {onChange}
            value={values.name}
           />
        </div>
        <div className="user-form__form-control">
          <label htmlFor="avatar"></label>
          <input 
            id="avatar"
            type="text"
            name="avatar"
            placeholder="Avatar"
            onChange={onChange}
            value={values.avatar}
          />
        </div>
        <div className="btn-links-form">
            <Link to={'/home'}>
              <button className="btn-button-form">Voltar</button>
           </Link> 
           <button type="submit" className="btn-button-form">Salvar</button>
           </div>

      </form>
    </div>
  )
};

export default Form;
