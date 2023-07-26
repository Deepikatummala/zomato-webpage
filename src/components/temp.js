import React from "react";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";


import DefaultLayout from "../layouts/Default.layout";
function Temp () {
   return (
     <>

     <Routes>

       <Route path="/" element={<DefaultLayout />} />
     </Routes>
     <h1>this is a temp component</h1>
     </>
   )
}

export default Temp;
