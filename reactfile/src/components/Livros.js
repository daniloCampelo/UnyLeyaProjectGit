import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './Head.css';


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
    const apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Livros/DeleteLivros'; // URL para renderizar a função para o Controller.
    
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
    // Obtendo os Livros
    let apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Livros/GetLivros';

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
      <div >
        <h1>Livros</h1>
        <Table className="Table">
            <thead>
              <tr className="Th">
                <th>Nome</th>
                <th>Ano de Lançamento</th>
                <th>Nome do Autor</th>
                <th>Nome do Genero</th>
                <th>Nome da Editora</th>
                
              </tr>
            </thead>
            <tbody>
             
            {/*
              Recupera todos os resultados vindo do Controller que foram armazenados na variável alunos
            */}
            {livros.map(livros => (
                <tr key={livros.id_livro} className="Tr"> {/* Especifica o identificador do registro */}

                  <td>{livros.nome}</td>
                  <td>{livros.ano_de_lancamento}</td>
                  <td>{livros.autor.nome}</td>
                  <td>{livros.genero.nome}</td>
                  <td>{livros.editora.nome}</td>

                  
                  <td>
                    <Button onClick={()=>this.editLivro(livros)} className="ButtonEdit">Edit</Button>
                    &nbsp;
                    <Button onClick={()=>this.deleteLivro(livros.id_livro)} className="ButtonDelete"> Delete</Button>
                  </td>
                </tr>
              ))}
            <br/>
            <Button onClick={()=>this.createLivro()} className="Button">Criar</Button>
            </tbody>
          </Table>
          
          
      </div>
    )
  }
}

export default Livros;