const form = document.querySelector("#form-register");

const productsPost = (e) => {
	e.preventDefault();

	const datos = {
		name: form.name.value,
		price: form.price.value
	}
	
	// POST 
	fetch("products/postProducts.php", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(datos)
	})
	.then(res => res.json())
	.then(data => {
		e.target.reset()
		// alert("saved")
		getProduct()
	})
	.catch(error => console.error(error))
}

form.addEventListener("submit", productsPost);




// GET
const getProduct = () => {

	fetch("products/getProducts.php", { headers: { "Content-Type": "application/json" } })
	.then(res => res.json())
	.then(data => {
		
		if(data) {
			const showProduct = document.getElementById("show-product");
			let div = "";
			for (let i in data) {
				div += ` 
					<p> ${data[i].name}  - ${data[i].price}</p>
				`;
			}
			showProduct.innerHTML = div
		} else {
			console.log(data)
		}

	})
	.catch(error => console.error(error))
}

getProduct()