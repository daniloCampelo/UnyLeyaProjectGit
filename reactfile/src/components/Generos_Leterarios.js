import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './Head.css';

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
    this.editGenero = this.editGenero.bind(this);
    this.deleteGenero = this.deleteGenero.bind(this);
  }

  /*
     Edita um genero literário
  */
  editGenero(genero) {
    this.props.history.push('/edit/EditGenero', {detail: genero}) // Redirecionamento
  }
  /*
    Exclui um genero literario
  */
  deleteGenero(id_genero_literario) {
   // Configura as variasveis
   const apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Generos/DeleteGenerosLiterarios'; // URL para renderizar a função para o Controller.
    
   const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   
   // Define o identificador que será deletado.
   let data = {
    id_genero_literario: id_genero_literario
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
    const apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Generos/GetGenerosLiterarios';

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

        <Table>
          <thead>
            <tr className="Th">
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            
          {/*
            Recupera todos os resultados vindo do Controller que foram armazenados na variável alunos
          */}
          {generos_literarios.map(generos_literarios => (
              <tr className="Tr" key={generos_literarios.id_genero_literario}> {/* Especifica o identificador do registro */}
              
                <td>{generos_literarios.nome}</td>

                <td>
                  <Button className="ButtonEdit" onClick={()=>this.editGenero(generos_literarios)}>Edit</Button>
                  &nbsp;
                  <Button className="ButtonDelete" onClick={()=>this.deleteGenero(generos_literarios.id_genero_literario)}> Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
          <br/>
          <Button className="Button" onClick={()=>this.createGeneroLeterario()}> Criar Genero</Button>
          </Table>

      </div>

    )
  }
}

export default Generos_Literarios;