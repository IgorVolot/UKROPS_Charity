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
          <img className="d-block mx-auto border border-secondary shadow p-2" src={item} alt={`Dr.Leo ${index}`} />
        </Carousel.Item>)
      } </Carousel>
    </>
  )
}

export default ImgCarousel
