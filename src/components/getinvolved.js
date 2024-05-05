import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";



const GetInvolved = () => {

  const isMobile = useMediaQuery({ maxWidth: 980 });
const isSmallerScreen = useMediaQuery({ maxWidth: 479 });
const isMediumScreen = useMediaQuery({ minWidth: 480, maxWidth: 720 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallerScreen ? 1 : (isMediumScreen ? 2 : (isMobile ? 3 : 2)),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const { t } = useTranslation("");
  const router = useRouter();
  const locale = router.locale;



  return (
    <section className="sec-default : sec-teaser-list" role="contentinfo" tabIndex="-1">
      <div className="getinvolvedcontainer topbar_wrapper  lg:ps-3 lg:pe-3 
      lg:box-border md:ps-8 md:pe-8 md:box-border sm:ps-4
       sm:pe-4 sm:box-border mx-auto 
      teaser-list container">
        <div
          className="section-title : text-center aos-init aos-animate"
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            fontFamily: '"Ivy Journal", sans-serif',
            pointerEvents: "auto",
            marginBottom: "44px",
            transitionTimingFunction: "ease",
            transitionDuration: "1s",
            transitionProperty: "opacity, transform, -webkit-transform",
            opacity: 1,
            transform: "none",
          }}
        >
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              padding: "0px",
              display: "block",
              width: "100%",
              maxWidth: "1106px",
              paddingLeft: "8px",
              paddingRight: "8px",
              fontSize: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              fontFamily: "inherit",
              letterSpacing: "inherit",
              margin: "0px auto",
            }}
          >
            <div
              className="title : title--h4"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontWeight: "inherit",
                fontFamily: "inherit",
                letterSpacing: "inherit",
                color: "rgb(20, 77, 146)",
                fontSize: "24px",
                lineHeight: 1.54,
              }}
            >
              <h4
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
                }}
              >
                Get Involved
              </h4>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="teaser-slider">
            <a
              href="#"
              target="_self"
              title="BREAST <br> CANCER <br> AWARENESS"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                color: "inherit",
              }}
            >
              <div
                className="teaser-card : p-relative text--blue"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  padding: "26px 30px",
                  maxWidth: "529px",
                  minHeight: "384px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="teaser-card__image : cover-bg"
                  style={{
                    boxSizing: "border-box",
                    height: "100%",
                    left: "0px",
                    position: "absolute",
                    width: "100%",
                    top: "0px",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "transform 0.4s ease 0s",
                    backgroundImage:
                      'url("/teaser_01.jpg")',
                  }}
                />
                <div
                  className="teaser-card__date : text--13 text--white text--blk"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "13px",
                    lineHeight: 1,
                    letterSpacing: "0.65px",
                    fontWeight: 900,
                    color: "rgb(255, 255, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "24px",
                    top: "23px",
                    height: "76px",
                    width: "76px",
                    backgroundColor: "rgb(0, 179, 140)",
                    zIndex: 4,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      color: "inherit",
                    }}
                  >
                    OCT
                    <strong
                      style={{
                        boxSizing: "border-box",
                        fontWeight: 700,
                        fontSize: "24px",
                        display: "block",
                        fontFamily: "Lato, sans-serif",
                        color: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      18
                    </strong>
                  </p>
                </div>
                <div
                  className="teaser-card__text : text--23"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "23px",
                    lineHeight: 1.13,
                    position: "relative",
                    maxWidth: "138px",
                    fontWeight: 600,
                    zIndex: 4,
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    BREAST <br style={{ boxSizing: "border-box" }} />{" "}
                    CANCER <br style={{ boxSizing: "border-box" }} />{" "}
                    AWARENESS
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="teaser-slider">

            <a
              href="#"
              target="_self"
              title="BREAST <br> CANCER <br> AWARENESS"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                color: "inherit",
              }}
            >
              <div
                className="teaser-card : p-relative text--blue"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  padding: "26px 30px",
                  maxWidth: "529px",
                  minHeight: "384px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="teaser-card__image : cover-bg"
                  style={{
                    boxSizing: "border-box",
                    height: "100%",
                    left: "0px",
                    position: "absolute",
                    width: "100%",
                    top: "0px",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "transform 0.4s ease 0s",
                    backgroundImage:
                      'url("/teaser_01.jpg")',
                  }}
                />
                <div
                  className="teaser-card__date : text--13 text--white text--blk"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "13px",
                    lineHeight: 1,
                    letterSpacing: "0.65px",
                    fontWeight: 900,
                    color: "rgb(255, 255, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "24px",
                    top: "23px",
                    height: "76px",
                    width: "76px",
                    backgroundColor: "rgb(0, 179, 140)",
                    zIndex: 4,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      color: "inherit",
                    }}
                  >
                    OCT
                    <strong
                      style={{
                        boxSizing: "border-box",
                        fontWeight: 700,
                        fontSize: "24px",
                        display: "block",
                        fontFamily: "Lato, sans-serif",
                        color: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      18
                    </strong>
                  </p>
                </div>
                <div
                  className="teaser-card__text : text--23"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "23px",
                    lineHeight: 1.13,
                    position: "relative",
                    maxWidth: "138px",
                    fontWeight: 600,
                    zIndex: 4,
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    BREAST <br style={{ boxSizing: "border-box" }} />{" "}
                    CANCER <br style={{ boxSizing: "border-box" }} />{" "}
                    AWARENESS
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="teaser-slider">

            <a
              href="#"
              target="_self"
              title="BREAST <br> CANCER <br> AWARENESS"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                color: "inherit",
              }}
            >
              <div
                className="teaser-card : p-relative text--blue"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  padding: "26px 30px",
                  maxWidth: "529px",
                  minHeight: "384px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="teaser-card__image : cover-bg"
                  style={{
                    boxSizing: "border-box",
                    height: "100%",
                    left: "0px",
                    position: "absolute",
                    width: "100%",
                    top: "0px",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "transform 0.4s ease 0s",
                    backgroundImage:
                      'url("/teaser_01.jpg")',
                  }}
                />
                <div
                  className="teaser-card__date : text--13 text--white text--blk"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "13px",
                    lineHeight: 1,
                    letterSpacing: "0.65px",
                    fontWeight: 900,
                    color: "rgb(255, 255, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "24px",
                    top: "23px",
                    height: "76px",
                    width: "76px",
                    backgroundColor: "rgb(0, 179, 140)",
                    zIndex: 4,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      color: "inherit",
                    }}
                  >
                    OCT
                    <strong
                      style={{
                        boxSizing: "border-box",
                        fontWeight: 700,
                        fontSize: "24px",
                        display: "block",
                        fontFamily: "Lato, sans-serif",
                        color: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      18
                    </strong>
                  </p>
                </div>
                <div
                  className="teaser-card__text : text--23"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "23px",
                    lineHeight: 1.13,
                    position: "relative",
                    maxWidth: "138px",
                    fontWeight: 600,
                    zIndex: 4,
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    BREAST <br style={{ boxSizing: "border-box" }} />{" "}
                    CANCER <br style={{ boxSizing: "border-box" }} />{" "}
                    AWARENESS
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="teaser-slider">

            <a
              href="#"
              target="_self"
              title="BREAST <br> CANCER <br> AWARENESS"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                color: "inherit",
              }}
            >
              <div
                className="teaser-card : p-relative text--blue"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  padding: "26px 30px",
                  maxWidth: "529px",
                  minHeight: "384px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="teaser-card__image : cover-bg"
                  style={{
                    boxSizing: "border-box",
                    height: "100%",
                    left: "0px",
                    position: "absolute",
                    width: "100%",
                    top: "0px",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transition: "transform 0.4s ease 0s",
                    backgroundImage:
                      'url("/teaser_01.jpg")',
                  }}
                />
                <div
                  className="teaser-card__date : text--13 text--white text--blk"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "13px",
                    lineHeight: 1,
                    letterSpacing: "0.65px",
                    fontWeight: 900,
                    color: "rgb(255, 255, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "24px",
                    top: "23px",
                    height: "76px",
                    width: "76px",
                    backgroundColor: "rgb(0, 179, 140)",
                    zIndex: 4,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      color: "inherit",
                    }}
                  >
                    OCT
                    <strong
                      style={{
                        boxSizing: "border-box",
                        fontWeight: 700,
                        fontSize: "24px",
                        display: "block",
                        fontFamily: "Lato, sans-serif",
                        color: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      18
                    </strong>
                  </p>
                </div>
                <div
                  className="teaser-card__text : text--23"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "23px",
                    lineHeight: 1.13,
                    position: "relative",
                    maxWidth: "138px",
                    fontWeight: 600,
                    zIndex: 4,
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    BREAST <br style={{ boxSizing: "border-box" }} />{" "}
                    CANCER <br style={{ boxSizing: "border-box" }} />{" "}
                    AWARENESS
                  </p>
                </div>
              </div>
            </a>
          </div>
        </Slider>
        <div
          className="teaser-list__footer : text-center"
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            marginBottom: "62px",
            marginTop: "60px"
          }}
        >
          <div className="button_control" style={{ margin: "0px auto" }}>
            <b className="flex-1 relative leading-[64px]">{t("health.View All")}</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
