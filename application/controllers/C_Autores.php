<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Autores extends CI_Controller {

	public function __construct()
	{
		// Permite acesso por outra página
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		
		parent::__construct();

		// Habilita os componentes do Model
		$this->load->model('M_Autores'); 
			
	}

	/*
		Função padrão
	*/
	public function index()
	{
		
	}
	
	/*
		Retorna a lista de autores existentes
	*/
	public function GetAutores()
	{
		// Carrega os livros da base de dados
		$autores = $this->M_Autores->retrieve_autor();

		// Envia os autores para a view
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($autores));
	}

	/*
		Insere um autores
	*/
	public function InsertAutor()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$array = array(
			"nome" => $formdata['nome'],
			"sexo" => $formdata['sexo'],
			"data_de_nascimento" => $formdata['data_de_nascimento'],
			"nacionalidade" => $formdata['nacionalidade'],
			"ativo" => 1
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Autores->create_autor($array);
	}

	/*
		Atualiza um autor
	*/
	public function UpDateAutor()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$id_autor = $formdata['id_autor'];
		$array = array(
			"nome" => $formdata['nome'],
			"sexo" => $formdata['sexo'],
			"data_de_nascimento" => $formdata['data_de_nascimento'],
			"nacionalidade" => $formdata['nacionalidade'],
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Autores->update_autor($id_autor,$array);
	}

	/*
		Deleta um livro
	*/
	public function DeleteAutor()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário, vindos do react 
		$id_autor = $formdata['id_autor'];

		// Chama a funcao do Model para deletar
		$res = $this->M_Autores->delete_autor($id_autor);
	}
}
