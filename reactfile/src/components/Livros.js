import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';


class Livros extends React.Component{
  /*
    Declara/Constroe as variáveis a serem utilizadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      livros: []
    }
    // Constroe as funções utilizadas
    this.createLivro = this.createLivro.bind(this);
    this.editLivro = this.editLivro.bind(this);
    this.deleteLivro = this.deleteLivro.bind(this);
  }

  /*
    Redireciona o usuário para a página de edicao
  */
  editLivro(livro) {
    this.props.history.push('/edit/EditLivro', {detail: livro}) // Redirecionamento
  }

  /*
    Redireciona o usuário para a página de exclusão
  */
  deleteLivro(id_livro) {
    // Configura as variasveis
    const apiUrl = 'http://localhost/UnyLeyaProject/index.php/C_Livros/DeleteLivros'; // URL para renderizar a função para o Controller.
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    // Define o identificador que será deletado.
    let data = {
      id_livro: id_livro
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
    Redireciona o usuário para a página de criação de um livro
  */
  createLivro() {
    this.props.history.push('/CreateLivro') // Redireciona para página createlivro
  }


  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
  componentDidMount() { 
  const apiUrl = 'http://localhost/UnyLeyaProject/index.php/C_Livros/GetLivros';

  fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
    .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
    .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
      (result) => {
        this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
          livros: result // O resultado da busca é armazenada na variável aluno.
        }); 
      }
    )
  }



  render(){
    const {livros} = this.state;

    return(
      <div>
        <h1>Livros</h1>

        <Button onClick={()=>this.createLivro()}>Criar</Button>
      

        <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ativo</th>
                <th>Id_Autor</th>
                <th>Id_Editora</th>
                <th>Id_Genero</th>
              </tr>
            </thead>
            <tbody>
             
            {/*
              Recupera todos os resultados vindo do Controller que foram armazenados na variável alunos
            */}
            {livros.map(livros => (
                <tr key={livros.id_livro}> {/* Especifica o identificador do registro */}

                  <td>{livros.id_livro}</td>
                  <td>{livros.nome}</td>
                  <td>{livros.ativo}</td>
                  <td>{livros.id_autor}</td>
                  <td>{livros.id_editora}</td>
                  <td>{livros.id_genero}</td>

                  <td>
                    <Button onClick={()=>this.editLivro(livros)}>Edit</Button>
                    &nbsp;
                    <Button onClick={()=>this.deleteLivro(livros.id_livro)}> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      </div>
    )
  }
}

export default Livros;