<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Livros extends CI_Model {

	/*
		Carrega a base de dados que se trabalha.
	*/
	public function __construct(){
		$this->load->database(); 
	}

	/*
		Insere um livro no banco de dados
	*/
	public function insert_livro(){
		
	}

	/*
		Cria um livro no banco de dados	
	*/
	public function create_livro(){
		
	}

	/*
		Deleta um livro no banco de dados
	*/
	public function delete_livro(){
		
	}

	/*
		Recupera um livro no banco de dados
	*/
	public function retrieve_livro(){
		// Query de busca
		$query = $this->db->query("SELECT * FROM `livros` WHERE `ativo` = 1");
		
		// Retora os elementos
		return $query->result();
	}
}
