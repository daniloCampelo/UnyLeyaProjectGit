<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_Generos extends CI_Model {

	/*
		Carrega a base de dados que se trabalha.
	*/
	public function __construct(){
		$this->load->database(); 
	}

	/*
		Insere um genero no banco de dados
	*/
	public function insert_genero(){
		
	}

	/*
		Cria um genero no banco de dados	
	*/
	public function create_genero(){
		
	}

	/*
		Deleta um genero no banco de dados
	*/
	public function delete_genero(){
		
	}

	/*
		Recupera os generos no banco de dados
	*/
	public function retrieve_genero(){
				// Query de busca
		$query = $this->db->query("SELECT * FROM `generos_leterarios` WHERE `ativo` = 1");
		
		// Retora os elementos
		return $query->result();
	}
}
