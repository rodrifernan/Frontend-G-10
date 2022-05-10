import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {getPaymentIdMP,
        getOrderMP } from "../../redux/reducer/getResponseMP";
import "./response.css";
const ResponseMP = () => {
          const querystring = new URLSearchParams(useLocation().search)
          const payment_id =  querystring.get('payment_id')
          const dispatch = useDispatch();
          const [state, setState] = useState([])
            
          let paymentIdOrdenEl = useSelector(state => state.paymentOrderEG.paymentId);
          let getOrderMPEl = useSelector(state => state.paymentOrderEG.paymentOrder);
          
          useEffect(() => {
            dispatch(getPaymentIdMP(payment_id));
            dispatch(getOrderMP());        
            setState(getOrderMPEl)
          }, []);
          
          let suma = getOrderMPEl.reduce((acumulador, actual) => acumulador.price + actual.price);


 
         //console.log('estoy  Componente ResponseMP payment_id', payment_id);
         //console.log('estoy  Componente ResponseMP Order', getOrderMPEl);
         
         //console.log(paymentIdOrdenEl?.card?.cardholder?.name)   

         let tipoTransaccion = '' 
         switch(paymentIdOrdenEl?.card?.cardholder?.name) { // Tipo de transaccion de mercado pago
          case 'APRO':     //  Pago aprobado
               tipoTransaccion = 'Venta ha sido Exitosa!'
               break;
          case 'OTHE':     //  Rechazado por error general
               tipoTransaccion = 'Rechazado por error general!'
               break;
          case 'CONT':     //  Pendiente de pago
               tipoTransaccion = 'Pendiente de pago!'
               break;
          case 'CALL':     //  Rechazado con validación para autorizar
               tipoTransaccion = 'Rechazado con validación para autorizar!'
               break;
          case 'FUND':     // 	Rechazado por importe insuficiente
               tipoTransaccion = 'Rechazado por importe insuficiente!'
               break;
          case 'SECU':     //  Rechazado por código de seguridad inválido
               tipoTransaccion = 'Rechazado por código de seguridad inválido!'
               break;
          case 'EXPI':     //  Rechazado debido a un problema de fecha de vencimiento
               tipoTransaccion = 'Rechazado debido a un problema de fecha de vencimiento!'
               break;
          case 'FORM':     //  Rechazado debido a un error de formulario
               tipoTransaccion = 'Rechazado debido a un error de formulario!'
               break;
          default:
                console.log('Lo lamentamos, hubo un error en la transacción!');       
        }
        
        //console.log('estoy componenten responsePM 2 -> ',paymentIdOrdenEl)
        
            return (
                    paymentIdOrdenEl?

<div class="page-content container" style={{background:'white'}}>
    <div class="page-header text-blue-d2">
        {/* <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                ID: #111-222
            </small>
        </h1> */}

        <div class="page-tools">
            <div class="action-buttons">
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                    <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Imprimir
                </a>
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                    <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Exportar
                </a>
            </div>
        </div>
    </div>

    <div class="container px-0">
        <div class="row mt-4">
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                            <span class="text-default-d3">Orden de Compa Nro.0001</span>
                        </div>
                    </div>
                </div>

                <hr class="row brc-default-l1 mx-n1 mb-4" />

                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-sm text-grey-m2 align-middle">De:</span>
                            <span class="text-600 text-110 text-blue align-middle">Johannes</span>
                        </div>

                        {/* <div class="text-grey-m2">
                            <div class="my-1">
                                Street, City
                            </div>
                            <div class="my-1">
                                State, Country
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">111-111-111</b></div>
                        </div> */}

                    </div>

                    {/* <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                            <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Invoice
                            </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #111-222</div>
                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> Oct 12, 2019</div>
                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-warning badge-pill px-25">Unpaid</span></div>

                        </div>
                    </div> */}

                </div>

                <div class="mt-4">
                            
                    <div class="row text-600 text-white bgc-default-tp1 py-25"
                    >
                        <div class="d-none d-sm-block col-1">#</div>
                        <div class="col-9 col-sm-5">Descripción</div>
                        <div class="d-none d-sm-block col-4 col-sm-2">Cant.</div>
                        <div class="d-none d-sm-block col-sm-2">Unit.Precio</div>
                        <div class="col-2">Monto</div>

                    </div>

{/* title(pin):"Cejas postizas"
price(pin):500
quantity(pin):1
discount(pin):30
subTotal(pin):350
total(pin):350 */}
                    <div class="text-95 text-secondary-d3">
                    {
                      getOrderMPEl.map((elem) => {
                      return(
                              <div class="row mb-2 mb-sm-0 py-25">
                                   <div class="d-none d-sm-block col-1"></div>
                                   <div class="col-9 col-sm-5">{elem.title}</div> 
                                   <div class="d-none d-sm-block col-2">{elem.quantity}</div>
                                   <div class="d-none d-sm-block col-2 text-95">{elem.price}</div>
                                   <div class="col-2 text-secondary-d2">{elem.quantity*elem.price}</div>
                              </div>
                     )})
                    } 

                        {/* <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                            <div class="d-none d-sm-block col-1">2</div>
                            <div class="col-9 col-sm-5">Web hosting</div>
                            <div class="d-none d-sm-block col-2">1</div>
                            <div class="d-none d-sm-block col-2 text-95">$15</div>
                            <div class="col-2 text-secondary-d2">$15</div>
                        </div>

                        <div class="row mb-2 mb-sm-0 py-25">
                            <div class="d-none d-sm-block col-1">3</div>
                            <div class="col-9 col-sm-5">Software development</div>
                            <div class="d-none d-sm-block col-2">--</div>
                            <div class="d-none d-sm-block col-2 text-95">$1,000</div>
                            <div class="col-2 text-secondary-d2">$1,000</div>
                        </div>

                        <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                            <div class="d-none d-sm-block col-1">4</div>
                            <div class="col-9 col-sm-5">Consulting</div>
                            <div class="d-none d-sm-block col-2">1 Year</div>
                            <div class="d-none d-sm-block col-2 text-95">$500</div>
                            <div class="col-2 text-secondary-d2">$500</div>
                        </div> */}
                    </div>

                    <div class="row border-b-2 brc-default-l2"></div>

            {/* <div class="table-responsive">
                <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                    <thead class="bg-none bgc-default-tp1">
                        <tr class="text-white">
                            <th class="opacity-2">#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th width="140">Amount</th>
                        </tr>
                    </thead>

                    <tbody class="text-95 text-secondary-d3">
                        <tr></tr>
                        <tr>
                            <td>1</td>
                            <td>Domain registration</td>
                            <td>2</td>
                            <td class="text-95">$10</td>
                            <td class="text-secondary-d2">$20</td>
                        </tr> 
                    </tbody>
                </table>
            </div> */}
            
                    <div class="row mt-3">
                        {/* <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div> */}

                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            {/* <div class="row my-2">
                                <div class="col-7 text-right">
                                    SubTotal
                                </div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">$2,250</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Imp. (10%)
                                </div>
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">$225</span>
                                </div>
                            </div> */}

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Monto
                                </div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">{suma}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105">Gracias por su Compra !</span>
                        <a href="#" class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Continuar!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>:""

                  );
};
export default ResponseMP



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
