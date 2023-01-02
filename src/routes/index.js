import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreProvider from "../context/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const Root = () => {

    return (
      
      <BrowserRouter>
      <StoreProvider>
        <Routes>
          <RoutesPrivate path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </StoreProvider>
      </BrowserRouter>
    );
}
export default Root;