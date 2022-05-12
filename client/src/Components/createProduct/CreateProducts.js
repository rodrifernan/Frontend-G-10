import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "./createProduct.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fileUpload } from "./helper/fileUpload";
import axios from "axios";
import { Input } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/reducer/getCategorie";
import { getAllGenres } from "../../redux/reducer/getGenre";

export const CreateProducts = () => {
	//dispatch busqueda de las categorias
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllGenres());
		dispatch(getAllCategories());
	}, [dispatch]);
	//obtener categorias del store
	const genres = useSelector((state) => state.genres.genres);
	const categories = useSelector((state) => state.categories.categories);
	// navigate de browser router
	const navigate = useNavigate();
	// estados de formulario
	const [name, setName] = useState({ value: "", valid: null });
	const [description, setDescription] = useState({ value: "", valid: null });
	const [price, setPrice] = useState({ value: 0, valid: null });
	const [brand, setBrand] = useState({ value: "", valid: null });
	const [color, setColor] = useState({ value: "", valid: null });
	const [warranty, setWarranty] = useState({ value: 0, valid: null });
	const [stock, setStock] = useState({ value: 0, valid: null });
	const [image, setImage] = useState({ value: [], valid: null });
	const [discount, setDiscount] = useState({ value: 0, valid: null });
	const [category, setCategory] = useState({ value: "", valid: null });
	const [genre, setGenre] = useState({ value: "", valid: null });

	const [formValid, setFormvalid] = useState(null);
	// regex del formulario
	const regex = {
		name: /^.{1,20}$/,
		description: /^.{1,2000}$/,
		price: /[1-9]/,
		brand: /^.{1,20}$/,
		color: /^.{1,20}$/,
		warranty: /[1-9]/,
		discount: /[1-9]/,
		stock: /[1-9]/,
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
				image.value.length > 0 &&
				discount.valid === true &&
				description.value !== "" &&
				stock.valid === true
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
					stock: stock.value,
					categoryId: category.value,
					genreId: genre.value,
				};
				console.log(formData);
				// enviar post para la creacion en db
				const user = {
					headers: {
						"auth-token": JSON.parse(
							localStorage.getItem("userCredentials")
						).token,
					},
				};
				await axios.post(
					"http://127.0.0.1:3001/api/product",
					formData,
					user
				);
				//alert de exito
				swal(
					"Exito!",
					`Producto ${name.value} cargado correctamente`,
					"success"
				);
				// // push to home
				navigate("/");
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
	//------------------------------------------>>>
	// handle upload img
	const handleFileClick = () => {
		document.querySelector("#inputFile").click();
	};
	const handleUploadFile = async ({ target }) => {
		const file = target.files[0];
		Swal.fire({
			title: "Cargando Imagen",
			text: "por favor espere",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});
		try {
			const fileUrl = await fileUpload(file);
			console.log(fileUrl);
			setImage({ ...image, value: [...image.value, fileUrl] });
			// state.value = fileUrl;
			Swal.close();
			Swal.fire({
				icon: "success",
				title: "Exito",
				text: "la imagen ha sido cargada con exito",
			});
		} catch (error) {
			console.log(error);
			Swal.close();
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		}
	};
	//-------------------------------------------->>>
	// handle description
	const handleInputDescription = ({ target }) => {
		setDescription({
			...description,
			value: target.value,
		});
	};
	// handle category
	const handleCategory = ({ target }) => {
		setCategory({
			...category,
			value: target.value,
		});
	};
	// handle genre
	const handleGenre = ({ target }) => {
		setGenre({
			...genre,
			value: target.value,
		});
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
						<div className="col">
							<label>Publico de interes</label>
							<select
								className=" create__input"
								onChange={handleGenre}
							>
								<option value="select">Seleccione</option>
								{genres?.map((genre) => (
									<option key={genre.id} value={genre.id}>
										{genre.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="row">
						<Input
							type="number"
							label="Garantia"
							placeholder="1 año"
							state={warranty}
							setstate={setWarranty}
							msgError="por favor coloque tiempo de garantia"
							size="col"
							validRegex={regex.warranty}
						/>
						<Input
							type="number"
							label="Descuento"
							placeholder="si no desea descuento coloque 0%"
							state={discount}
							setstate={setDiscount}
							msgError="Por favor coloque 30% - 40% - 5%"
							size="col"
							validRegex={regex.discount}
						/>
						<div className="col">
							<label>Categoria</label>
							<select
								className=" create__input"
								onChange={handleCategory}
							>
								<option>Seleccione</option>
								{categories?.map((category) => (
									<option
										key={category.id}
										value={category.id}
									>
										{category.name}
									</option>
								))}
							</select>
						</div>
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
							type="number"
							label="Precio"
							placeholder="200"
							state={price}
							setstate={setPrice}
							msgError="por favor coloque un costo al producto"
							size="col"
							validRegex={regex.price}
						/>
						<Input
							type="number"
							label="Stock del prodcuto"
							placeholder="10"
							state={stock}
							setstate={setStock}
							msgError="por favor coloque un stock valido"
							size="col"
							validRegex={regex.stock}
						/>
					</div>

					<div className="create__grupoInput">
						<label>Descripcion del producto</label>
						<textarea
							className="create__TextArea"
							rows="3"
							value={description.value}
							onChange={handleInputDescription}
						></textarea>
					</div>
					<div className="row">
						<div
							className="btn btn-warning col"
							onClick={handleFileClick}
						>
							Agregar imagen del producto
						</div>
						<input
							style={{ display: "none" }}
							type="file"
							id="inputFile"
							onChange={handleUploadFile}
						/>
					</div>
					{image.value.length > 0 && (
						<div className="create__imgPreviewContaniner">
							{image.value.map((img) => (
								<img
									className="create__imgPreview"
									key={img}
									src={img}
									alt={img}
								/>
							))}
						</div>
					)}

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
