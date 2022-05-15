import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {getPaymentIdMP, getOrderMP, postOrderMP } from "../../redux/reducer/getResponseMP";
import jsPDF  from "jspdf";
import "./response.css";
//import 'jspdf-autotable
//npm i jspdf-autotable
//npm install nodemailer

const ResponseMP = () => {
          const querystring = new URLSearchParams(useLocation().search)
          const payment_id =  querystring.get('payment_id')
          const dispatch = useDispatch();
          const [state, setState] = useState([])
            
          let paymentIdOrdenEl = useSelector(state => state.paymentOrderEG.paymentId);
          let getOrderMPEl     = useSelector(state => state.paymentOrderEG.paymentOrder);
          let getOrderAllEl    = useSelector(state => state.paymentOrderEG.OrdenCompra);
          useEffect(() => {
            dispatch(getPaymentIdMP(payment_id));
            dispatch(getOrderMP(getOrderMPEl));        
            dispatch(postOrderMP());        
            setState(getOrderMPEl)
          }, []);
         // console.log(getOrderMPEl)
          let subTotal      = 0
          let totalPagar    = 0
          let descuentoItem = 0
          if(Object.keys(getOrderMPEl).length>0) genPDF(getOrderAllEl)        
    return ( 
        Object.keys(getOrderMPEl).length>0 ?
    
        <div id="content" class="page-content container" style = {{background:'white', height:'800px'}}>
                <div class="page-header text-blue-d2">
                    <h1 class="page-title text-secondary-d1">
                    ShopBag
                    </h1>
                </div>
                <div class="container px-0">
                    <div class="row mt-4">
                       <div class="col-12 col-lg-12">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="text-center text-150">
                                            <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                                            <span class="text-default-d3">Orden Compra # {getOrderAllEl?.orderBd?.orderNumber}</span>
                                        </div>
                                    </div>
                                </div>

                        <hr className="row brc-default-l1 mx-n1 mb-4" />

                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Para:</span>
                                    <span className="text-600 text-110 text-blue align-middle"> {getOrderMPEl?.user?.firstName} {getOrderMPEl?.user?.lastName}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Dirección:</span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl?.user?.address}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Teléfono:</span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl?.user?.phone}</span> 
                                </div>
                                <div>
                                    <span className="text-sm text-grey-m2 align-middle">Email: </span>
                                    <span className="text-600 text-110 text-blue align-middle">{getOrderMPEl?.user?.email}</span> 
                                </div>
                            </div>

                            <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                <hr class="d-sm-none" />
                                <div class="text-grey-m2">
                                    <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125"></div>
                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Orden #:</span>{getOrderAllEl?.orderBd?.orderNumber}</div>
                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Fecha:
                                    </span>{getOrderAllEl?.orderBd?.createdAt.substr(8,2)}/{getOrderAllEl?.orderBd?.createdAt.substr(5,2)}/{getOrderAllEl?.orderBd?.createdAt.substr(0,4)}
                                    </div>
                                    {/* //2022-05-15 13:31:26.18-04 */}
                                    <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> 
                                    <span class="badge badge-warning badge-pill px-25">{getOrderAllEl?.orderBd?.status}</span></div>
                                </div>
                             </div>


                           </div>

                           <div className="row text-600 text-white bgc-default-tp1 py-25">
                                <div className="d-none d-sm-block col-1">#</div>
                                <div className="col-9 col-sm-5">Descripción</div>
                                <div className="d-none d-sm-block col-4 col-sm-2">Cant.</div>
                                <div className="d-none d-sm-block col-sm-2">Unit.Precio</div>
                                <div className="col-2">Monto</div>
                            </div>

                        <div class="mt-4">           

                            <div className="text-95 text-secondary-d3">
                                    {
                                    getOrderMPEl?.shoppingCart?.map((elem ) => {
                                        subTotal      = subTotal      + elem.subTotal
                                        totalPagar    = totalPagar    + elem.totalPage
                                        descuentoItem = descuentoItem + elem.discountItem
                                    return(
                                        
                                            <div key={elem.title} className="row mb-2 mb-sm-0 py-25">
                                                <div className="d-none d-sm-block col-1"></div>
                                                <div className="col-9 col-sm-5">{elem.title}</div> 
                                                <div className="d-none d-sm-block col-2">{elem.quantity}</div>
                                                <div className="d-none d-sm-block col-2 text-95">{elem.price}</div>
                                                <div className="col-2 text-secondary-d2">{elem.subTotal}</div>
                                            </div>
                                    )})
                                    } 
                           </div>
                        </div>
                            
                        {/*Totales Compra*/}
                <div class="row mt-3">
                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">

                            
                            <div class="row my-2">
                                <div class="col-7 text-right">Sub-Total $</div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">{subTotal}</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Descuento $
                                </div>
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">{descuentoItem}</span>
                                </div>
                            </div>

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">Total a Pagar $</div>
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
        :<></>
        
    );
};
export default ResponseMP

const genPDF = async (getOrderAllEl) => {
        const jsPDF1 = new jsPDF();
        var doc = new jsPDF('l', 'mm', [1200, 1810]);
        var pdfjs =  document.getElementById('content');
        doc.html(pdfjs, {callback: function(doc) {doc.save(`OrdenCompra#${getOrderAllEl?.orderBd?.orderNumber}.pdf`)}}) //, 
        //x: 10,y: 10});
        //doc.output('dataurlnewwindow');
}
