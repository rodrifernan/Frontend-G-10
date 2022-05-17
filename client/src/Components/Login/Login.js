import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiLogin, cleanLogin } from "../../redux/reducer/login";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { LoginFromGoogle } from "../hooks/LoginFromGoogle";
import {
	addGuestShoppingCart,
	getShoppingCart,
} from "../../redux/reducer/shoppingCart";
import "./Login.css";

export const Login = ({ redirect = null, page = false, loginClass = "" }) => {
	const navigate = useNavigate();

	const [input, setInput] = useState({
		userOrEmail: "",
		password: "",
	});

	const [inputErrors, setInputErrors] = useState({});

	const dispatch = useDispatch();
	const userCredentials = useSelector(({ login }) => login.userCredentials);
	const shoppingList = useSelector(
		({ shoppingCart }) => shoppingCart.shoppingList
	);

	const init = () => {
		dispatch(apiLogin(input));
	};

	useEffect(() => {
		localStorage.removeItem("userCredentials");

		return () => {
			dispatch(cleanLogin());
		};
	}, [dispatch]);

	useEffect(() => {
		if (userCredentials.loading) {
			Swal.fire({
				title: "Cargando...",
				timerProgressBar: true,
				didOpen: () => {
					Swal.showLoading();
				},
			});
		} else Swal.close();

		const { errors } = userCredentials;
		if (errors) {
			errors.forEach((error) =>
				setInputErrors((state) => ({
					...state,
					[error.param]: error.msg,
				}))
			);
		} else setInputErrors({});

		if (userCredentials?.type === "noLogin") {
			Swal.fire({
				position: "center",
				icon: "error",
				text: userCredentials.msg,
				showConfirmButton: false,
				timer: 1000,
			});
		}

		if (userCredentials.token && input.userOrEmail) {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Bienvenido " + userCredentials.userName,
				showConfirmButton: false,
				timer: 1500,
			}).then(async () => {
				dispatch(addGuestShoppingCart([...shoppingList])).then(() => {
					dispatch(getShoppingCart());
				});

				if (redirect) redirect();

				try {
					const modal = window.bootstrap.Modal.getInstance(
						document.getElementById("loginModal")
					);

					modal.hide();
				} catch (error) {}
			});
		}
	}, [input.userOrEmail, redirect, shoppingList, dispatch, userCredentials]);

	const handleInputChange = ({ target }) =>
		setInput({
			...input,
			[target.name]: target.value,
		});

	const navRegister = () => {
		try {
			const modal = window.bootstrap.Modal.getInstance(
				document.getElementById("loginModal")
			);

			modal.hide();
		} catch (error) {}

		navigate("/userRegister");
	};

	return (
		<div className={"px-4 " + loginClass} id="loginContainer">
			<div className="form-row">
				<label htmlFor="userOrEmail">
					Ingresé su Nombre de Usuario o Email.
				</label>
				<input
					onChange={handleInputChange}
					type="text"
					className={
						"form-control " +
						(inputErrors.userOrEmail && "is-invalid")
					}
					id="userOrEmail"
					name="userOrEmail"
					placeholder="Usuario o Email"
				/>
				{inputErrors.userOrEmail && (
					<div className="invalid-feedback">
						{inputErrors.userOrEmail}
					</div>
				)}
			</div>
			<div className="form-row">
				<label htmlFor="password">Ingresé su contraseña</label>
				<input
					onChange={handleInputChange}
					type="password"
					className={
						"form-control " +
						(inputErrors.userOrEmail && "is-invalid")
					}
					id="password"
					name="password"
					placeholder="Contraseña"
				/>
				{inputErrors.userOrEmail && (
					<div className="invalid-feedback">
						{inputErrors.userOrEmail}
					</div>
				)}
			</div>

			<div className="linkRegister" onClick={navRegister}>
				<span>Registrarse</span>
			</div>

			<div className="button-container d-flex flex-column justify-content-center align-items-center pt-2">
				<button
					onClick={init}
					className="btn"
					style={{
						backgroundColor: "#5534A5",
						color: "white",
						width: "80%",
						height: "2.6rem",
					}}
				>
					Ingresar
				</button>
				<LoginFromGoogle page />
			</div>
		</div>
	);
};
