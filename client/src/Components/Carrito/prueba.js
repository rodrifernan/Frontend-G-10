import React from 'react';

const Mercado = () => {
  // const

  // const mercadoPago = async () => {
  //   const data = await fetch('http://localhost:3001/api/checkout?userId=''')
  //     .then(response => {
  //       debugger;
  //     })
  //     .catch(response => {
  //       debugger;
  //     });
  // };

  const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2FjYjNjLTRlZjMtNGQ3Mi1iYmYzLWQ2NjE4ZTQ1YTQ1YyIsImlhdCI6MTY1MjA1OTIzMSwiZXhwIjoxNjUyMTQ1NjMxfQ.0EdnQRMre6-9nGhrCQkVhTepeBk2sm53TRSXLdLyJR4';

  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-body  p-0' style={{ height: '90vh' }}>
              <iframe
                src={`http://localhost:3001/api/checkout/${userToken}`}
                style={{ width: '100%', height: '90vh' }}
                title='mercadoPago'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mercado