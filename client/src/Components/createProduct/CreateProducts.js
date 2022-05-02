import React, { useState } from "react";
import swal from "sweetalert";
import "./createProduct.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Input } from "./Input";

export const CreateProducts = () => {
	const history = useHistory();
	// estados de formulario
	const [name, setName] = useState({ value: "", valid: null });
	const [description, setDescription] = useState({ value: "", valid: null });
	const [price, setPrice] = useState({ value: "", valid: null });
	const [brand, setBrand] = useState({ value: "", valid: null });
	const [color, setColor] = useState({ value: "", valid: null });
	const [warranty, setWarranty] = useState({ value: "", valid: null });
	const [image, setImage] = useState({ value: "", valid: null });
	const [discount, setDiscount] = useState({ value: "", valid: null });
	const [formValid, setFormvalid] = useState(null);
	// regex del formulario
	const regex = {
		name: /^.{1,20}$/,
		description: /^.{1,200}$/,
		price: /^.{1,20}$/,
		brand: /^.{1,20}$/,
		color: /^.{1,20}$/,
		warranty: /^.{1,20}$/,
		image: /^.{1,100}$/,
		discount: /^.{1,20}$/,
	};
	//submit del fomr
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (
				name.valid === true &&
				price.valid === true &&
				brand.valid === true &&
				color.valid === true &&
				warranty.valid === true &&
				image.valid === true &&
				discount.valid === true
			) {
				//no mostrar error
				setFormvalid(true);
				// crear obj de creacion de producto
				const formData = {
					name: name.value,
					description: description.value,
					price: price.value,
					brand: brand.value,
					color: color.value,
					warranty: warranty.value,
					image: image.value,
					discount: discount.value,
				};
				//enviar post para la creacion en db
				await axios.post("http://127.0.0.1:3001/api/product", formData);
				// //alert de exito
				swal(
					"Exito!",
					`Producto ${name} cargado correctamente`,
					"success"
				);
				// // push to home
				history.push("/");
			} else {
				//set error
				setFormvalid(false);
			}
		} catch (error) {
			//enviar advertencia si hay error con db
			swal(
				"Error!",
				`Producto ${name.value} NO cargado correctamente`,
				"warning"
			);
		}
	};
	return (
		<div>
			<div className="create__formContainer">
				<form onSubmit={handleSubmit} className="create__formBody">
					<div className="row">
						<Input
							type="text"
							label="Nombre del Producto"
							placeholder="Nombre del prducto a vender"
							state={name}
							setstate={setName}
							msgError="tiene que contener de 8 - 15 letras"
							size="col"
							validRegex={regex.name}
						/>
						<Input
							type="text"
							label="Marca"
							placeholder="Apple - samsung - mi"
							state={brand}
							setstate={setBrand}
							msgError="por favor coloque una marca"
							size="col"
							validRegex={regex.brand}
						/>
					</div>
					<div className="row">
						<Input
							type="text"
							label="Garantia"
							placeholder="1 año"
							state={warranty}
							setstate={setWarranty}
							msgError="por favor coloque tiempo de garantia"
							size="col"
							validRegex={regex.warranty}
						/>
						<Input
							type="text"
							label="Descuento"
							placeholder="si no desea descuento coloque 0%"
							state={discount}
							setstate={setDiscount}
							msgError="Por favor coloque 30% - 40% - 5%"
							size="col"
							validRegex={regex.discount}
						/>
					</div>
					<div className="row">
						<Input
							type="color"
							label="Color"
							state={color}
							setstate={setColor}
							size="col-2"
							validRegex={regex.color}
						/>
						<Input
							type="text"
							label="Url de Imagen"
							placeholder="https://picsum.photos/300"
							state={image}
							setstate={setImage}
							msgError="Seleccione por lo menos una imagen"
							size="col"
							validRegex={regex.image}
						/>
					</div>
					<div className="row">
						<Input
							type="number"
							label="Precio"
							placeholder="1.200"
							state={price}
							setstate={setPrice}
							msgError="por favor coloque un costo al producto"
							size="col"
							validRegex={regex.price}
						/>
					</div>
					<div className="create__grupoInput">
						<label>Descripcion del producto</label>
						<textarea
							className="create__input"
							id="exampleFormControlTextarea1"
							rows="3"
							value={description.value}
							onChange={setDescription}
						></textarea>
					</div>

					{formValid === false && (
						<div className="create__msgError">
							<p>
								<i className="fas fa-exclamation-triangle"></i>
								<b> Error:</b> Por favor rellena el formulario
								corectamente
							</p>
						</div>
					)}
					<button
						type="submit"
						className="create__button btn btn-primary"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
