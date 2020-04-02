<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Editoras extends CI_Model {

	/*
		Carrega a base de dados que se trabalha.
	*/
	public function __construct(){
		$this->load->database(); 
	}

	/*
		Insere uma editora no banco de dados
	*/
	public function insert_editora(){
		
	}

	/*
		Cria uma editora no banco de dados	
	*/
	public function create_editora(){
		
	}

	/*
		Deleta uma editora no banco de dados
	*/
	public function delete_editora(){
		
	}

	/*
		Recupera as editoras do banco de dados
	*/
	public function retrieve_editora(){
		// Query de busca
		$query = $this->db->query("SELECT * FROM `editoras` WHERE `ativo` = 1");
		
		// Retora os elementos
		return $query->result();
	}
}
