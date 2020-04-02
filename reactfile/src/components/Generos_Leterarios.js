import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

class Generos_Literarios extends React.Component{
  
  /*
    Declara/Constroe as variáveis a serem utilizadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      generos_literarios: []
    }

    // Controe funcoes
    this.createGeneroLeterario = this.createGeneroLeterario.bind(this);
  }

  /*
    Redireciona o usuário para a página de criação de um genero
  */
  createGeneroLeterario() {
    this.props.history.push('/CreateGeneroLiterario') // Redireciona página
  }

  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
  componentDidMount() { 
    const apiUrl = 'http://localhost/UnyLeyaProject/index.php/C_Generos/GetGenerosLiterarios';

    fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
      .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
      .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
        (result) => {
          this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
            generos_literarios: result // O resultado da busca é armazenada na variável aluno.
          }); 
        }
      )
  }

  render(){
    const {generos_literarios} = this.state;
    return(
      <div>
        <h1>Generos Literarios</h1>

        <Button onClick={()=>this.createGeneroLeterario()}> Criar Genero</Button>

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
          {generos_literarios.map(generos_literarios => (
              <tr key={generos_literarios.id_genero_literario}> {/* Especifica o identificador do registro */}
              
                <td>{generos_literarios.id_genero_literario}</td>
                <td>{generos_literarios.nome}</td>
                <td>{generos_literarios.ativo}</td>

                <td>
                  <Button onClick={()=>this.editAluno(generos_literarios)}>Edit</Button>
                  &nbsp;
                  <Button onClick={()=>this.deleteAluno(generos_literarios.id_genero_literario)}> Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>

    )
  }
}

export default Generos_Literarios;