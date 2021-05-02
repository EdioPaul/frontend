import React, { Component } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

import './Details.css';

export default class Details extends Component {
 state = {
     user: {},
 };

   async componentDidMount() {
       const { id } = this.props.match.params;
       const response = await axios.get(`https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`)
       this.setState({ user: response.data })
   }

    render() {
        const { user } = this.state;
        
        return (
            <div className="user-detail">
               <ul><strong>ID:</strong> { user.id }</ul>
               <ul><strong>Data de registro:</strong> { user.createdAt }</ul>
               <ul><strong>Nome:</strong> { user.name }</ul>
               <ul><strong>Avatar:</strong> { user.avatar }</ul>

           <Link to={'/home'}>
              <button className="btn-button-return-detail">Voltar</button>
           </Link>            
           </div>

        );
    }       
}

