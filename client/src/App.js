import { Route, Routes } from 'react-router-dom';
import './App.css';

import Perfil from './Components/perfil/perfil';
import { FormRegister } from './Components/UserForm/FormRegister';
// import Header from "./Components/Headers/Header";
// import { Footer } from "./Components/footer/Footer";
import { CreateProducts } from './Components/createProduct/CreateProducts';
import Home from './Components/Home/Home-article';
import Carrito from './Components/Carrito/Carrito';
import { LoginPage } from './Components/Login/LoginPage';

import WishList from './Components/WishList/wishList';
import LayoutUser from './Components/Layout/LayoutUser';
import HomeAdmin from '../src/admin/pages/home/Home';
import Login from '../src/admin/pages/login/Login';
import List from '../src/admin/pages/list/List';
import Single from '../src/admin/pages/single/Single';
import New from '../src/admin/pages/new/New';

import { productInputs, userInputs } from './formSource';
import LayoutAdmin from './Components/Layout/LayoutAdmin';
import ListProduct from '../src/admin/pages/products/list/ListProduct';
import ListOrder from '../src/admin/pages/orders/listOrder/ListOrder';

import { Page404 } from './pages/Page404/Page404';

import { Mercado } from './Components/Mercado/Mercado'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutUser />}>
          <Route index element={<Home />}></Route>
          <Route path='create' element={<CreateProducts />} />
          <Route path='userRegister' element={<FormRegister />} />
          <Route path='carrito' element={<Carrito />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='myWishes' element={<WishList />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='pagar' element={<Mercado />} />
        </Route>

        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={userInputs} title='Agregar usuario' />}
            />
          </Route>
          <Route path='products'>
            <Route index element={<ListProduct />} />
            <Route path=':productId' element={<Single />} />
            <Route
              path='new'
              element={<New inputs={productInputs} title='Agregar producto' />}
            />
          </Route>
          <Route path='ordenes'>
            <Route index element={<ListOrder />} />
            <Route path=':productId' element={<Single />} />
            {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Agregar producto" />}
              /> */}
          </Route>
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
