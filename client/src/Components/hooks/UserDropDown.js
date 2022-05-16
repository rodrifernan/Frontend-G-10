import React from 'react';
import { useLogOut } from './useLogOut';
import { Link } from 'react-router-dom';

export const UserDropDown = () => {
  const out = useLogOut();

  return (
    <>
      {JSON.parse(localStorage.getItem('userCredentials')) ? (
        <div className='dropdown'>
          <button
            className='btn dropdown-toggle registrarse btn text-white'
            style={{ backgroundColor: 'black', width: '10rem' }}
            type='button'
            id='dropdownMenuUser'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {JSON.parse(localStorage.getItem('userCredentials')).userName}
          </button>
          <ul className='dropdown-menu ' aria-labelledby='dropdownMenuUser'>
            <li>
              <Link to='/perfil' className='titulo'>
                <button className='dropdown-item'>Ver Perfil</button>
              </Link>
            </li>
            <li>
              <button className='dropdown-item'>Mis Pedidos</button>
            </li>
            <li>
              <Link to='/myWishes' className='titulo'>
                <button className='dropdown-item'>Mi lista de deseos</button>
              </Link>
            </li>
            <li>
              <button className='dropdown-item'>Mis Reseñas</button>
            </li>
            <li>
              <Link to='/userInvoices' className='titulo'>
                <button className='dropdown-item'>Facturas</button>
              </Link>
            </li>

            <li>
              <Link to='/userSales' className='titulo'>
                <button className='dropdown-item'>Ventas</button>
              </Link>
            </li>

            <li>
              <Link className='titulo' to='/create'>
                <button className='dropdown-item'>Vender</button>
              </Link>
            </li>
            <div className='dropdown-divider'></div>
            <li>
                <button className='dropdown-item' onClick={out}>
                  Cerrar sesión
                </button>
            </li>
          </ul>
        </div>
      ) : (
        <p>notLogin</p>
      )}
    </>
  );
};
