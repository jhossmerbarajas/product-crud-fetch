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
}