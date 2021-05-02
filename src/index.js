import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';
import * as serviceWorker from './serviceWorker';

//conceito de componentização, o arquivo index é o primeiro a ser aberto, é onde inicia toda a aplicação.
//.render está renderizando o conteudo de App.js na div principal do html ( pasta public/index.html)
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
