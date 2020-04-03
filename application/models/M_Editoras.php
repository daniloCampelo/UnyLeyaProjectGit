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
		Atualiza uma editora no banco de dados
	*/
	public function update_editora($id_editora,$array){
		$this->db->where('id_editora',$id_editora); // Especifica o dado a ser atualizado
        $this->db->update('editoras',$array); 	// Efetua a atualizacao
	}

	/*
		Cria uma editora no banco de dados	
	*/
	public function create_editora($array){
		$this->db->insert('editoras',$array);
		$this->db->insert_id();
	}

	/*
		Deleta uma editora no banco de dados
	*/
	public function delete_editora($id_editora){
		$query = "UPDATE `editoras` SET `ativo`= 0	 WHERE `id_editora` = $id_editora"; // Especificação do comando
		$this->db->query($query); // Execução do comando
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

	/*
		Recupera uma editora
	*/
	public function get_editora($id_editora){
		// Query de busca
		$query = $this->db->query("SELECT * FROM `editoras` WHERE `id_editora` = $id_editora");
		
		// Retora os elementos
		return $query->first_row();
	}
}
