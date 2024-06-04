/*
 * /
 *  *  *
 *  *  *   ************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *  *   ************************************************************************
 *  *  *
 * /
 */


import { Carousel } from "react-bootstrap"
import { leoCarouselImage } from "../../../utils/constants"
import "./imgCarousel.css"

const ImgCarousel = () => {
  return (
    <>
      <Carousel className="carousel slide carousel-fade"> {leoCarouselImage.map((item, index) =>
        <Carousel.Item key={index} >
          <img className="d-block mx-auto" src={item} alt={`Dr.Leo ${index}`} style={{boxShadow: "0.2em 0.2em 0.1em rgba(80, 78, 73, 0.3)"}}/>
        </Carousel.Item>)
      } </Carousel>
    </>
  )
}

export default ImgCarousel
