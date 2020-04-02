import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

class Editoras extends React.Component{
  /*
    Declara/Constroe as variáveis a serem utilizadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      editoras: []
    }
    
    // Constroe as funções utilizadas
    this.createEditora = this.createEditora.bind(this);
  }

  
  /*
    Redireciona o usuário para a página de criação de uma editora
  */
  createEditora() {
    this.props.history.push('/CreateEditora') // Redireciona página
  }
      
  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
  componentDidMount() { 
    const apiUrl = 'http://localhost/UnyLeyaProject/index.php/C_Editoras/GetEditoras';

    fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
      .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
      .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
        (result) => {
          this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
            editoras: result // O resultado da busca é armazenada na variável aluno.
          }); 
        }
      )
  }

  render(){
    const {editoras} = this.state;
    return(
      <div>

        <h1>Editoras</h1>
        <Button onClick={()=>this.createEditora()}>Criar Editora</Button>
        
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
            {editoras.map(editoras => (
                <tr key={editoras.id_editora}> {/* Especifica o identificador do registro */}
                
                  <td>{editoras.id_editora}</td>
                  <td>{editoras.nome}</td>
                  <td>{editoras.ativo}</td>

                  <td>
                    <Button onClick={()=>this.editAluno(editoras)}>Edit</Button>
                    &nbsp;
                    <Button onClick={()=>this.deleteAluno(editoras.id_editora)}> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>


      </div>
    )
  }
}

export default Editoras;