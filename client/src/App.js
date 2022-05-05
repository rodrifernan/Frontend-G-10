import { Route, Routes } from "react-router-dom";
import "./App.css";

import Perfil from "./Components/perfil/perfil";
import Form from "./Components/Form/Form";
// import Header from "./Components/Headers/Header";
// import { Footer } from "./Components/footer/Footer";
import { CreateProducts } from "./Components/createProduct/CreateProducts";
import Home from "./Components/Home/Home-article";
import Carrito from "./Components/Carrito/Carrito";
import { LoginPage } from "./Components/Login/LoginPage";

import WishList from "./Components/WishList/wishList";
import LayoutUser from "./Components/Layout/LayoutUser";

function App() {
  return (
    <>
      <Routes>

      <Route path="/" element={<LayoutUser />}>
          
          <Route index element={<Home />}></Route>
          <Route path="create" element={<CreateProducts />} />
          <Route path="registro" element={<Form />} />
          <Route path="carrito" element={<Carrito />}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="myWishes" element={<WishList />}/>
          <Route path="perfil" element={<Perfil />}/>
        </Route>




      </Routes>


{/* 
      <Route exact path="/login" component={LoginPage}></Route>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/myWishes" component={WishList}></Route>
      <Route exact path="/perfil" component={Perfil}></Route>
      <Route path="/create" component={CreateProducts} />
      <Route path="/registro" component={Form} />
      <Route path="/carrito" component={Carrito}></Route>
      <Route path="/" component={Footer}></Route> */}
    </>
  );
}

export default App;
