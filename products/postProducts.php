<?php 

require_once '../database/Conexion.php';
header("Content-Type: application/json");
$sql = new Conexion;

$data = json_decode(file_get_contents('php://input'), true);

$sql->create($data);
$msg = ["msg" => "saved"];

echo json_encode($msg);