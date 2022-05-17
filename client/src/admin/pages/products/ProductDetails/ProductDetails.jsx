import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

import { getAllProducts } from "../../../../redux/reducer/products";

export const ProductDetails = () => {
	//trae todas las ordenes
	let productsAll = useSelector(getAllProducts);
	//filtro por el numero de orden
	const { productId } = useParams();
	console.log(productId);
	const filterOrderbyNumberProduct = productsAll.filter(
		(e) => e.id === productId
	);
	// console.log(filterOrderbyNumberProduct[0]);

	const [data] = useState(filterOrderbyNumberProduct[0]);
	console.log(data);

	return (
		<div className="ProductDetail__container">
			<div className="ProductDetail__container-list">
				<div className="orderDetail__header">
					<h1>Detalle del Producto </h1>
				</div>
				<div className="ProductDetail__container-item">
					<h3 className="title__list">ID</h3>
					<div className="list__item">{data.id} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Nombre</h3>
					<div className="list__item">{data.name} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Precio</h3>
					<div className="list__item">{data.price} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Stock</h3>
					<div className="list__item">{data.stock} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Marca</h3>
					<div className="list__item">{data.brand} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Categoria</h3>
					<div className="list__item">{data.category} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Color</h3>
					<div className="list__item">{data.color} </div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Descuento</h3>
					<div className="list__item">{data.discount} </div>
				</div>
				<hr className="divider" />

				<div className="ProductDetail__container-item">
					<h3 className="title__list">Garantia</h3>
					<div className="list__item">{data.warranty} </div>
				</div>
				<hr className="divider" />

				<div className="ProductDetail__container-item">
					<h3 className="title__list">Descripción</h3>
					<div className="list__item"> {data.description}</div>
				</div>
				<hr className="divider" />
				<div className="ProductDetail__container-item">
					<h3 className="title__list">Imagen referencial</h3>
					<div className="list__item">
						{" "}
						<img src={data.image[0]} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};
