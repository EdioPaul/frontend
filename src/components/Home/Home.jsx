import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom';

import './Home.css';

const Home = () => {
const [users, setUsers] = useState([]);
const history = useHistory(); 

    useEffect(() => {
      axios.get('https://60831bd35dbd2c001757b2c7.mockapi.io/api/users')
      .then((response) => {
        setUsers(response.data);
    })
      .catch(error => { console.log(error) });
  }, []);

  async function handleDelete(id) {
    const response = await axios.delete(`https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`)
    .catch(error => { console.log(error) });
    history.push('/home')
}
    return ( 
      <div className="list">
        <Link to={'/create'}>
          <button className="btn-insert">Inserir</button>
        </Link>

         { users.map(user => (
           <div className="list-box">
             <ul key= { user.id }> 
             <strong>{ user.name }</strong>
           <div className="btn-links">
             <Link to={`/details/${user.id}`}>
               <button className="btn-button-details">Ver detalhes</button>
             </Link>
             <Link to={`/edit/${user.id}`}>
               <button className="btn-button-edit">Editar</button>
             </Link>
             <Link to={`/delete/${user.id}`}>
               <button className="btn-button-delete" onClick={() => handleDelete(user.id)}>Exluir</button>
             </Link>
             </div>
             </ul>
            </div>
          ))}
      </div>
    )
  };


export default Home;