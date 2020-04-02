<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Editoras extends CI_Controller {

	public function __construct()
	{
		// Permite acesso por outra página
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		
		parent::__construct();

		// Habilita os componentes do Model
		$this->load->model('M_Editoras'); 

	}

	/*
		Função padrão
	*/
	public function index()
	{
		
	}

	/*
		Retorna a lista de editoras existentes
	*/
	public function GetEditoras()
	{
		// Carrega as editoras da base de dados
		$editoras = $this->M_Editoras->retrieve_editora();

		// Envia as editoras para a view
		$this->output
		->set_content_type('application/json')
		->set_output(json_encode($editoras));
	}

	/*
		Insere uma editora
	*/
	public function InsertEditora()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$array = array(
			"nome" => $formdata['nome'],
			"ativo" => 1
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Editoras->create_editora($array);
	}

	/*
		Atualiza uma editora
	*/
	public function UpDateEditora()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário
		$id_editora = $formdata['id_editora'];
		$array = array(
			"nome" => $formdata['nome'],
		);

		// Chama a funcao do Model para inserir os dados no Banco de Dados.
		$this->M_Editoras->update_editora($id_editora,$array);
	}

	/*
		Deleta uma editora
	*/
	public function DeleteEditora()
	{
		// Configura a variável que receberá dados do usuário
		$formdata = json_decode(file_get_contents('php://input'), true);

		// Obtendo os dados do usuário, vindos do react 
		$id_editora = $formdata['id_editora'];

		// Chama a funcao do Model para deletar
		$res = $this->M_Editoras->delete_editora($id_editora);
	}
}
