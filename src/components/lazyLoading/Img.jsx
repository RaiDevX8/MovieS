import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import React from 'react'

const Img = ({src,classname}) => {
  return (
   <LazyLoadImage

    className={classname || ""}
    alt=''
    effect="blur"
    src={src}
   />


  )
}

export default Img
