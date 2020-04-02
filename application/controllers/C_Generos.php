<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Generos extends CI_Controller {

	public function __construct()
	{
		// Permite acesso por outra página
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		
		parent::__construct();

		// Habilita os componentes do Model
		$this->load->model('M_Generos'); 
		
	}

	/*
		Função padrão
	*/
	public function index()
	{
		
	}

	/*
		Retorna a lista de generos
	*/
	public function GetGenerosLiterarios()
	{
		// Carrega os livros da base de dados
		$generos = $this->M_Generos->retrieve_genero();

		// Envia os livros para a view
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($generos));
	}

	/*
		Insere um Genero
	*/
	public function InsertGeneroLiterario()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$array = array(
			"nome" => $formdata['nome'],
			"ativo" => 1
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Generos->create_genero($array);
	}

	/*
		Atualiza um Genero
	*/
	public function UpDateGenerosLeterarios()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$id_genero_literario = $formdata['id_genero_literario'];
		$array = array(
			"nome" => $formdata['nome'],
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Generos->update_genero($id_genero_literario,$array);
	}

	/*
		Deleta um Genero
	*/
	public function DeleteGenerosLiterarios()
	{
				// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário, vindos do react 
		$id_genero_literario = $formdata['id_genero_literario'];

		// Chama a funcao do Model para deletar
		$this->M_Generos->delete_genero($id_genero_literario);
	}
}
