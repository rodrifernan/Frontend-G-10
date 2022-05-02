import React from "react";
import "./footer.css";

export const Footer = () => {
	return (
		<footer className="bg-light text-center footer__main ">
			<div className="footer__section">
				<div className="footer__col">
					<span>Registrate gratis</span>
					<button className="btn btn-primary btn-rounded">
						SING UP
					</button>
				</div>
				<div className="footer__col2">
					<div>
						<span>Siguenos en nuestras redes sociales</span>
					</div>
					<div>
						<i className="fab fa-facebook"></i>
						<i className="fab fa-instagram"></i>
						<i className="fab fa-github"></i>
						<i className="fab fa-twitter"></i>
					</div>
				</div>
			</div>
			<div className="foot__copyrigth">
				<p className="footer__p">
					2022 Copyrigth: Grupo PF 10 Hootcamp Henry
				</p>
			</div>
		</footer>
	);
};
