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
		Insere um livro
	*/
	public function InsertGeneroLiterario()
	{
		// Code
	}

	/*
		Atualiza um livro
	*/
	public function UpDateGenerosLeterarios()
	{
		// Code
	}

	/*
		Deleta um livro
	*/
	public function DeleteGenerosLiterarios()
	{
		// Code
	}
}
