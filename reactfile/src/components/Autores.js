import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './Head.css';

class Autores extends React.Component{
  /*
    Declara/Constroe as variáveis a serem utilizadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      autores: []
    }

    // Constroe as funções utilizadas
    this.createAutores = this.createAutores.bind(this);
    this.editAutor = this.editAutor.bind(this);
    this.deleteAutor = this.deleteAutor.bind(this);
  }

  /*
    Redireciona para edição
  */
  editAutor(autor) {
    this.props.history.push('/edit/EditAutor', {detail: autor}) // Redirecionamento
  }


  /*
    Exclui
  */
  deleteAutor(id_autor) {
    // Configura as variasveis
    const apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Autores/DeleteAutor'; // URL para renderizar a função para o Controller.
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    // Define o identificador que será deletado.
    let data = {
      id_autor: id_autor
    }

    // Configura o método POST
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    }; 
    
    // Executa o redirecionamento do link para o Controler
    fetch(apiUrl, options)
      .then(res => res.json()) 

    // Atualiza a página após deletar o ítem
    window.location.reload(true); 
  }
 
  /*
    Redireciona o usuário para a página de criação de um autor
  */
  createAutores() {
    this.props.history.push('/CreateAutor') // Redireciona página
  }

  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
 componentDidMount() { 
  const apiUrl = 'http://localhost/UnyLeyaProject/index.php/C_Autores/GetAutores';

  fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
    .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
    .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
      (result) => {
        this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
          autores: result // O resultado da busca é armazenada na variável aluno.
        }); 
      }
    )
  }

  render(){
    const {autores} = this.state;
    return(
      <div>
        <h1>Autores</h1>
        
        <Table className="Table">
            <thead>
              <tr className="Th">
                <th>Nome</th>
                <th>Sexo</th>
                <th>Data de Nascimento</th>
                <th>Nacionalidade</th>
                
              </tr>
            </thead>
            <tbody>
             
            {/*
              Recupera todos os resultados vindo do Controller que foram armazenados na variável alunos
            */}
            {autores.map(autores => (
                <tr key={autores.id_autor} className="Tr"> {/* Especifica o identificador do registro */}
                
                  <td>{autores.nome}</td>
                  <td>{autores.sexo}</td>
                  <td>{autores.data_de_nascimento}</td>
                  <td>{autores.nacionalidade}</td>
                  
                  <td>
                    <Button className="ButtonEdit" onClick={()=>this.editAutor(autores)}>Edit</Button>
                    &nbsp;
                    <Button className="ButtonDelete" onClick={()=>this.deleteAutor(autores.id_autor)}> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <br/>    
          <Button className="Button" onClick={()=>this.createAutores()}>Criar Autor</Button>
          </Table>
          

      </div>
    )
  }
}

export default Autores;