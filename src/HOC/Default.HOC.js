// HOC-- It transforms one component into another components
// Adding additional functionalities to the excisting Components



import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = ({ element: Element , ...rest }) => {
  //component
  //props -> path
  return (
    <>
    <Routes>
    <Route
    {...rest}

     component = {(props) => (
       <DefaultLayout>
       <Element {...props} />
       <Routes>

         <Route path="/" element={<DefaultLayout />} />
       </Routes>
       </DefaultLayout>
     )

     }
    />
    </Routes>
    </>
  )
};


export default DefaultHOC;
