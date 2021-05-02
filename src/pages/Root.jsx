import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Form from '../components/Form/Form';
import Details from '../components/Details/Details';

const Routes = () => (
  <BrowserRouter>
   <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} /> 
      <Route path="/create" component={Form}/>
      <Route path="/edit/:id" component={Form}/>
      <Route path="/details/:id" component={Details}/>
   </Switch>
  </BrowserRouter>
)


export default Routes;
