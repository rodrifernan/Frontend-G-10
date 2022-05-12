import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {getPaymentIdMP, getOrderMP, postOrderMP } from "../../redux/reducer/getResponseMP";
import jsPDF  from "jspdf";
import "./response.css";
//import 'jspdf-autotable



//npm i jspdf-autotable

const ResponseMP = () => {
          const querystring = new URLSearchParams(useLocation().search)
          const payment_id =  querystring.get('payment_id')
          const dispatch = useDispatch();
          const [state, setState] = useState([])
            
          let paymentIdOrdenEl = useSelector(state => state.paymentOrderEG.paymentId);
          let getOrderMPEl = useSelector(state => state.paymentOrderEG.paymentOrder);
          let nroOrdenCompraEl = useSelector(state => state.paymentOrderEG.nroOrdenCompra);
          

          useEffect(() => {
            dispatch(getPaymentIdMP(payment_id));
            dispatch(getOrderMP(getOrderMPEl));        
            dispatch(postOrderMP());        
            setState(getOrderMPEl)

            //dispatch(postOrderMP(getOrderMPEl));        
          }, []);

          console.log('dispatch(Orden Compra      ->',getOrderMPEl)
          console.log('dispatch(NRO. Orden Compra ->',nroOrdenCompraEl.invoiceNumber)
          console.log('dispatch(getOrderMP        ->',Object.keys(getOrderMPEl).length)
          let subTotal = 0
          let totalPagar = 0
         //console.log('estoy  Componente ResponseMP payment_id', payment_id);

        // Determinar tipo de transaccion mercado pago
        // tipoTransMP(paymentIdOrdenEl?.card?.cardholder?.name)
   // if(!nroOrdenCompraEl.length) genPDF()        
    
    return ( //getOrderMPEl.length
        Object.keys(getOrderMPEl).length>0?
    
        <div className="page-content container" style={{background:'white'}}>
                    <div className="page-header text-blue-d2">

                        <div className="page-tools">
                            <div className="action-buttons">
                                <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                                    <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                    Imprimir
                                </a>
                                <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                                    <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                                    Exportar
                                </a>
                            </div>
                        </div>
                    </div>

            <div className="container px-0">
                <div className="row mt-4">
                    <div className="col-12 col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center text-150">
                                    <i className="fa fa-book fa-2x text-success-m2 mr-1"></i>
                                    <span className="text-default-d3">Orden Compra Nro. </span>
                                    <span className="text-default-d3">{nroOrdenCompraEl?.invoiceNumber}</span>
                                    
                                </div>
                            </div>
                        </div>

                        <hr className="row brc-default-l1 mx-n1 mb-4" />

                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Para:</span>
                                    <span className="text-600 text-110 text-blue align-middle"> {getOrderMPEl.user.firstName} {getOrderMPEl.user.lastName}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Dirección:</span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl.user.address}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Teléfono:</span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl.user.phone}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Email: </span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl.user.email}</span> 
                                </div>

                            </div>

                        </div>

                        <div class="mt-4">           
                            <div className="row text-600 text-white bgc-default-tp1 py-25"
                            >
                                <div className="d-none d-sm-block col-1">#</div>
                                <div className="col-9 col-sm-5">Descripción</div>
                                <div className="d-none d-sm-block col-4 col-sm-2">Cant.</div>
                                <div className="d-none d-sm-block col-sm-2">Unit.Precio</div>
                                <div className="col-2">Monto</div>

                            </div>

                            <div className="text-95 text-secondary-d3">
                                    {
                                    
                                    getOrderMPEl.shoppingCart.map((elem ) => {
                                        subTotal   = subTotal   + elem.total
                                        totalPagar = totalPagar + elem.subTotal
                                    return(
                                        
                                            <div key={elem.title} className="row mb-2 mb-sm-0 py-25">
                                                <div className="d-none d-sm-block col-1"></div>
                                                <div className="col-9 col-sm-5">{elem.title}</div> 
                                                <div className="d-none d-sm-block col-2">{elem.quantity}</div>
                                                <div className="d-none d-sm-block col-2 text-95">{elem.price}</div>
                                                <div className="col-2 text-secondary-d2">{elem.quantity*elem.price}</div>
                                            </div>
                                    )})
                            } 
                           </div>
                        </div>
                            
                        {/*Totales Compra*/}
                <div class="row mt-3">
                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2">
                                <div class="col-7 text-right">Sub-Total</div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">{subTotal}</span>
                                </div>
                            </div>

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">Total a Pagar</div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">{totalPagar}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <hr />
                            <div>
                                <span className="text-secondary-d1 text-105">Gracias por su Compra !</span>
                                <a href="#" className="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Continuar!</a>
                           </div>
                </div>
             </div>
        </div>
        :''
                  );
};
export default ResponseMP

// const genPDF = () =>
//   {
      
//     var doc = new jsPDF();
//     var elementHTML = $('#content').html();
//     var specialElementHandlers = {
//         '#elementH': function (element, renderer) {
//             return true;
//         }
//     };
//     doc.fromHTML(elementHTML, 15, 15, {
//         'width': 170,
//         'elementHandlers': specialElementHandlers
//     });
    
//     // Save the PDF
//     ///doc.save('sample-document.pdf');    

