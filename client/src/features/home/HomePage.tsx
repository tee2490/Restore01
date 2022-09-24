import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useAppDispatch } from '../../app/store/configureStore';
import { setscreen } from './homeSlice';

export default function HomePage() {
  const dispatch =  useAppDispatch()

  useEffect(() => {
    dispatch(setscreen())
  
    return () => {
      dispatch(setscreen())
    }
  }, [dispatch])
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
        <Slider {...settings}>
         {[1,2,3,4,5].map(item=>(<img src={`https://picsum.photos/200/300?${Math.random()}`} height="500"/>))}
      </Slider>
    </div>
  );
}
