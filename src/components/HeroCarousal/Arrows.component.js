import React from "react";

export const NextArrow = (props) => {
  return (
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "black"}}
    onClick={props.onClick}

     />
    </>
  );
//const {className, style, onclick}=props;


};

 export const PrevArrow = (props) => {
   return (
     <>
     <div     className={props.className}
         style={{ ...props.style, backgroundColor: "black"}}
         onClick={props.onClick}
          />
     </>
   );

};
//task to style arrow.
