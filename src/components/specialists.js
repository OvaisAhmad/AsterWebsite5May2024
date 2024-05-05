import { useTranslation } from "next-i18next";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const Specialists = ({ post }) => {

  const isMobile = useMediaQuery({ maxWidth: 980 });
  const isSmallerScreen = useMediaQuery({ maxWidth: 479 });
  const isMediumScreen = useMediaQuery({ minWidth: 480, maxWidth: 720 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallerScreen ? 1 : (isMediumScreen ? 2 : (isMobile ? 3 : 4)),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };


  const { t } = useTranslation("");

  const [selectedDoctors, setSelectedDoctors] = useState([]);

  useEffect(() => {
    const doctorsWithImage = post.nodes?.filter(doctor => doctor.featuredImage?.node.sourceUrl);
    const shuffledDoctors = doctorsWithImage?.sort(() => Math.random() - 0.5);
    const selected = shuffledDoctors?.slice(0, 8);
    setSelectedDoctors(selected);
  }, [post]);

  return (
    <div className="sitefont topbar_wrapper w-full meetspecialistcontainer topbar_wrapper py-[75px]">
      <div style={{ marginBottom: "50px" }} >
        <h3
          style={{
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
          {t("hero.Meet our Specialists")}
        </h3>
      </div>
      <div>
        <Slider {...settings} className="h-[450px]">
          {
            selectedDoctors?.map((doctor, index) => (
              <div key={index}>
                <div>
                  <div className="splt_img_container">
                    <img src={doctor.featuredImage.node.sourceUrl} className="splt_img" alt="" />
                  </div>
                  <div className="sitefont py-[20px]" style={{ width: 240 }}>
                    <div className="splt_usr_name">{doctor.doctorFields.doctorName}</div>
                    <div className="splt_usr_designation">
                      {doctor.doctorFields.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}

        </Slider>
        <div className="splst_btn_container">
          <Link href="/appointment" className="link-overlay">
            <button className="splst_btn cursor-pointer">{t("hero.View all Doctors")}</button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Specialists;
