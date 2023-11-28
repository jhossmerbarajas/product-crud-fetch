<?php 

require_once '../database/Conexion.php';
header("Content-Type: application/json");
$sql = new Conexion;

$data = json_decode(file_get_contents('php://input'), true);

$id = intval(json_encode($data["id"]));
$update = $sql->update($id, $data);

echo json_encode(gettype($update));