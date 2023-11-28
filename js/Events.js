import { UI } from './UI.js'
const ui = new UI

import { FetchApi } from './FetchApi.js'
const api = new FetchApi

export const eventsModal = (e) => {
	const dataId = e.target.getAttribute("data-id")
	showModal(dataId)
	return dataId
}

export const showModal = async (id) => {
	const modal = document.querySelector("#modal")
	const span = document.getElementsByClassName("close")[0];

	const getId = await api.findOneById(id)
	const uiModal = await ui.modal(getId)
	
	modal.style.display = "block"
	
	eventUpdate(getId.id)
	 
}

const eventUpdate = async (id) => {
	const form = document.querySelector("#form-update");


	 form.addEventListener("submit", async (e) => {
	 	e.preventDefault()
		const data = {
			id: id,
			name: form.name.value,
			price: form.price.value
		}
	 	
	    await api.update("products/updateProduct.php", data, "POST")
	    modal.style.display = "none"

	    const getData = api.methodGet();
		ui.cardView(getData, eventsModal);
	 });
	    
}