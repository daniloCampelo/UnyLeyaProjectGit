import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateEditora extends React.Component{

  /*
    Iniciliza as variáveis e funções a serem usadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      nome: '', 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Editoras/InsertEditora';
    
    
    // Seta as variáveis para a submissão
    let data = {
        nome: this.state.nome,
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
 return(
    <div>
      <h1>Inserir uma Editora</h1>

      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group controlId="nome">
          <Form.Label>Nome da Editora</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange} 
            placeholder="Nome da Editora"/>
          <br/>
          <Form.Control type="hidden" name="id" value={this.state.id} />
          <Button className="submitButton" variant="success" type="submit" >Salvar</Button>
        </Form.Group>
      </Form>
        
    </div>
    )
  }
  
}

export default CreateEditora;