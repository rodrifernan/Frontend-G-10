import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByUser } from "../../../redux/reducer/getProductsByUser";
import Card from "../../Card/Cards";

import "./productsByUser.css";

export const ProductsByUser = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductsByUser());
	}, []);
	const data = useSelector((state) => state.productsByUser.productsByUser);
	console.log(data);

	return (
		<div className="productsByUSer__container">
			<hr />
			<p>Mis Productos</p>
			{data ? (
				<div className="productsByUSer__cardContainer">
					{data.map((pr) => (
						<Card
							key={pr.id}
							description={pr.description}
							name={pr.name}
							image={pr.image}
							price={pr.price}
							id={pr.id}
							color={pr.color}
							brand={pr.brand}
							stock={pr.stock}
							warranty={pr.warranty}
							category={pr.category}
						/>
					))}
				</div>
			) : (
				<p>no tiene productos en venta</p>
			)}
			<hr />
		</div>
	);
};
