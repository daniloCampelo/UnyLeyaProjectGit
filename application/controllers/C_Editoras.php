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
		// Code
	}

	/*
		Atualiza uma editora
	*/
	public function UpDateEditora()
	{
		// Code
	}

	/*
		Deleta uma editora
	*/
	public function DeleteEditora()
	{
		// Code
	}
}
