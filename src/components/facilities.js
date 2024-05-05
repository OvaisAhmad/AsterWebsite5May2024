import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const Facilities = () => {
  const { t } = useTranslation("");
  
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const isSmallerScreen = useMediaQuery({ maxWidth: 479 });
  const isMediumScreen = useMediaQuery({ minWidth: 480, maxWidth: 720 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallerScreen ? 1 : (isMediumScreen ? 2 : (isMobile ? 3 : 3)),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    
      <div className=" sitefont  meetspecialistcontainer self-stretch flex flex-col items-center justify-start gap-[70px] mt-[50px]">
        <div className="topbar_wrapper w-full  self-stretch flex flex-col items-center justify-start gap-[20px]"
        >
          <h3 style={{
            boxSizing: "border-box",
            textTransform: "inherit",
            textAlign: "inherit",
            fontStyle: "inherit",
            margin: "0px",
            fontSize: "inherit",
            lineHeight: "inherit",
            fontWeight: "inherit",
            color: "inherit",
            fontFamily: "inherit",
            marginTop: "0px",
            marginBottom: "0px",
            letterSpacing: "inherit",
            fontSize: "27px",
            fontWeight: "500",
            color: "#144d92",
            textAlign: "center",
          }}
          >
            {t("hero.Exceptional Facilities")}
          </h3>

          <div className="meetspecialistcontainer network_desc relative text-3xl 
          leading-[132%] text-grey flex items-center justify-center
           md:self-stretch md:w-auto" style={{ marginBottom :30 ,textAlign : "center"}}>
            {t("hero.facilities description")}
          </div>
        </div>
        

        <div className="facility_wrapper h-[300px]" style={{overflow:"hidden",marginBottom:50}}>
          <Slider {...settings}>
            <div className="flty_img_container">
              <img src="/facilities_image_02.jpg" className="splt_img" alt="" />
            </div>
            <div className="flty_img_container">
              <img src="/facilities_image_01.jpg" className="splt_img" alt="" />
            </div>
            <div className="flty_img_container">
              <img src="/facilities_image_03.jpg" className="splt_img" alt="" />
            </div>
            <div className="flty_img_container">
              <img src="/facilities_image_02.jpg" className="splt_img" alt="" />
            </div>
            <div className="flty_img_container">
              <img src="/facilities_image_01.jpg" className="splt_img" alt="" />
            </div>
          </Slider>
        </div>
      </div>


  );
};

export default Facilities;
