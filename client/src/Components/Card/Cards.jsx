import React from "react";
import "./card.css";
// import { Link } from "react-router-dom";

const Card = ({
	description,
	name,
	price,
	image,
	id,
	color,
	brand,
	stock,
	warranty,
	category,
}) => {
	let idModal = `modal${id}`;
	let twarranty = "";
	if (warranty > 1) {
		twarranty = "años";
	} else {
		twarranty = "año";
	}
	return (
		<div className="d-flex flex-wrap">
			<div
				className="card"
				type="button"
				data-toggle="modal"
				data-target={`#${idModal}`}
			>
				<img className="card-img-top" src={image[0]} alt="foto" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<span className="badge bg-success">{category}</span>
					<p className="card-text">Precio: ${price}</p>
				</div>
			</div>
			{/* inicio modal */}
			<div
				className="modal fade"
				id={`${idModal}`}
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-lg modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title " id="exampleModalLabel">
								Detalles del artículo
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<div className="d-flex">
								<div className="col-6">
									<img
										className="img-fluid"
										src={image[0]}
										alt="foto"
									/>
								</div>
								<div className="col-6 text-left">
									<p>Nombre: {name}</p>
									<p>Descripcion: {description}</p>
									<p>Brand: {brand}</p>
									<p>Price: ${price}</p>
									<p>Color: {color}</p>
									<p>Disponibles: {stock}</p>
									<p>
										Garantia: {warranty} {twarranty}
									</p>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success">
								Agregar al carrito
							</button>
							<button type="button" className="btn btn-primary">
								Agregar a la lista de deseos
							</button>
						</div>
						{/* fin modal */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
