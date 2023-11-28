<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="style/style.css">
	<title>Document</title>
</head>
<body>

	<header class="header">
		<nav class="navbar">
			<a href="">Item 1</a>
			<a href="">Item 2</a>
			<a href="">Item 3</a>
		</nav>
	</header>
	
	<main>
		
		<form class="form-register" id="form-register"> 
			<input type="text" name="name" id="name" placeholder="Name">

			<input type="number" slep="0.00" name="price" id="price" placeholder="Price">

			<input type="submit" value="save">
		</form>

		<div id="modal" class="modal">
		  <!-- <div class="modal-content">
		    <span class="close">&times;</span>
		    <h2>Formulario</h2>
		    
		    <form>
		      <input type="text" id="nombre" name="nombre" required>
		      <input type="number" id="price"  required>
		      <input type="submit" value="Enviar">
		    </form>

		  </div> -->
		</div>

		<div id="show-product"></div>
	</main>

	<script src="js/app.js" type="module"></script>
</body>
</html>