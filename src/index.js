import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video/index.js'
import CadastroCategoria from './pages/cadastro/Categoria/index.js'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const pagina404 = () => (<div><h1>PÁGINA 404</h1></div>)

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={pagina404} exact />
    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);
