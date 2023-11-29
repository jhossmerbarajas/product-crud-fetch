export class FetchApi 
{

	async methodGet (uri) {
		try {
			const response = await fetch ("products/getProducts.php", { headers: { "Content-Type": "application/json" } });
			const res = await response.json();

			return res;
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	async methodPost (uri, data, method){
		
		const res = await fetch(uri, {
			headers: {
				"Content-Type": "application/json"
			},
			method,
			body: JSON.stringify(data)
		}); 

		const response = res.json();
		
		return response;
	}

	async findOneById (id) {
		try {
			const response = await fetch (`products/findOneProduct.php`, { 
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(id) 
			});
			const res = await response.json();
			
			return res;
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	async update (uri, data, method) {
		try {
			const res = await fetch(uri, {
				headers: { "Content-Type": "application/json" },
				method,
				body: JSON.stringify(data)
			});
			
			const response = await res.json()
			return await this.methodGet()
			
		} catch(e) {
			// statements
			console.log(e);
		}
	}

	async delete (uri, data, method) {
		try {
			const res = await fetch(uri, {
				headers: { "Content-Type": "application/json" },
				method,
				body: JSON.stringify(data)
			});
			console.log(await res.json())
			const response = await res.json()
			 return response
			
		} catch(e) {
			// statements
			console.log(e);
		}
	}
}