import React from "react";

const Enlaces = () => {
	return (
		<div className="enlaces col-4 text-center ">
			<ul className="nav">
				<li>
					<div className=" isesion ">
						<a
							className=" registrarse btn text-white "
							href="/registro"
						>
							<i className="fas fa-user"></i>
							Ingresar/Registrarse
						</a>
					</div>
				</li>
				{/* <li className="nav-item">
          <a className=" btn  text-white nav-link" href="https://picsum.photos/300">
            <i className="fas fa-fire"></i>
            Los mas Vendidos
          </a>
        </li> */}

				{/* <li className="nav-item">
          <a className="btn text-white nav-link" href="https://picsum.photos/300">
            <i className="fas fa-shopping-bag"></i>
            Mis compras
          </a>
        </li> */}
				<li className="nav-item">
					<a
						className="nav-link btn text-white"
						href="https://picsum.photos/300"
					>
						<i className="fas fa-shopping-cart "></i>
						Mi carrito
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Enlaces;
