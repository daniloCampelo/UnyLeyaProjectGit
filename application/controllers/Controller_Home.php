<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Controller_Home extends CI_Controller {

	public function __construct()
	{
		// Permite acesso por outra página
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
		
		parent::__construct();
			
	}

	/*
		Função padrão
	*/
	public function index()
	{
		print("Olá, você está no controlador.");
	}
}
