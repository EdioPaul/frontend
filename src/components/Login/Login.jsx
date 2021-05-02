import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import usePasswordToggle from '../../hooks/usePasswordToggle';

import './Login.css';

function initialState() {
  return { email: '', password: ''};
}

function login({ email, password }) {
  if (password.length < 6 )
    alert('Senha contém no minimo 6 caracteres.')
  if(email === 'next.shipping@nextshipping.com' && password === 'nextshipping') {
    return { token: '0123456789'};
  }
    alert ('Email ou senha inválido!')
}

const UserLogin = () => {
const [PasswordInputType, ToggleIcon] = usePasswordToggle();  
const [values, setValues] = useState(initialState);
const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({ ...values,[name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    const token = login(values);

    if(token) {
      return history.push('/home');
    }else
    setValues(initialState);
  
 }
    return (
    <div className="user-login">
      <h1 className="user-login__title">Next Shipping</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email"></label>
          <input 
            id="email" 
            type="email" 
            name="email"
            placeholder="Email"            
            onChange= {onChange}
            value= {values.email}
           />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password"></label>
          <input 
            id="password"
            type={PasswordInputType}
            name="password"
            placeholder="Senha"
            onChange={onChange}
            value={values.password}
          />
          <span className="password-toggle-icon">{ToggleIcon}</span>
        </div>
        <button type="submit" theme="contained-yellow" className="user-login__submit-button">Entrar</button>
      </form>
    </div>
  );
};


export default UserLogin;
