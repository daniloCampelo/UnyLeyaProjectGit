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
		// Code
	}

	/*
		Atualiza um autor
	*/
	public function UpDateAutor()
	{
		// Code
	}

	/*
		Deleta um livro
	*/
	public function DeleteAutor()
	{
		// Code
	}
}
