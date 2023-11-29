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

	function first () {
		return $this->query->fetch(PDO::FETCH_ASSOC);
	}


	function all () {
		$sql = "SELECT * FROM product";
		return $this->query($sql)->get();
	}

	function findOne ($id) {
		$sql = "SELECT * FROM product WHERE id = ?";
		return $this->query($sql, [$id])->first();
	}


	function create($data) {
		$columns = array_keys($data);
		$columns = implode(",", $columns);

		$values = array_values($data);

		$sql = "INSERT INTO product ({$columns}) VALUES (" . str_repeat('?, ', count($values) -1) . "?)";
		$this->query($sql, $values);
	}

	function where ($column, $operator, $value = null) {
		if($value == null) {
			$value = $operator;
			$operator = "=";
		}

		$sql = "SELECT * FROM product WHERE {$column} {$operator}";
		$this->query($sql, [$value]);

		return $this;
	}

	function update ($id, $data) {
		$fields = [];

		foreach ($data as $key => $value) {
			$fields[] = "{$key} = ?";
		}

		$fields = implode(',', $fields);

		$sql = "UPDATE product SET {$fields} WHERE id = ?";

		$value = array_values($data);
		$value[] = $id;

		$this->query($sql, $value);
		return $this->all();
	}

	function delete ($id) {
		$sql = "DELETE FROM product WHERE id = ?";
		$this->query($sql, [$id]);
	}
}