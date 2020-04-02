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
		Atualiza um genero no banco de dados
	*/
	public function update_genero($id_genero_literario,$array){
		$this->db->where('id_genero_literario',$id_genero_literario); // Especifica o dado a ser atualizado
        $this->db->update('generos_leterarios',$array); 	// Efetua a atualizacao
	}

	/*
		Cria um genero no banco de dados	
	*/
	public function create_genero($array){
		$this->db->insert('generos_leterarios',$array);
		$this->db->insert_id();
	}

	/*
		Deleta um genero no banco de dados
	*/
	public function delete_genero($id_genero_literario){
		$query = "UPDATE `generos_leterarios` SET `ativo`= 0 WHERE `id_genero_literario` = $id_genero_literario"; // Especificação do comando
		$this->db->query($query); // Execução do comando
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
