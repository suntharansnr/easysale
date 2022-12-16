import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = (medias) => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      {
        medias['medias'].length > 0 && (
          medias['medias'].map((row, key) => (
            <div className="item">
              <img className="img-fluid" src={row ? `${process.env.REACT_APP_API_URL}/uploads/images/${row['media_name']}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" />
            </div>

          ))
        )
      }
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
