import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {getPaymentIdMP, paymentIdOrden} from "../../redux/reducer/getResponseMP";
const ResponseMP = () => {
          const querystring = new URLSearchParams(useLocation().search)
          const payment_id =  querystring.get('payment_id')
          const dispatch = useDispatch();

          useEffect(() => {
            dispatch(getPaymentIdMP(payment_id));
          }, []);
          
         let paymentIdOrdenEl = useSelector(paymentIdOrden);
 
         console.log('estoy  Componente ResponseMP payment_id', payment_id);
         
         //console.log(paymentIdOrdenEl.card.cardholder.name)   

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
                    <div className="create__formContainer">
                        <div className="row">
                        <p>{tipoTransaccion}</p>
                        </div>

                    </div>
                    :""
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
