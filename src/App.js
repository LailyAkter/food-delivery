import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Menus from "./components/Menus/Menus";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import "./global.css";
import "./responsive.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Layout>
          <main>
              <div class="main-part">
                {/* <Breadcrumb/> */}
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/error" element={<Error/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/checkout" element={<Checkout/>}/>
                  <Route path="/order-complete" element={<OrderComplete/>}/>
                  <Route path="/track-order" element={<TrackOrder/>}/>
                  <Route path="/menu" element={<Menus/>}/>
                  <Route path="/menu/:id/:slug" element={<Menu/>}/>

                  {/* <Breadcrumb/> */}
                  {/* <Login/> */}
                  {/* <Register/> */}
                  {/* <Error/> */}
                  {/* <Contact/>
                  <Cart/>
                  <Checkout/>
                  <OrderComplete/>
                  <TrackOrder/> */}
                  {/* <Menus/>  */}
                  {/* <Menu/>  */}
                </Routes>
              </div>
          </main>
          {/* <Menus/> */}
        
      </Layout>
    </Router>
  );
}

export default App;
