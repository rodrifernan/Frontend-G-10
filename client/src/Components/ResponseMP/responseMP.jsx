import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderMP, postOrderMP } from '../../redux/reducer/getResponseMP';
import jsPDF from 'jspdf';
import './response.css';
import logo from './LogoEcommerce.png';

import { useNavigate } from 'react-router-dom';

const ResponseMP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let getOrderMPEl = useSelector(state => state.paymentOrderEG.paymentOrder);
  let getOrderAllEl = useSelector(state => state.paymentOrderEG.OrdenCompra);
  useEffect(() => {
    if (
      !localStorage.getItem('shoppingCart') ||
      !JSON.parse(localStorage.getItem('shoppingCart')).length
    ) {
      navigate('/');
    } else {
      dispatch(getOrderMP(getOrderMPEl));
      dispatch(postOrderMP());
    }
  }, []);

  let totalPagar = 0;

  if (Object.keys(getOrderMPEl).length > 0) genPDF(getOrderAllEl);
  return Object.keys(getOrderMPEl).length > 0 ? (
    <div
      id='content'
      className='page-content container'
      style={{ background: 'white', height: '800px' }}
    >
      <div className='page-header text-blue-d2'>
        <h1 className='page-title text-secondary-d1'>ShopBag</h1>
      </div>
      <div className='container px-0'>
        <div className='row mt-4'>
          <div className='col-12 col-lg-12'>
            <div className='row'>
              <div className='col-12'>
                <div className='text-center text-150'>
                  <img src={logo} style={{ height: '50px', margin: 0 }} />
                  <span className='text-default-d3'>
                    Orden Compra # {getOrderAllEl?.orderBd?.orderNumber}
                  </span>
                </div>
              </div>
            </div>

            <hr className='row brc-default-l1 mx-n1 mb-4' />

            <div className='row' style={{ marginBottom: '50px' }}>
              <div className='col-sm-6'>
                <div>
                  <span className='text-sm text-grey-m2 align-middle'>
                    Para:
                  </span>
                  <span className='text-600 text-110 text-blue align-middle'>
                    {' '}
                    {getOrderMPEl?.user?.firstName}{' '}
                    {getOrderMPEl?.user?.lastName}
                  </span>
                </div>
                <div>
                  <span className='text-sm text-grey-m2 align-middle'>
                    Dirección:
                  </span>
                  <span className='text-600 text-110 text-blue align-middle'>
                    {getOrderMPEl?.user?.address}
                  </span>
                </div>
                <div>
                  <span className='text-sm text-grey-m2 align-middle'>
                    Teléfono:
                  </span>
                  <span className='text-600 text-110 text-blue align-middle'>
                    {getOrderMPEl?.user?.phone}
                  </span>
                </div>
                <div>
                  <span className='text-sm text-grey-m2 align-middle'>
                    Email:{' '}
                  </span>
                  <span className='text-600 text-110 text-blue align-middle'>
                    {getOrderMPEl?.user?.email}
                  </span>
                </div>
              </div>

              <div className='text-95 col-sm-6 align-self-start d-sm-flex justify-content-end'>
                <hr className='d-sm-none' />
                <div className='text-grey-m2'>
                  <div className='mt-1 mb-2 text-secondary-m1 text-600 text-125'></div>
                  <div className='my-2'>
                    <i className='fa fa-circle text-blue-m2 text-xs mr-1'></i>{' '}
                    <span className='text-600 text-90'>Orden #:</span>
                    {getOrderAllEl?.orderBd?.orderNumber}
                  </div>
                  <div className='my-2'>
                    <i className='fa fa-circle text-blue-m2 text-xs mr-1'></i>{' '}
                    <span className='text-600 text-90'>Fecha:</span>
                    {getOrderAllEl?.orderBd?.createdAt.substr(8, 2)}/
                    {getOrderAllEl?.orderBd?.createdAt.substr(5, 2)}/
                    {getOrderAllEl?.orderBd?.createdAt.substr(0, 4)}
                  </div>
                  {/* //2022-05-15 13:31:26.18-04 */}
                  <div className='my-2 d-flex'>
                    <i className='fa fa-circle text-blue-m2 text-xs mr-1'></i>{' '}
                    <span className='text-600 text-90'>Status:</span>
                    <span className='badge badge-warning badge-pill px-25'>
                      {getOrderAllEl?.orderBd?.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='row text-600 text-white bgc-default-tp1 py-25'>
              <div className='d-none d-sm-block col-1'>#</div>
              <div className='col-3'>Descripción</div>
              <div className='d-none d-sm-block col-2 col-sm-2'>Cant.</div>
              <div className='d-none d-sm-block col-sm-2'>Unit.Precio</div>
              <div className='d-none d-sm-block col-sm-2'>Dcto.</div>
              <div className='col-2'>Total</div>
            </div>

            <div className='mt-4'>
              <div className='text-95 text-secondary-d3'>
                {getOrderMPEl?.shoppingCart?.map((elem, index) => {
                  // subTotal      = subTotal      + elem.subTotal
                  totalPagar = totalPagar + elem.totalPage;
                  // descuentoItem = descuentoItem + elem.discountItem
                  return (
                    <div key={elem.title} className='row mb-2 mb-sm-0 py-25'>
                      <div className='d-none d-sm-block col-1'>
                        {index + 1}{' '}
                      </div>
                      <div className='col-3 '>{elem.title}</div>
                      <div className='d-none d-sm-block col-2'>
                        {elem.quantity}
                      </div>
                      <div className='d-none d-sm-block col-2 text-95'>
                        ${elem.price.toFixed(2)}
                      </div>
                      <div className='d-none d-sm-block col-2 text-95'>
                        {elem.discount.toFixed(2)}%
                      </div>
                      <div className='col-2 text-secondary-d2'>
                        ${elem.totalPage.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-sm-5 text-grey text-90 order-first order-sm-last ml-auto'>
                <div className='row my-2 align-items-center bgc-primary-l3 p-2'>
                  <div className='col-7 text-right'>Total a Pagar $</div>
                  <div className='col-5'>
                    <span className='text-150 text-success-d3 opacity-2'>
                      {totalPagar.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <span className='text-secondary-d1 text-105'>
              Gracias por su Compra !
            </span>
            <div
              onClick={() => navigate('/')}
              className='btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0'
            >
              Continuar!
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>hola</>
  );
};
export default ResponseMP;

const genPDF = async getOrderAllEl => {
  try {
    const jsPDF1 = new jsPDF();
    var doc = new jsPDF('l', 'mm', [1200, 1810]);
    var pdfjs = document.getElementById('content');
    await doc.html(pdfjs, {
      callback: function (doc) {
        doc.save(`OrdenCompra#${getOrderAllEl?.orderBd?.orderNumber}.pdf`);
      },
    }); //,
    //x: 10,y: 10});
    //doc.output('dataurlnewwindow');
  } catch (error) {}
};
