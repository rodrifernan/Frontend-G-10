import React, { useRef, useEffect } from 'react';

import FacebookLogin from '@greatsumini/react-facebook-login';

export const LoginFromFacebook = () => {
  const buttonRef = useRef();

  const onSuccess = res => {
    console.log(res);
  };

  const onFailure = res => {
    console.log(res);
  };

  useEffect(() => {
    buttonRef.current.lastChild.innerText = 'Ingresar con Facebook';
  }, []);

  return (
    <div
      ref={buttonRef}
      style={{
        width: '80%',
        height: '2.6rem',
        backgroundColor: '#4267b2',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i
        className='fab fa-facebook'
        style={{
          fontSize: '25px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      ></i>
      <FacebookLogin
        appId='1727626107587181'
        onSuccess={onSuccess}
        onFail={onFailure}
        onProfileSuccess={response => {
          console.log('Get Profile Success!', response);
        }}
        style={{
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: '1rem',
          padding: '10px 10px 10px 0',
          border: 'none',
          fontWeight: 'bold'
        }}
      />
    </div>
  );
};
