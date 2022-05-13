import { Route, Routes } from 'react-router-dom';
import './App.css';

import Perfil from './Components/perfil/perfil';
// import Header from "./Components/Headers/Header";
// import { Footer } from "./Components/footer/Footer";
import { CreateProducts } from './Components/createProduct/CreateProducts';
import Home from './Components/Home/Home-article';

import { LoginPage } from './Components/Login/LoginPage';

import WishList from './Components/WishList/wishList';
import LayoutUser from './Components/Layout/LayoutUser';
import HomeAdmin from '../src/admin/pages/home/Home';
// import Login from '../src/admin/pages/login/Login';
import List from '../src/admin/pages/list/List';
// import Single from '../src/admin/pages/single/Single';
import New from '../src/admin/pages/new/New';
import ResponseMP from '../src/Components/ResponseMP/responseMP';

import { productInputs, userInputs } from './formSource';
import LayoutAdmin from './Components/Layout/LayoutAdmin';
import ListProduct from '../src/admin/pages/products/list/ListProduct';
import ListOrder from '../src/admin/pages/orders/listOrder/ListOrder';
import { FormRegister } from './Components/userForm/FormRegister';
import { Page404 } from './pages/Page404/Page404';

import {OrderDetails} from "../src/admin/pages/orders/OrderDetails/OrderDetails"
import { ProductDetails } from './admin/pages/products/ProductDetails/ProductDetails';
import { UserDetails } from './admin/pages/Users/UserDetails';

import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutUser />}>
          <Route index element={<Home />}></Route>
          <Route path='create' element={<CreateProducts />} />
          <Route path='userRegister' element={<FormRegister />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='myWishes' element={<WishList />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='ResponseMP' element={<ResponseMP />} />
        </Route>

        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          {/* <Route path='login' element={<Login />} /> */}
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<UserDetails />} />
            <Route
              path='new'
              element={<New inputs={userInputs} title='Agregar usuario' />}
            />
          </Route>
          <Route path='products'>
            <Route index element={<ListProduct />} />
            <Route path=':productId' element={<ProductDetails />} />
            <Route
              path='new'
              element={<CreateProducts />}
              // element={<New inputs={productInputs} title='Agregar producto' />}
            />
          </Route>
          <Route path='ordenes'>
            <Route index element={<ListOrder />} />
            <Route path=':productId' element={<OrderDetails />} />
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
