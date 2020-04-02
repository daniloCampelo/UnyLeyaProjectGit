import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateAutor extends React.Component{

  /*
    Iniciliza as variáveis e funções a serem usadas.
  */
  constructor(props) {
    super(props);
    this.state = {
      nome: '', 
      sexo: '',
      nacionalidade: '',
      data_de_nascimento: '',
      
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
    let apiUrl = 'localhost/UnyLeyaProject/index.php/C_Autores/InsertAutor';
    
    // Seta as variáveis para a submissão
    let data = {
        nome: this.state.nome,
        sexo: this.state.sexo,
        nacionalidade: this.state.nacionalidade,
        data_de_nascimento: this.state.data_de_nascimento,
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
      <h1>Inserir um Autor</h1>

      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group controlId="nome">

          <Form.Label>Nome do Autor</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange} 
            placeholder="Nome do Autor"/>
          
          <br/>
    
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
              type="date"
              name="data_de_nascimento"
              value={this.state.data_de_nascimento}
              onChange={this.handleChange} 
              placeholder=""/>
          
          <br/>
          
          <Form.Label>Sexo</Form.Label>            
          <Form.Control name="sexo" as="select"  onChange={this.handleChange}>
              <option value=""></option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="NaoInformado">Não Informar</option>
          </Form.Control>

          <br/>

          <Form.Label>Nacionalidade</Form.Label>            
          <Form.Control name="nacionalidade" as="select"  onChange={this.handleChange}>
              <option value=""></option>
              <option value="Brasileira">Brasileira</option>
              <option value="Estrangeira">Estrangeira</option>
          </Form.Control>

        <br/>
        
        <Form.Control type="hidden" name="id" value={this.state.id} />
        <Button className="submitButton" variant="success" type="submit" >Salvar</Button>
     
      </Form.Group>

      </Form>
        
    </div>
    )
  }
  
}

export default CreateAutor;