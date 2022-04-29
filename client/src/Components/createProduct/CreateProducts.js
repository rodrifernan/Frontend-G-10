import React, { useState } from "react";
import Header from "../Headers/Header";
import swal from "sweetalert";
import "./createProduct.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateProducts = () => {
	const history = useHistory();
	const [formProduct, setformProduct] = useState({
		name: "",
		description: "",
		price: "",
		brand: "",
		color: "",
		warranty: "",
		image: "",
		discount: "",
	});
	const {
		name,
		description,
		price,
		brand,
		color,
		warranty,
		image,
		discount,
	} = formProduct;
	const handleInputChange = ({ target }) => {
		setformProduct({
			...formProduct,
			[target.name]: target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(formProduct);

		//dispatch del post
		try {
			await axios.post("http://127.0.0.1:3001/api/product", formProduct);
			//alert de exito
			swal("Exito!", `Producto ${name} cargado correctamente`, "success");
		} catch (error) {
			swal(
				"Error!",
				`Producto ${name} NO cargado correctamente`,
				"warning"
			);
			console.log(error);
		}
		//reset del formulario
		setformProduct({
			name: "",
			description: "",
			price: "",
			brand: "",
			color: "",
			warranty: "",
			image: "",
			discount: "",
		});
		history.push("/shop");
	};
	return (
		<div>
			<Header />
			<div className="create__formContainer">
				<form onSubmit={handleSubmit} className="create__formBody">
					<div className="row">
						<div className="col">
							<label htmlFor="exampleInputPassword1">
								Nombre del Producto
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="iphone x..."
								name="name"
								value={name}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col">
							<label htmlFor="exampleInputPassword1">Marca</label>
							<input
								type="text"
								className="form-control"
								placeholder="Apple"
								name="brand"
								value={brand}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<label htmlFor="exampleInputPassword1">
								Garantia
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="1 año"
								name="warranty"
								value={warranty}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col">
							<label htmlFor="exampleInputPassword1">
								Descuento
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="30%"
								name="discount"
								value={discount}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-2">
							<label
								htmlFor="exampleColorInput"
								className="form-label"
							>
								Color
							</label>
							<input
								type="color"
								className="form-control form-control-color"
								id="exampleColorInput"
								// value="#563d7c"
								name="color"
								value={color}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col">
							<label htmlFor="exampleInputPassword1">
								Url de Imagen
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="https://picsum.photos/300"
								name="image"
								value={image}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<label htmlFor="exampleInputPassword1">
								Precio
							</label>
							<input
								type="number"
								className="form-control"
								placeholder="1.200,00"
								name="price"
								value={price}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">
							Descripcion
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							name="description"
							value={description}
							onChange={handleInputChange}
						></textarea>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1"
						>
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
