<?php 

require_once '../database/Conexion.php';
header("Content-Type: application/json");
$sql = new Conexion;

$id = json_decode(file_get_contents('php://input'), true);

$data = $sql->findOne($id);

echo json_encode($data);