import React from 'react';
import { Form, Button } from 'react-bootstrap';

class EditLivro extends React.Component{

  /*
    Iniciliza as variáveis e funções a serem usadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      //Para as listas de opções
      autores: [],
      editoras  : [],
      generos: [],

      // Variáveis que irão ser armazenadas do banco de dados
      nome: '',
      id_livro: '',
      id_editora: '',
      id_autor: '',
      id_genero_literario: '',
      ano_de_lancamento:'',
      nome_editora: '',
      nome_autor: '',
      nome_genero: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
    Acessa o controlador através de um link e retorna os resultados.
    Caso não haja resultados, o estado do erro é setado como verdadeiro.
  */
  componentDidMount() { 
    // Obtendo os Ids 
    let getlivro
    if(this.props.location.state != null){
      getlivro = this.props.location.state.detail // Obtendo os dados vindos de outro componente "irmão"
    
      // Configurando as variaveis do livro a ser editado
      this.setState({
        // Variáveis que irão ser armazenadas do banco de dados
        id_livro: getlivro.id_livro,
        nome: getlivro.nome,
        id_editora: getlivro.editora.id_editora,
        id_autor: getlivro.autor.id_autor,
        id_genero_literario: getlivro.genero.id_genero_literario,
        ano_de_lancamento: getlivro.ano_de_lancamento,
        
        nome_editora: getlivro.editora.nome,
        nome_autor: getlivro.autor.nome,
        nome_genero: getlivro.genero.nome,
      })
    }
   
    
    
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
    let apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Livros/UpDateLivros';

    // Seta as variáveis para a submissão
    let data = {
        id_livro: this.state.id_livro,
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

    this.props.history.push('/Livros') // Redireciona para página de leitura
  }

  render(){
    const {autores,generos,editoras} = this.state;
    

  return(
    <div>
      <h1>Editar livro</h1>
      
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
         <option value={this.state.id_editora}>{this.state.nome_editora}</option>
          {editoras.map(editoras => (
             <option value={editoras.id_editora}>{editoras.nome}</option>              
          ))}
      </Form.Control>

      <Form.Label>Autor</Form.Label>            
      <Form.Control name="id_autor" as="select"  onChange={this.handleChange}>
      <option value={this.state.id_autor}>{this.state.nome_autor}</option>
          {autores.map(autores => (
             <option value={autores.id_autor}>{autores.nome}</option>              
          ))}
      </Form.Control>

      <Form.Label>Genero</Form.Label>            
      <Form.Control name="id_genero_literario" as="select"  onChange={this.handleChange}>
          <option value={this.state.id_genero_literario}>{this.state.nome_genero}</option>
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

export default EditLivro;