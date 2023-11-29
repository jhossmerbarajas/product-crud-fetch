<?php 

require_once '../database/Conexion.php';
header("Content-Type: application/json");
$sql = new Conexion;

$data = json_decode(file_get_contents('php://input'), true);
$id = intval(json_encode($data));

$sql->delete($id);
$msg = ["msg" => "Deleted"];

echo json_encode($msg);