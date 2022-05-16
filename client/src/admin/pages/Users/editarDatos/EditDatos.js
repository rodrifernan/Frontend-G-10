import React, { useState } from "react";
import { Input } from "../../../../Components/createProduct/Input";
import "./editDatos.css";

export const EditDatos = ({
	firstName,
	lastName,
	email,
	direccion,
	tlf,
	userName,
}) => {
	const [name, setName] = useState({ value: firstName, valid: null });
	const [apellido, setApellido] = useState({ value: lastName, valid: null });
	const [correo, setCorreo] = useState({ value: email, valid: null });
	const [adress, setAdress] = useState({ value: direccion, valid: null });
	const [telefono, setTelefono] = useState({ value: tlf, valid: null });
	const [user, setUser] = useState({ value: userName, valid: null });

	console.log("firstName", firstName);
	const regex = {
		name: /^.{1,50}$/,
		apellido: /^.{1,50}$/,
		correo: /^.{1,50}$/,
		adress: /^.{1,50}$/,
		telefono: /^.{1,50}$/,
		user: /^.{1,50}$/,
	};
	return (
		<form className="editDatos__form create__formBody">
			<div className="row">
				<Input
					type="text"
					label="Nombre"
					placeholder="N/A"
					state={name}
					setstate={setName}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.name}
				/>
				<Input
					type="text"
					label="Apellido"
					placeholder="N/A"
					state={apellido}
					setstate={setApellido}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.apellido}
				/>
			</div>
			<div className="row">
				<Input
					type="text"
					label="Correo Electronico"
					placeholder="N/A"
					state={correo}
					setstate={setCorreo}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.correo}
				/>
				<Input
					type="text"
					label="Direccion"
					placeholder="N/A"
					state={adress}
					setstate={setAdress}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.adress}
				/>
			</div>
			<div className="row">
				<Input
					type="text"
					label="Telefono"
					placeholder="N/A"
					state={telefono}
					setstate={setTelefono}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.telefono}
				/>
				<Input
					type="text"
					label="Nombre de ususario"
					placeholder="N/A"
					state={user}
					setstate={setUser}
					msgError="Debe tener menos de 50 caracteres"
					size="col"
					validRegex={regex.user}
				/>
			</div>

			<button type="submit" className="create__button btn btn-primary">
				Submit
			</button>
		</form>
	);
};