//     // doc.text(20, 20, 'Hola mundo');
//     // doc.text(20, 30, 'Vamos a generar un pdf desde el lado del cliente');
    
//     // // Add new page
//     // doc.addPage();
//     // doc.text(20, 20, 'Visita programacion.net');
    
//     // Save the PDF
//     doc.save('documento.pdf');    
//   }

// const tipoTransMP = (payload) => { 
//     let tipoTransaccion = ''     
// switch(payload) { // Tipo de transaccion de mercado pago
//           case 'APRO':     //  Pago aprobado
//                tipoTransaccion = 'Venta ha sido Exitosa!'
//                break;
//           case 'OTHE':     //  Rechazado por error general
//                tipoTransaccion = 'Rechazado por error general!'
//                break;
//           case 'CONT':     //  Pendiente de pago
//                tipoTransaccion = 'Pendiente de pago!'
//                break;
//           case 'CALL':     //  Rechazado con validación para autorizar
//                tipoTransaccion = 'Rechazado con validación para autorizar!'
//                break;
//           case 'FUND':     // 	Rechazado por importe insuficiente
//                tipoTransaccion = 'Rechazado por importe insuficiente!'
//                break;
//           case 'SECU':     //  Rechazado por código de seguridad inválido
//                tipoTransaccion = 'Rechazado por código de seguridad inválido!'
//                break;
//           case 'EXPI':     //  Rechazado debido a un problema de fecha de vencimiento
//                tipoTransaccion = 'Rechazado debido a un problema de fecha de vencimiento!'
//                break;
//           case 'FORM':     //  Rechazado debido a un error de formulario
//                tipoTransaccion = 'Rechazado debido a un error de formulario!'
//                break;
//           default:
//                 console.log('Lo lamentamos, hubo un error en la transacción!');       
//         }
// }
   // mastercard	        5031 7557 3453 0604	123	25/11
   
   //paymentIdOrdenEl.status = 'approved'

//           Estado de pago
// APRO	Pago aprobado	(otro) 123456789
// OTHE	Rechazado por error general	(otro) 123456789
// CONT	Pendiente de pago	-
// CALL	Rechazado con validación para autorizar	-
// FUND	Rechazado por importe insuficiente	-
// SECU	Rechazado por código de seguridad inválido	-
// EXPI	Rechazado debido a un problema de fecha de vencimiento	-
// FORM	Rechazado debido a un error de formulario	


 /* datos del PAYMENT_ID
 Trayendo Datos MercadoPago Compra 
 
 acquirer_reconciliation: []
additional_info: {authentication_code: null, available_balance: null, ip_address: '181.43.124.255', items: Array(1), nsu_processadora: null}
authorization_code: null
binary_mode: false
brand_id: null
call_for_authorize_id: null
captured: true
card:
cardholder: {
             identification: {…}, 
             name: 'APRO'
            }
date_created: "2022-05-07T21:26:42.000-04:00"
date_last_updated: "2022-05-07T21:26:42.000-04:00"
expiration_month: 11
expiration_year: 2025
first_six_digits: "503175"
id: null
last_four_digits: "0604"
[[Prototype]]: Object
charges_details: []
collector_id: 1117806187
corporation_id: null
counter_currency: null
coupon_amount: 0
currency_id: "ARS"
date_approved: "2022-05-07T21:26:42.814-04:00"
date_created: "2022-05-07T21:26:42.725-04:00"
date_last_updated: "2022-05-07T21:26:42.814-04:00"
date_of_expiration: null
deduction_schema: null
description: "Mancuernas de Gimnasio"
differential_pricing_id: null
external_reference: null
fee_details: Array(1)
0: {amount: 4.1, fee_payer: 'collector', type: 'mercadopago_fee'}
length: 1
[[Prototype]]: Array(0)
id: 1247974915
installments: 1
integrator_id: null
issuer_id: "3"
live_mode: false
marketplace_owner: null
merchant_account_id: null
merchant_number: null
metadata: {}
money_release_date: "2022-05-25T21:26:42.814-04:00"
money_release_schema: null
notification_url: null
operation_type: "regular_payment"
order: {id: '4705940358', type: 'mercadopago'}
payer:{
        email: "test_user_80507629@testuser.com"
        entity_type: null
        first_name: null
        id: "1117802819"
        identification: {number: '32659430', type: 'DNI'}
        last_name: null
        phone: {area_code: null, number: null, extension: null}
        type: null
      }  
payment_method_id: "master"
payment_type_id: "credit_card"
platform_id: null
point_of_interaction: {business_info: {…}, type: 'UNSPECIFIED'}
pos_id: null
processing_mode: "aggregator"
refunds: []
shipping_amount: 0
sponsor_id: null
statement_descriptor: "ECOMMERCEGRUP"
status: "approved"
status_detail: "accredited"
store_id: null
taxes_amount: 0
transaction_amount: 100
transaction_amount_refunded: 0
transaction_details:
                  {
                  acquirer_reference: null
                  external_resource_url: null
                  financial_institution: null
                  installment_amount: 100
                  net_received_amount: 95.9
                  overpaid_amount: 0
                  payable_deferral_period: null
                  payment_method_reference_id: null
                  total_paid_amount: 100
                  }
*/


