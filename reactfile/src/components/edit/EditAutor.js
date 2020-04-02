import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class EditAutor extends React.Component{
    /*
        Iniciliza as variáveis e funções a serem usadas.
    */
    constructor(props) {
        super(props);
        this.state = {
            id_autor: '',
            nome: '',
            sexo: '',
            data_de_nascimento: '',
            nacionalidade: '',
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
            id_autor: data.id_autor,
            nome: data.nome,
            sexo: data.sexo,
            data_de_nascimento: data.data_de_nascimento,
            nacionalidade: data.nacionalidade,
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
        apiUrl = 'http://localhost/UnyLeyaProjectGit/index.php/C_Autores/UpDateAutor';
        
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        // Cria um array de dados para enviar ao Controller
        data = { 
            id_autor: this.state.id_autor,
            nome: this.state.nome,
            sexo: this.state.sexo,
            data_de_nascimento: this.state.data_de_nascimento,
            nacionalidade: this.state.nacionalidade,
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

        this.props.history.push('/Autores') // Redireciona para página de leitura
    }

    render(){

        return(
        <div>
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
                        <option value={this.state.sexo}>{this.state.nacionalidade}</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="NaoInformado">Não Informar</option>
                    </Form.Control>
                    <br/>
                    <Form.Label>Nacionalidade</Form.Label>            
                    <Form.Control name="nacionalidade" as="select"  onChange={this.handleChange}>
                        <option value={this.state.nacionalidade}>{this.state.nacionalidade}</option>
                        <option value="Brasileira">Brasileira</option>
                        <option value="Estrangeira">Estrangeira</option>
                    </Form.Control>
                    <br/>
                    <Button className="submitButton" variant="success" type="submit" >Salvar</Button>
                
                </Form.Group>

                </Form>

        </div>
        )
    }
}

export default EditAutor;