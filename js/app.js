import { UI } from './UI.js'
const ui = new UI;

import { FetchApi } from './FetchApi.js'
const api = new FetchApi;


const form = document.querySelector("#form-register");

const productsPost = async (e) => {
	e.preventDefault();

	const datos = {
		name: form.name.value,
		price: form.price.value
	}
	// console.log(datos)
	api.methodPost("products/postProducts.php", datos, "POST");
	ui.cardView(api.methodGet())
}
form.addEventListener("submit", productsPost);




// GET
const getData = api.methodGet();
ui.cardView(getData);