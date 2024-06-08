/*/
 *  *
 *  *   ************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi *  CZ IT-Design Studio GmbH. *
 *  *   ************************************************************************
 *  *
/*/


import { useState } from "react";
import FsLightbox from "fslightbox-react";
import style from "./home.module.css"
import { imgGallery } from "../../utils/constants"
import { imgGalleryMobile } from "../../utils/constants"
import { useMediaQuery } from "react-responsive"


const PicturesLightbox = () => {
  // Check whether the device is mobile and screen less than 768px
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const imagesToUse = isMobile ? imgGalleryMobile : imgGallery

  const [toggler, setToggler] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: any) => {
    setCurrentImageIndex(index);
    setToggler(prev => !prev);  // Switch state to reopen FsLightbox
  };

  // Defining groups of images by columns !Order is IMPORTANT!
  let columns = [
    [0, 1, 2, 3, 5],
    [8, 9, 10, 22, 6, 18],
    [13, 14, 15, 16, 17, 4],
    [20, 21, 23, 12, 19, 11]
  ];

  if (isMobile) {
    columns = [[0, 1, 2, 3, 4]];
  }

  return (
    <div className={`${style.row}`}>

      <div className={style.row}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={style.column}>
            {column.map(index => (
              <img
                className={style.picture}
                key={index}
                src={imagesToUse[index]}
                style={{ width: "100%" }}
                alt={index.toString()}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        ))}
        <FsLightbox
          toggler={toggler}
          sources={imagesToUse}
          slide={currentImageIndex + 1}
        />
      </div>

    </div>
  )
}

export default PicturesLightbox

