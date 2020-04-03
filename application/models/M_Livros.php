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
		Cria um livro no banco de dados	
	*/
	public function create_livro($array){
		$this->db->insert('livros',$array);
		$this->db->insert_id();
	}


	/*
		Atualiza as informações de um livro
	*/
	public function update_livro($id_livro, $array){
		$this->db->where('id_livro',$id_livro); // Especifica o dado a ser atualizado
        $this->db->update('livros',$array); 	// Efetua a atualizacao
	}

	/*
		Deleta um livro no banco de dados
	*/
	public function delete_livro($id_livro){
		$query = "UPDATE `livros` SET `ativo`= 0 WHERE `id_livro` = $id_livro"; // Especificação do comando
		$this->db->query($query); // Execução do comando
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
