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
		// Code
	}

	/*
		Atualiza um livro
	*/
	public function UpDateLivros()
	{
		// Code
	}

	/*
		Deleta um livro
	*/
	public function DeleteLivros()
	{
		// Code
	}

}
