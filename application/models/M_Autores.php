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
		Atualiza um autor no banco de dados
	*/
	public function update_autor($id_autor,$array){
		$this->db->where('id_autor',$id_autor); // Especifica o dado a ser atualizado
        $this->db->update('autores',$array); 	// Efetua a atualizacao
	}

	/*
		Cria um autor no banco de dados	
	*/
	public function create_autor($array){
		$this->db->insert('autores',$array);
		$this->db->insert_id();
	}

	/*
		Deleta um autor no banco de dados
	*/
	public function delete_autor($id_autor){
		$query = "UPDATE `autores` SET `ativo`= 0	 WHERE `id_autor` = $id_autor"; // Especificação do comando
		$this->db->query($query); // Execução do comando
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

	/*
		Recupera um autor do banco de dados
	*/
	public function get_autor($id_autor){
		// Query de busca
		$query = $this->db->query("SELECT * FROM `autores` WHERE `id_autor` = $id_autor");
		
		// Retora os elementos
		return $query->first_row();
	}


}
