<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Livros extends CI_Controller {

	public function __construct()
	{
		// Permite acesso por outra página
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		
		parent::__construct();

		// Habilita os componentes do Model
		$this->load->model('M_Livros'); 
		$this->load->model('M_Autores');
		$this->load->model('M_Editoras');
		$this->load->model('M_Generos');
		
	}

	/*
		Função padrão
	*/
	public function index()
	{
		
	}

	/*
		Retorna a lista de livros existentes
	*/
	public function GetLivros()
	{
		// Carrega os livros da base de dados
		$livros = $this->M_Livros->retrieve_livro();

		foreach ($livros as $linha) {
			$linha->teste = "testando a atribuicao de valores";
			$linha->autor = $this->M_Autores->get_autor($linha->id_autor);// Getting in BD
			$linha->editora = $this->M_Editoras->get_editora($linha->id_editora);// Getting in BD
			$linha->genero = $this->M_Generos->get_genero($linha->id_genero_literario);// Getting in BD
 		}


	
		// Envia os livros para a view
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($livros));
	}

	/*
		Insere um livro
	*/
	public function InsertLivros()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$array = array(
			'nome' => $formdata['nome'],
			'ativo' => 1,
			'ano_de_lancamento' => $formdata['ano_de_lancamento'],
			'id_autor' => $formdata['id_autor'],
			'id_editora' => $formdata['id_editora'],
			'id_genero_literario' => $formdata['id_genero_literario'],
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Livros->create_livro($array);
	}

	/*
		Atualiza um livro
	*/
	public function UpDateLivros()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		$id_livro = $formdata['id_livro'];

		// Obtendo os dados do usuário
		$array = array(
			'nome' => $formdata['nome'],
			'ano_de_lancamento' => $formdata['ano_de_lancamento'],
			'id_autor' => $formdata['id_autor'],
			'id_editora' => $formdata['id_editora'],
			'id_genero_literario' => $formdata['id_genero_literario'],
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Livros->update_livro($id_livro,$array);
	}

	/*
		Deleta um livro
	*/
	public function DeleteLivros()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário, vindos do react 
		$id_livro = $formdata['id_livro'];

		// Chama a funcao do Model para deletar
		$this->M_Livros->delete_livro($id_livro);
	}

}
