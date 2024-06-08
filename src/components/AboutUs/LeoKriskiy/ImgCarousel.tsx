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
import styles from "./imgCarousel.module.css"

const ImgCarousel = () => {
  return (
    <>
      <div className={``}>
        <Carousel className={`${styles.carousel} slide carousel-fade`}> {leoCarouselImage.map((item, index) =>
          <Carousel.Item key={index} >
            <img className={`${styles.carouselImg} d-block mx-auto border border-secondary shadow p-2`} src={item} alt={`Dr.Leo ${index}`} />
          </Carousel.Item>)
        } </Carousel>
      </div>

    </>
  )
}

export default ImgCarousel
