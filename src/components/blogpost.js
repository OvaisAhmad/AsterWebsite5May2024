import { useTranslation } from "next-i18next";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "react-responsive";
const BlogPost = () => {

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
    autoplaySpeed: 3000,
    arrows: false,
  };

  const { t } = useTranslation("");
  return (
    <div className="healthlibrarycontainer sitefont topbar_wrapper relative w-full py-[50px] px-0 box-border items-center justify-center gap-[50px] text-center text-37xl text-aster-blue font-heading-01 lg:flex-col lg:ps-8 lg:pe-8 lg:box-border md:w-auto md:[align-self:unset] md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4 sm:box-border">
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
        marginBottom: "50px",
        letterSpacing: "inherit",
        fontSize: "27px",
        fontWeight: "500",
        color: "#144d92",
        textAlign: "center",
      }}
      >
        {t("health.Health Library")}
      </h3>
      <Slider {...settings} className="blogpost_container flex flex-row items-center justify-center gap-[20px] text-start text-xl text-white lg:flex-row lg:ps-0 lg:pe-0 lg:box-border md:flex-row sm:self-stretch sm:w-auto sm:flex-col sm:ps-0 sm:pe-0 sm:box-border">
        <div className="blogpost_blwidth blogpost_blmarginbottom w-[433.33px] flex flex-col items-start 
              justify-start gap-[35px] sm:self-stretch sm:w-full"  style={{ backgroundColor: "#f8f8f8", borderRadius: 20 }}>
          <img style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            className="blogpost_blwidth w-full self-stretch relative max-w-full overflow-hidden h-[280px] shrink-0 object-cover"
            alt=""
            src="/rectangle-75@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] p-y[50px]" style={{ margin: "25px 0px 25px 0px" }}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="font_16 bg-aster-blue overflow-hidden flex flex-row py-[5px] px-2.5 items-center justify-center">
                <div className="relative leading-[132%] font-medium">
                  {t("health.Dietetics")}
                </div>
              </div>
              <div className="library_header relative text-5xl font-semibold font-work-sans text-aster-blue inline-block">
                {t("health.Eat Right to Beat Tuberculosis")}
              </div>
            </div>
            <div className="library_content self-stretch relative leading-[132%] font-medium text-paragraph-text">
              {t("health.Getting the right nutrition can help speed treatment and prevention includes healthy immunity.")}
            </div>
          </div>
        </div>
        <div className="blogpost_blwidth blogpost_blmarginbottom w-[433.33px] flex flex-col items-start 
              justify-start gap-[35px] sm:self-stretch sm:w-full"  style={{ backgroundColor: "#f8f8f8", borderRadius: 20 }}>
          <img style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            className="blogpost_blwidth w-full self-stretch relative max-w-full overflow-hidden h-[280px] shrink-0 object-cover"
            alt=""
            src="/rectangle-751@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]" style={{ margin: "25px 0px 25px 0px" }}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="font_16 bg-aster-blue overflow-hidden flex flex-row py-[5px] px-2.5 items-center justify-center">
                <div className="relative leading-[132%] font-medium">
                  {t("health.Pregnancy Care")}
                </div>
              </div>
              <div className="library_header relative text-5xl font-semibold font-work-sans text-aster-blue inline-block">
                {t("health.Work It Out – Bump Approved Fitness")}
              </div>
            </div>
            <div className="library_content  self-stretch relative leading-[132%] font-medium text-paragraph-text">
              {t("health.work desc")}
            </div>
          </div>
        </div>
        <div className="blogpost_blwidth blogpost_blmarginbottom w-[433.33px] flex flex-col items-start 
              justify-start gap-[35px] sm:self-stretch sm:w-full"  style={{ backgroundColor: "#f8f8f8", borderRadius: 20 }}>
          <img style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            className="blogpost_blwidth w-full self-stretch relative max-w-full overflow-hidden h-[280px] shrink-0 object-cover"
            src="/rectangle-752@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]" style={{ margin: "25px 0px 25px 0px" }}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="font_16 bg-aster-blue overflow-hidden flex flex-row py-[5px] px-2.5 items-center justify-center">
                <div className="relative leading-[132%] font-medium">
                  {t("health.Pregnancy Care")}
                </div>
              </div>
              <div className="library_header relative text-5xl font-semibold font-work-sans text-aster-blue inline-block">
                {t("health.Can Yoga Cure Acid Reflux?")}
              </div>
            </div>
            <div className="library_content  self-stretch relative leading-[132%] font-medium text-paragraph-text">
              {t("health.yoga desc")}
            </div>
          </div>
        </div>
        <div className="blogpost_blwidth blogpost_blmarginbottom w-[433.33px] flex flex-col items-start 
              justify-start gap-[35px] sm:self-stretch sm:w-full"  style={{ backgroundColor: "#f8f8f8", borderRadius: 20 }}>
          <img style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            className="blogpost_blwidth w-full self-stretch relative max-w-full overflow-hidden h-[280px] shrink-0 object-cover"
            alt=""
            src="/rectangle-751@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]" style={{ margin: "25px 0px 25px 0px" }}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="font_16 bg-aster-blue overflow-hidden flex flex-row py-[5px] px-2.5 items-center justify-center">
                <div className="relative leading-[132%] font-medium">
                  {t("health.Pregnancy Care")}
                </div>
              </div>
              <div className="library_header relative text-5xl font-semibold font-work-sans text-aster-blue inline-block">
                {t("health.Work It Out – Bump Approved Fitness")}
              </div>
            </div>
            <div className="library_content  self-stretch relative leading-[132%] font-medium text-paragraph-text">
              {t("health.work desc")}
            </div>
          </div>
        </div>
      </Slider>
      <div style={{ marginTop: 60 }}>
        <Link href="/blog">
          <div className="button_control" style={{ margin: "0px auto" }}>
            <b className="flex-1 relative leading-[64px]">{t("health.View All")}</b>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default BlogPost;
