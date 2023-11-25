<?php 
require_once '../database/Conexion.php';
header("Content-Type: application/json");

$query = new Conexion;

$data = $query->all();

if($data > 0) {

	echo json_encode($data);
} else {
	$msg = ["msg" => "no hay datos"];
	echo json_encode($msg);
}
// $data = ["laptop", "bicicleta"];
