<?php 

class Conexion 
{
	private $host = "localhost";
	private $user = "jhossweb";
	private $pass = "";
	private $dbname = "products";

	protected $cnx; 
	protected $query;

	function __construct() {
		return $this->connection();
	}

	function connection () {
		try {
			$pdo = "mysql:host=$this->host;dbname=$this->dbname";

			$options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            $this->cnx = new PDO($pdo, $this->user, $this->pass, $options);

            return $this->cnx;
		} catch (PDOException $e) {
			echo "Error => $e";
		}
	}

	function query ($sql, $data = [], $params = null) {
		if($data) {
			$numSignos = substr_count($sql, "?");

			$this->query = $this->cnx->prepare($sql);
			foreach($data as $key => $value) {
				$type = is_int($value) ? PDO::PARAM_INT : PDO::PARAM_STR;
				$this->query->bindParam($key + 1, $data[$key], $type);
			}

			$this->query->bindParam(1, $data[0], PDO::PARAM_STR);
			$this->query->execute();
		} else {

				$this->query = $this->cnx->prepare($sql);
				$this->query->execute();
		}


		return $this;
	}

	function get() {
		return $this->query->fetchAll(PDO::FETCH_ASSOC);
	}


	function all () {
		$sql = "SELECT * FROM product";
		return $this->query($sql)->get();
	}


	function create($data) {
		$columns = array_keys($data);
		$columns = implode(",", $columns);

		$values = array_values($data);

		$sql = "INSERT INTO product ({$columns}) VALUES (" . str_repeat('?, ', count($values) -1) . "?)";
		$this->query($sql, $values);
	}
}