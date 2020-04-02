import React from 'react';
import { Table, Button, Alert, Form } from 'react-bootstrap';

class EditGenero extends React.Component{
 
    /*
        Iniciliza as variáveis e funções a serem usadas.
    */
    constructor(props) {
        super(props);
        this.state = {
            id_genero_literario: '',
            nome: '',
        }

        this.handleChange = this.handleChange.bind(this);      // Renderiza a funcao handleChange
        this.handleSubmit = this.handleSubmit.bind(this);      // Renderiza a funcao handleSubmit
    } 

    /*
    Função que inicializa os status da atualização
    */
    componentDidMount(){
        let data = this.props.location.state.detail // Obtendo os dados vindos de outro componente "irmão"
        // Atualiza os dados do componente "this.state"
        this.setState({
            id_genero_literario: data.id_genero_literario,
            nome: data.nome,
        })
    }

    /*
        Atualiza as informações inseridas pelo usuário
    */
    handleChange(event) {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

        
    /*
        Submete as informações do usuário para o Controlador.
    */
    handleSubmit(event) {
        
        let apiUrl;
        let data;
        apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Generos/UpDateGenerosLeterarios';
        
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        // Cria um array de dados para enviar ao Controller
        data = { 
            id_genero_literario: this.state.id_genero_literario,
            nome: this.state.nome,
        }

        // Configura o método POST
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            myHeaders
        };

        // Chama a função do Controller propriamente dita
        // e efeua a atualizacao
        fetch(apiUrl, options)
            .then(res => res.json())

        this.props.history.push('/Generos_Leterarios') // Redireciona para página de leitura
    }


    render(){
        return(
            <div>
            <h1>Editar Gênero Literário</h1>
      
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group controlId="nome">
                <Form.Label>Nome do Gênero</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange} 
                  placeholder="Nome do Gênero"/>
                <br/>
                <Button className="submitButton" variant="success" type="submit" >Salvar</Button>
              </Form.Group>
            </Form>
              
          </div>
        )
    }
}

export default EditGenero;