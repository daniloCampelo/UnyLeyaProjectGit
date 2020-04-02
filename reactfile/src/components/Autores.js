import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

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

        <Button onClick={()=>this.createAutores()}>Criar Autor</Button>
        
        <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ativo</th>
              </tr>
            </thead>
            <tbody>
             
            {/*
              Recupera todos os resultados vindo do Controller que foram armazenados na variável alunos
            */}
            {autores.map(autores => (
                <tr key={autores.id_autor}> {/* Especifica o identificador do registro */}
                
                  <td>{autores.id_autor}</td>
                  <td>{autores.nome}</td>
                  <td>{autores.ativo}</td>

                  <td>
                    <Button onClick={()=>this.editAluno(autores)}>Edit</Button>
                    &nbsp;
                    <Button onClick={()=>this.deleteAluno(autores.id_autor)}> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>


      </div>
    )
  }
}

export default Autores;