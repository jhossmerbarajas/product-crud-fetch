export class UI 
{
	async cardView (data) {

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
			button.addEventListener("click", () => alert("hola"));

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
}