import React, { useEffect } from 'react';
import { Login } from './Login';
import './LoginPage.css';
import { useHistory } from 'react-router-dom';

export const LoginPage = ({ rute = '/' }) => {
  const history = useHistory();

  const redirect = () => history.push(rute);

  return (
    <div className='loginPageContainer'>
      <Login redirect={redirect} page={true} loginClass={'loginPage'} />
    </div>
  );
};
