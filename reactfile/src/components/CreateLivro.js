import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateLivro extends React.Component{

  /*
    Iniciliza as variáveis e funções a serem usadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      autores: [],
      editoras  : [],
      generos: [],

      nome: '',
      id_editora: '',
      id_autor: '',
      id_genero_literario: '',
      ano_de_lancamento:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
  componentDidMount() { 
    let apiUrl;

    /*
      Busca todos os editoras
    */
    apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Editoras/GetEditoras';
    fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
      .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
      .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
        (result) => {
          this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
            editoras: result // O resultado da busca é armazenada na variável.
          });}
      )
      
  
    /*
      Busca todos os autores
    */
   apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Autores/GetAutores';
   fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
     .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
     .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
       (result) => {
         this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
           autores: result // O resultado da busca é armazenada na variável.
         });}
     )
     
    /*
      Busca todos os generos
    */
   apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Generos/GetGenerosLiterarios';
   fetch(apiUrl) // Carrega de forma assincrona o conteúdo da URL
     .then(res => res.json()) // Rotorna os dados requeridos da forma .json()
     .then( // Chama-se essa fução quando a funcao anterior estiver encerrada.
       (result) => {
         this.setState({ // Seta o estado de aluno com o resultado obtido através desta.
           generos: result // O resultado da busca é armazenada na variável.
         });}
     )
     
 

  }

  /*
    Controla o formulário e armazena suas informações aqui.
  */
  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }

  /*
    Submete as informações do usuário para o Controlador.
  */
  handleSubmit() {
    // Configura o link a redirecionar
    let apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Livros/InsertLivros';

    // Seta as variáveis para a submissão
    let data = {
        nome: this.state.nome,
        id_editora: this.state.id_editora,
        id_autor: this.state.id_autor,
        id_genero_literario: this.state.id_genero_literario,
        ano_de_lancamento: this.state.ano_de_lancamento,
    }
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    //Configura o método POST
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };
    
    // Chama a função do controler, enviando os dados a serem adicionados.
    fetch(apiUrl, options)
      .then(res => res.json())
  }

  render(){
    const {autores,generos,editoras} = this.state;

  return(
    <div>
      <h1>Inserir um novo livro</h1>
      
    <Form onSubmit={(e) => this.handleSubmit(e)}>
      <Form.Group controlId="nome">
        <Form.Label>Nome do Livro</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={this.handleChange} 
          placeholder="Nome do Livro"/>
      </Form.Group>
      
      <Form.Group controlId="ano_de_lancamento">
        <Form.Label>Ano de Lançamento</Form.Label>
        <Form.Control
          type="date"
          name="ano_de_lancamento"
          value={this.state.ano_de_lancamento}
          onChange={this.handleChange} 
          placeholder=""/>
      </Form.Group>


      <Form.Label>Editora</Form.Label>            
      <Form.Control name="id_editora" as="select"  onChange={this.handleChange}>
          <option value=""></option>
          {editoras.map(editoras => (
             <option value={editoras.id_editora}>{editoras.nome}</option>              
          ))}
      </Form.Control>

      <Form.Label>Autor</Form.Label>            
      <Form.Control name="id_autor" as="select"  onChange={this.handleChange}>
          <option value=""></option>
          {autores.map(autores => (
             <option value={autores.id_autor}>{autores.nome}</option>              
          ))}
      </Form.Control>

      <Form.Label>Genero</Form.Label>            
      <Form.Control name="id_genero_literario" as="select"  onChange={this.handleChange}>
          <option value=""></option>
          {generos.map(generos => (
             <option value={generos.id_genero_literario}>{generos.nome}</option>              
          ))}
      </Form.Control>
      <br/>
      <Form.Control type="hidden" name="id" value={this.state.id} />
      <Button className="submitButton" variant="success" type="submit" >Salvar</Button>
    </Form>
    </div>
    )
  }
  
}

export default CreateLivro;