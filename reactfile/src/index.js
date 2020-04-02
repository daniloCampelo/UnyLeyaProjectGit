import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu';

//Navegação do Menu Principal
import Home from './components/Home';
import Autores from './components/Autores';
import Editoras from './components/Editoras';
import Generos_Leterarios from './components/Generos_Leterarios';
import Livros from './components/Livros';

// Criação 
import CreateLivro from './components/CreateLivro';
import CreateAutor from './components/CreateAutor';
import CreateEditora from './components/CreateEditora';
import CreateGeneroLiterario from './components/CreateGeneroLiterario';

// Edição e Exclusão
import EditLivro from './components/edit/EditLivro';
import DeleteLivro from './components/delete/DeleteLivro';

import EditAutor from './components/edit/EditAutor';
import DeleteAutor from './components/delete/DeleteAutor';

import EditEditora from './components/edit/EditEditora';
import DeleteEditora from './components/delete/DeleteEditora';

import EditGenero from './components/edit/EditGenero';
import DeleteGenero from './components/delete/DeleteGenero';



ReactDOM.render(
    <Router>
      <Menu>      
        <Route path="/Home" component={Home}/>
        <Route path="/Livros" component={Livros}/>
        <Route path="/Autores" component={Autores}/>
        <Route path="/Editoras" component={Editoras}/>
        <Route path="/Generos_Leterarios" component={Generos_Leterarios}/>

        <Route path="/CreateLivro" component={CreateLivro}/>
        <Route path="/CreateAutor" component={CreateAutor}/>
        <Route path="/CreateEditora" component={CreateEditora}/>
        <Route path="/CreateGeneroLiterario" component={CreateGeneroLiterario}/>

        <Route path="/edit/EditLivro" component={EditLivro}/>
        <Route path="/delete/DeleteLivro" component={DeleteLivro}/>

        <Route path="/edit/EditAutor" component={EditAutor}/>
        <Route path="/delete/DeleteAutor" component={DeleteAutor}/>

        <Route path="/edit/EditEditora" component={EditEditora}/>
        <Route path="/delete/DeleteEditora" component={DeleteEditora}/>

        <Route path="/edit/EditGenero" component={EditGenero}/>
        <Route path="/delete/DeleteGenero" component={DeleteGenero}/>


      </Menu>
    </Router> 
    ,document.getElementById('root')
);


serviceWorker.unregister();
