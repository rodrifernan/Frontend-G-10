import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
	// const userCredentials = useSelector(({ login }) => login.userCredentials);
	const userCredentials = JSON.parse(
		localStorage.getItem("userCredentials")
	).userName;

	console.log(userCredentials);
	const auth = userCredentials === "Johannes" ? true : false;
	const location = useLocation();

	//   Swal.fire({
	//     position: 'center',
	//     icon: 'error',
	//     title: 'Lo sentimos, pagina restringida',
	//     timer: 1500,
	//   });

	return auth ? (
		<Outlet />
	) : (
		<>
			<Navigate to="/" state={{ from: location }} replace />
			{/* { 
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Lo sentimos, pagina restringida',
            timer: 1500,
          })
      } */}
		</>
	);
};
