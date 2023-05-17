import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Detail from "./pages/detail/Detail";
import Error from "./pages/error/Error";
import Registration from "./pages/registration/Registration";
import routes from "./constants/routes";
import Navbar from "./components/Presentational/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PRODUCTS} element={<Products />} />
        <Route path={routes.DETAILPAGE} element={<Detail />} />
        <Route path={routes.REGISTRATION} element={<Registration />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
