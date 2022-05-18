import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useEffect, useState } from 'react';
import { sendNotification } from '../../../utils/notifications';

const Widget = ({ type, socket }) => {
  const [metric, setMetric] = useState({ amount: 0 });

  let data;

  useState(async () => {
    sendNotification(type === 'profits' ? 'salesQuantity' : type).then(
      ({ data }) => {
        if (type === 'profits') {
          setMetric({ amount: (data.response * 0.02) });
        } else setMetric({ amount: data.response });
      }
    );
  }, []);
  //   useEffect(async () => {
  //   sendNotification(type === 'profits' ? 'salesQuantity' : type).then(
  //     ({ data }) => {
  //       if (type === 'profits') {
  //         setMetric({ amount: (data.response * 0.02).toFixed(2) });
  //       } else setMetric({ amount: data.response });
  //     }
  //   );
  // }, []);



  //temporary
  let diff = 20;

  switch (type) {
    case 'usersQuantity':
      data = {
        title: 'Usuarios',
        isMoney: false,
        // link: 'Ver mas',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              width: '2em',
              height: '2em'
            }}
          />
        ),
      };

      socket.on('usersQuantity', data => {
        setMetric(state => ({ ...state, amount: data }));
      });

      break;
    case 'ordersQuantity':
      data = {
        title: 'Ordenes',
        isMoney: false,
        // link: 'Ver mas',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
              width: '2em' ,
              height: '2em'
            }}
          />
        ),
      };

      socket.on('ordersQuantity', data => {
        setMetric(state => ({ ...state, amount: data }));
      });

      break;
    case 'salesQuantity':
      data = {
        title: 'Ventas',
        isMoney: true,
        // link: 'Ver mas',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green', width: '2em',height: '2em' }}
          />
        ),
      };

      socket.on('salesQuantity', data => {
        setMetric(state => ({ ...state, amount: data }));
      });

      break;
    case 'profits':
      data = {
        title: 'Ganancias',
        isMoney: true,
        // link: 'Ver mas',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
              width: '2em' ,
              height: '2em'
            }}
          />
        ),
      };

      socket.on('salesQuantity', data => {
        setMetric(state => ({ ...state, amount: (data * 0.02) }));
      });

      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {metric.amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        {/* <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
