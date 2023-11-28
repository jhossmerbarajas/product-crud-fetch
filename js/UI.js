

export class UI 
{
	async cardView (data, event) {

		const datos = await data;
		const showProduct = document.getElementById("show-product");
		showProduct.innerHTML = "";

		for (let i = 0; i < datos.length; i++) {

			const divName = this.div(datos[i].name);
			const divPrice = this.div(datos[i].price);

			const buttonsActions = this.div()
			buttonsActions.classList.add("buttons-actions");

			const form = this.form(datos[i].id);
			form.setAttribute("id", "form-delete");

			const button = this.button("Editar", datos[i].id);
			button.addEventListener("click", event);

			const divCard = this.div();
			divCard.classList.add("card-product");


			divCard.append(divName)
			divCard.append(divPrice)
			buttonsActions.append(button)
			buttonsActions.append(form)
			
			divCard.append(buttonsActions);
			showProduct.appendChild(divCard);	
		}
	}

	div(string = null) {
		const div = document.createElement("div");
		div.innerText = string

		return div;
	}

	button (string, id) {
		const button = document.createElement("button");
		button.setAttribute("data-id", id)
		button.innerHTML = string;

		return button;
	}

	form (id) {
		const form = document.createElement("form");
		form.appendChild(this.input(id))

		return form
	}

	input (id) {
		const input = document.createElement("input");
		input.setAttribute("type", "submit");
		input.setAttribute("data-delete", id)
		input.setAttribute("id", "delete")

		return input;
	}

	modal (data) {
		
		const modal = document.getElementById("modal");

		const div = ` 
			
			  <div class="modal-content">
			    <span class="close">&times;</span>
			    <h2>Formulario</h2>
			    
			    <form id="form-update">
			      <input type="text" id="name" name="name" value="${data.name}">
			      <input type="number" id="price"  value="${data.price}">
			      <input type="submit" value="Update">
			    </form>

			  </div>
			
		`;

	
		modal.innerHTML = div
	}

}