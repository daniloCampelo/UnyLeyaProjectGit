<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Autores extends CI_Model {

	/*
		Carrega a base de dados que se trabalha.
	*/
	public function __construct(){
		$this->load->database(); 
	}


	/*
		Insere um autor no banco de dados
	*/
	public function insert_autor(){
		
	}

	/*
		Cria um autor no banco de dados	
	*/
	public function create_autor(){
		
	}

	/*
		Deleta um autor no banco de dados
	*/
	public function delete_autor(){
		
	}

	/*
		Recupera os autores do banco de dados
	*/
	public function retrieve_autor(){
		// Query de busca
		$query = $this->db->query("SELECT * FROM `autores` WHERE `ativo` = 1");
		
		// Retora os elementos
		return $query->result();
	}


}
