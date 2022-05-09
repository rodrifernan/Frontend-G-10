import React, { useState, useEffect } from 'react';
import './card.css';
import { addPush } from '../../redux/reducer/carrito';
import { postWish } from '../../redux/reducer/getWishilist';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getAllUsers } from '../../redux/reducer/getAllUsers';
import { addShoppingList, postShoppingCart } from '../../redux/reducer/shoopingCart';

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
  const [carrito, setCarrito] = useState({
    title: '',
    price: '',
    stock: '',
    image: '',
  });

  const dispatch = useDispatch();
  const agregarCarrito = (tit, precio, img, stock) => {
    dispatch(addShoppingList(id));
    dispatch(postShoppingCart('asda'))


    setCarrito({
      title: tit,
      price: precio,
      stock: stock,
      image: img,
    });
    // alert("Agregado al carro")
    toast.success('Agregado al carrito');
  };

  useEffect(() => {
    dispatch(addPush(carrito));
    dispatch(getAllUsers());
  }, [carrito]); // eslint-disable-line react-hooks/exhaustive-deps
  let idModal = `modal${id}`;
  let twarranty = '';
  if (warranty > 1) {
    twarranty = 'años';
  } else {
    twarranty = 'año';
  }

  const addAWish = productId => {
    console.log(productId);
    dispatch(postWish(productId));
  };

  return (
    <div className='d-flex flex-wrap'>
      <Toaster position='top-center' reverseOrder={false} />
      <div
        className='card'
        type='button'
        data-toggle='modal'
        data-target={`#${idModal}`}
      >
        <img className='card-img-top' src={image[0]} alt='foto' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <span className={`badge ${category}`}>{category}</span>
          <p className='card__precio'>Precio: ${price}</p>
        </div>
      </div>
      {/* inicio modal */}
      <div
        className='modal fade'
        id={`${idModal}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title ' id='exampleModalLabel'>
                Detalles del artículo
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <div className='modal-body'>
              <div className='d-flex'>
                <div className='col-6'>
                  <img className='img-fluid' src={image[0]} alt='foto' />
                </div>
                <div className='col-6 text-left'>
                  <p>Nombre: {name}</p>
                  <p className='modal__description'>
                    Descripcion: {description}
                  </p>
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
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-success'
                onClick={() => agregarCarrito(name, price, image[0], stock)}
              >
                Agregar al carrito
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => addAWish(id)}
              >
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
