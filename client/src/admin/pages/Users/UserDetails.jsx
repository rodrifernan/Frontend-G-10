import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./UserDetails.css"
import { useParams } from 'react-router-dom'

import { allUserRegisters } from '../../../redux/reducer/getAllUsers';


export const UserDetails = () => {

    


  
    //trae todas las ordenes
    let userAll = useSelector(allUserRegisters);
    //filtro por el numero de orden
    const {userId}=useParams()
    console.log(userId);
    const filterUserbyID = userAll.filter(e=>e.id===userId)
    console.log(filterUserbyID[0]);

    const [data, setData] = useState(filterUserbyID[0])
  
  
    return (

        <div className='userDetail__container'>
           
            <div className='userDetail__container-list'>
            <div className="orderDetail__header">
                <h1>Detalle del usuario: {data.userName}</h1>
            </div>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>ID</h3>
                    <div className='list__item'>{data.id} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Username</h3>
                    <div className='list__item'>{data.userName} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>ID personal</h3>
                    <div className='list__item'>{data.idPersonal} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Fecha de creacion</h3>
                    <div className='list__item'>{data.createdAt} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Email</h3>
                    <div className='list__item'>{data.email} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Nombre completo</h3>
                    <div className='list__item'>{data.firstName} {data.lastName} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Telefono</h3>
                    <div className='list__item'>{data.phone} </div>
                </div>
                <hr className='divider'/>

                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Baneado</h3>
                    <div className='list__item'>{data.banned===false? "No":"Si"} </div>
                </div>
                <hr className='divider'/>
                <div className='userDetail__container-item'>
                    <h3 className='title__list'>Rol</h3>
                    <div className='list__item'>{data.role.title} </div>
                </div>
                
                


               
           
         
                
              
            </div>
        </div>
  )
}
