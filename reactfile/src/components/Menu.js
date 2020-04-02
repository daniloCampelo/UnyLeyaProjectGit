import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';


class Menu extends React.Component{
  render(){
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-check',
         command:() => this.props.history.push('/Home'),
      },
      {
        label:'Livros',
        icon:'pi pi-check',
        command:() => this.props.history.push('/Livros'),
        },
      {
        label:'Autores',
        icon:'pi pi-check',
        command:() => this.props.history.push('/Autores'),
     },
     {
        label:'Editoras',
        icon:'pi pi-check',
        command:() => this.props.history.push('/Editoras'),
     },
     {
        label:'Generos Leterarios',
        icon:'pi pi-check',
        command:() => this.props.history.push('/Generos_Leterarios'),
     },
   

   ];

    return(
      <div>
      <h1>Home</h1>
        <Menubar model={menuitems}/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu);
