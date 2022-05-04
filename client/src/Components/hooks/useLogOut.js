import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/reducer/login';
export const useLogOut = () => {
  const dispatch = useDispatch();
  const out = ()=> {
    dispatch(logOut())
  }

  return out;
};
