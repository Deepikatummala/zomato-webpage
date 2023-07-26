import React from "react"
import HeroSlider from "react-slick";

//components
import { NextArrow, PrevArrow } from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCarousal = () => {
  const settingsLg = {
  arrows:true,
  autoplay:true,
  centerMode:true,
  slidesToShow:1,
  slidesToScroll:1,
  centerPadding:"200px",
  infinite:true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
  }
  const settings = {
  arrows:true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
  };


const images =[
"https://images.unsplash.com/photo-1568201402596-ececfcf0ce4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60",
"https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60",
"https://plus.unsplash.com/premium_photo-1670659216601-720c61e0ada1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
"https://images.unsplash.com/photo-1604050170221-aed634784f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
"https://images.unsplash.com/photo-1623804991279-6b8db3145fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
]
return (
<>
<div className="lg:hidden">
   <HeroSlider {...settings}>
      {
      images.map((image) => (
      <div className="w-full h-80 md:80 py-3">
         <img src={image} alt="testing" className="w-full h-full rounded-md" />
      </div>
      ))
      }
   </HeroSlider>
</div>
<div className="hidden lg:block">
   <HeroSlider {...settingsLg}>
      {
      images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
         <img src={image} alt="testing" className="w-full h-full rounded-md" />
      </div>
      ))
      }
   </HeroSlider>
</div>
</>
);
};
export default HeroCarousal;
