import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function AInformation() {
  const { t } = useTranslation("");
  const router = useRouter();
  const locale = router.locale;
  return (

    <>
      <section
        className="topbar_wrapper"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          paddingTop: "50px"
        }}
      >
        <div
          className="inner_wrapper abt_topcontent"
          style={{ boxSizing: "border-box", overflowX: "hidden" }}
        >
          <div
            className=""
            style={{
              boxSizing: "border-box",
              margin: "0px auto",
              padding: "0px",
              display: "block",
              width: "100%",
            }}
          >
            <div
              className="about-us-tab-nav aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                color: "rgb(20, 77, 146)",
                textTransform: "uppercase",
                marginBottom: "28px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.2s",
                opacity: 1,
                transform: "none",
              }}
            >
              <Link
                className="sitefont about-us-tab-nav__link : text--15 text--sb is-active"
                href="#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                  color: "inherit",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  letterSpacing: "0.75px",
                  position: "relative",
                  display: "inline-block",
                  paddingRight: "15px",
                  marginRight: "15px",
                  fontWeight: 700,
                }}
              >
                {t("aboutaster.OUR PHILOSOPHY")}
              </Link>
              <Link
                className="sitefont about-us-tab-nav__link : text--15 text--sb"
                href="https://www.asterdmhealthcare.com/about-us/leadership"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                  color: "inherit",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  letterSpacing: "0.75px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {t("aboutaster.EXECUTIVE MANAGEMENT")}
              </Link>
            </div>
            <div
              className="sitefont about-us-tab-panel is-active aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                pointerEvents: "auto",
                display: "block",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.3s",
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="image-card-list"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="container"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px auto",
                    display: "block",
                    width: "100%",
                    maxWidth: "1240px",
                    padding: "0px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      flex: "0 1 auto",
                      flexFlow: "wrap",
                      boxSizing: "border-box",
                      display: "flex",
                      WebkitBoxFlex: "0",
                      WebkitBoxOrient: "horizontal",
                      WebkitBoxDirection: "normal",
                      marginLeft: "-8px",
                      marginRight: "-8px",
                    }}
                  />
                </div>
              </div>
              <section
                className="editor-text aos-init aos-animate"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  position: "relative",
                  fontFamily: "Lato, sans-serif",
                  pointerEvents: "auto",
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
                    margin: "0px auto",
                    display: "block",
                    width: "100%",
                    maxWidth: "1240px",
                    padding: "0px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <p className="sitefont"
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      margin: "0px 0px 34px",
                      marginTop: "0px",
                      marginBottom: "34px",
                    }}
                  >
                    {t("aboutaster.phylosaphypara1")}
                  </p>
                  <p className="sitefont"
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      margin: "0px 0px 34px",
                      marginTop: "0px",
                      marginBottom: "34px",
                    }}
                  >
                    {t("aboutaster.phylosaphypara2")}
                  </p>
                </div>
              </section>
              <div
                className="leader-testimonial-list"
                style={{ boxSizing: "border-box", marginBottom: "74px" }}
              >
                <div
                  className="container"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px auto",
                    display: "block",
                    width: "100%",
                    maxWidth: "1240px",
                    padding: "0px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <div
                    className="leader-testimonial-list__title : text--bd aos-init aos-animate"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: 700,
                      marginBottom: "30px",
                      pointerEvents: "auto",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <div
                      className="title : title--h4 font--primary"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        letterSpacing: "inherit",
                        color: "rgb(20, 77, 146)",
                        fontSize: "24px",
                        lineHeight: 1.54,
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 700,
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
                        {t("aboutaster.Our Values")}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="leader-testimonial-list__inner : bg-gray aos-init aos-animate"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "rgb(243, 246, 249)",
                      borderRadius: "18px",
                      padding: "60px 0px 80px",
                      pointerEvents: "auto",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      transitionDelay: "0.2s",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <div
                      className="leader_testimonial_wrapper row : center-md"
                      style={{
                        flex: "0 1 auto",
                        flexFlow: "wrap",
                        boxSizing: "border-box",
                        display: "flex",
                        WebkitBoxFlex: "0",
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        marginLeft: "-8px",
                        marginRight: "-8px",
                      }}
                    >
                      <div
                        className="col-md-10 : col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "83.333%",
                          maxWidth: "83.333%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        
                        <div
                          className="row about_ourvalues"
                          style={{
                            flex: "0 1 auto",
                            flexFlow: "wrap",
                            boxSizing: "border-box",
                            display: "flex",
                            WebkitBoxFlex: "0",
                            WebkitBoxOrient: "horizontal",
                            WebkitBoxDirection: "normal",
                            marginLeft: "-8px",
                            marginRight: "-8px",
                          }}
                        >
                          
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="ALBERT EINSTEIN"
                                  src="/leader_image_01.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.EXCELLENCE")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.exelancedescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.ALBERT EINSTEIN")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="MAHATMA GANDHI"
                                  src="/leader_image_02.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.RESPECT")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.respectdescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.MAHATMA GANDHI")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              marginTop: "45px",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="MOTHER TERESA"
                                  src="/leader_image_03.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.COMPASSION")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.compassiondescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.MOTHER TERESA")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              marginTop: "45px",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="STEVE JOBS"
                                  src="/leader_image_04.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.PASSION")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.passiondescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.STEVE JOBS")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              marginTop: "45px",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="NELSON MANDELA"
                                  src="/leader_image_05.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.INTEGRITY")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.intgritydescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.NELSON MANDELA")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="md_width_full col-sm-6 : col-xs-12 leader-testimonial-list__col aos-init aos-animate"
                            style={{
                              flex: "0 0 auto",
                              boxSizing: "border-box",
                              WebkitBoxFlex: "0",
                              flexBasis: "50%",
                              maxWidth: "50%",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                              pointerEvents: "auto",
                              marginTop: "45px",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.1s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <div
                              className="leader-testimonial"
                              style={{
                                boxSizing: "border-box",
                                gap: "38px",
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                height: "100%",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="leader-testimonial__image"
                                style={{ boxSizing: "border-box" }}
                              >
                                <Image
                                  width={0}
                                  height={0}
                                  alt="H.H. SHEIKH ZAYED BIN SULTAN AL NAHYAN"
                                  src="/leader_image_06.png"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className="leader-testimonial__content : text--14"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  lineHeight: 1.4,
                                  padding: "10px 0px 17px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  className="leader-testimonial__title : text--uppercase text--cgp-green-1 text--bd"
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                    color: "rgb(0, 180, 141)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.4px",
                                    marginBottom: "7px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      boxSizing: "border-box",
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
                                    {t("aboutaster.UNITY")}
                                  </h3>
                                </div>
                                <div
                                  className="leader-testimonial__text : text--gray"
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(70, 70, 70)",
                                    letterSpacing: "0.35px",
                                    lineHeight: 1.5,
                                    marginBottom: "10px",
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
                                    {t("aboutaster.unitydescription")}
                                  </p>
                                </div>
                                <div
                                  className="leader-testimonial__name : text--12 text--uppercase md_margin_top"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    lineHeight: 1.4,
                                    textTransform: "uppercase",
                                    letterSpacing: "1.2px",
                                    color: "rgb(0, 0, 0)",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <strong
                                    style={{
                                      boxSizing: "border-box",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {t("aboutaster.H.H. SHEIKH ZAYED BIN SULTAN AL NAHYAN")}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="executive-profile-list aos-init aos-animate"
                style={{
                  boxSizing: "border-box",
                  pointerEvents: "auto",
                  margin: "63px 0px 153px",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1s",
                  transitionProperty: "opacity, transform, -webkit-transform",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="executive-profile"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    
                    <div className="row abt_chairmanblockcontainer">
                      
                      <div className="col-md-3 : col-sm-4 col-xs-12" >
                        <div>
                          <img className="abt_chairmanblockimage"
                           src="/executive_profile_01.jpg" />
                        </div>
                      </div>
                      <div
                        className="abt_chairmanblock md_width_full col-md-9 : col-sm-8 col-xs-12">
                        <div>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                            }}
                          >
                            {t("aboutaster.chairmanpara1")}
                            <br style={{ boxSizing: "border-box" }} /> 
                            {t("aboutaster.chairmanpara2")}
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            {t("aboutaster.chairmanpara3")}
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            <strong
                              style={{
                                boxSizing: "border-box",
                                fontWeight: 700,
                                display: "block",
                              }}
                            >
                              {t("aboutaster.Dr. Azad Moopen")}
                            </strong>
                            <strong
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                margin: "2px 0px 5px",
                                fontWeight: 600,
                              }}
                            >
                              {t("aboutaster.MBBS, MD, FRCP")}
                            </strong>
                            {t("aboutaster.Founder Chairman and Managing Director")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              </div>
              </div>
            

            <div
              className="about-us-tab-panel aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                display: "none",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.3s",
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="executive-profile-list aos-init aos-animate"
                style={{
                  boxSizing: "border-box",
                  pointerEvents: "auto",
                  margin: "63px 0px 153px",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1s",
                  transitionProperty: "opacity, transform, -webkit-transform",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="executive-profile"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        flex: "0 1 auto",
                        flexFlow: "wrap",
                        boxSizing: "border-box",
                        display: "flex",
                        WebkitBoxFlex: "0",
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        marginLeft: "-8px",
                        marginRight: "-8px",
                      }}
                    >
                      <div
                        className="col-md-3 : col-sm-4 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "25%",
                          maxWidth: "25%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__image"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "18px",
                            overflow: "hidden",
                            margin: "0px auto",
                            width: "204px",
                            height: "240px",
                            position: "relative",
                          }}
                        >
                          <div
                            className="executive-profile__image-bg : cover-bg"
                            style={{
                              boxSizing: "border-box",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundImage:
                                'url("/alisha-mam.png")',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-9 : col-sm-8 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "75%",
                          maxWidth: "75%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__details"
                          style={{
                            boxSizing: "border-box",
                            paddingRight: "30px",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                            }}
                          >
                            <strong
                              style={{
                                boxSizing: "border-box",
                                fontWeight: 700,
                                display: "block",
                              }}
                            >
                              MS. ALISHA MOOPEN
                            </strong>
                            Deputy Managing Director – Aster DM Healthcare
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            Alisha Moopen is the Deputy Managing Director of our
                            company. Having joined the company as a Director in
                            2013, she is responsible for overseeing the
                            strategic direction and development of the company,
                            and notably spearheading the expansion of the group
                            into new markets.
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            Alisha was recently elected by World Economic Forum
                            as a Young Global Leader to join the class of 2018.
                            Recognizing her past work in healthcare, she has
                            been inducted into a 5-year program with like-minded
                            people who are committed and passionate to tackle
                            the main challenges of the world today, with
                            healthcare being one of them. She was also
                            recognized as one of the Top 100 World’s Greatest
                            Leaders in Asia and GCC in 2018. Forbes Middle East
                            magazine has selected Alisha as one of the Top Next
                            Generation Indian Leaders in 2018. She also won
                            Khaleej Times’ Emerging Leaders Award 2018 for
                            Healthcare. She is a Chartered Accountant from the
                            ICAS (Institute of Chartered Accountants of
                            Scotland) and worked earlier with Ernst & Young. She
                            graduated from the University of Michigan, Ann Arbor
                            with distinction in Finance & Accounting. Alisha’s
                            philosophy in life is ‘Healthiness is Happiness’.
                            She wants to enable quality healthcare across the
                            globe through treating people with compassion,
                            precision and excellence. She is dedicated to the
                            cause of women empowerment and mental health. She
                            believes in the diversity of workforce, strength in
                            differences and focused on improving the glass
                            ceilings at work for women. She was instrumental in
                            launching the Women in Leadership programme at Aster
                            DM Healthcare which empowers talented and capable
                            female employees with training and growth
                            opportunities, to shape them for leadership roles.
                            She is also an active philanthropist, being a
                            trustee of Aster DM Foundation and involved in
                            social welfare through Aster Volunteers programme
                            which bridges the gap between people who would like
                            to help with those in need.
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            Alisha is dedicated to ensure that humanity
                            leverages on advances in science as well as personal
                            re-engineering of self, ranging from lifestyle
                            choices to dealing with the external environment, to
                            staying happy and healthy, both physically and
                            mentally. She believes using technology can enable
                            better health outcomes for population management
                            through precision medicine, connected care.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="executive-profile"
                  style={{ boxSizing: "border-box", marginTop: "80px" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        flex: "0 1 auto",
                        flexFlow: "wrap",
                        boxSizing: "border-box",
                        display: "flex",
                        WebkitBoxFlex: "0",
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        marginLeft: "-8px",
                        marginRight: "-8px",
                      }}
                    >
                      <div
                        className="col-md-3 : col-sm-4 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "25%",
                          maxWidth: "25%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__image"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "18px",
                            overflow: "hidden",
                            margin: "0px auto",
                            width: "204px",
                            height: "240px",
                            position: "relative",
                          }}
                        >
                          <div
                            className="executive-profile__image-bg : cover-bg"
                            style={{
                              boxSizing: "border-box",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundImage:
                                'url("/malathi.png")',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-9 : col-sm-8 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "75%",
                          maxWidth: "75%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__details"
                          style={{
                            boxSizing: "border-box",
                            paddingRight: "30px",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                            }}
                          >
                            <strong
                              style={{
                                boxSizing: "border-box",
                                fontWeight: 700,
                                display: "block",
                              }}
                            >
                              DR. A. MALATHI
                            </strong>
                            Group Chief Medical & Quality Officer, Aster DM
                            Healthcare
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            Dr. A. Malathi is the chief medical and quality
                            officer of our group. She was appointed to this post
                            on February 16, 2015. She holds a bachelor’s degree
                            in Medicine and Surgery from Bangalore University
                            and a master’s degree in Human Physiology from
                            Bombay University. She has also completed a training
                            programme in hospital administration from the Tata
                            Institute of Social Sciences. She is experienced in
                            the field of healthcare. Prior to joining Dr.
                            Moopen’s Healthcare Management Services LLC, she has
                            worked at Fortis Hospitals Limited, Manipal Health
                            Enterprises Private Limited and Lokmanya Tilak
                            Municipal Medical College.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="executive-profile"
                  style={{ boxSizing: "border-box", marginTop: "80px" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        flex: "0 1 auto",
                        flexFlow: "wrap",
                        boxSizing: "border-box",
                        display: "flex",
                        WebkitBoxFlex: "0",
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        marginLeft: "-8px",
                        marginRight: "-8px",
                      }}
                    >
                      <div
                        className="col-md-3 : col-sm-4 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "25%",
                          maxWidth: "25%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__image"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "18px",
                            overflow: "hidden",
                            margin: "0px auto",
                            width: "204px",
                            height: "240px",
                            position: "relative",
                          }}
                        >
                          <div
                            className="executive-profile__image-bg : cover-bg"
                            style={{
                              boxSizing: "border-box",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              backgroundImage:
                                'url("/wilson.png")',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-9 : col-sm-8 col-xs-12"
                        style={{
                          flex: "0 0 auto",
                          boxSizing: "border-box",
                          WebkitBoxFlex: "0",
                          flexBasis: "75%",
                          maxWidth: "75%",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        <div
                          className="executive-profile__details"
                          style={{
                            boxSizing: "border-box",
                            paddingRight: "30px",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                            }}
                          >
                            <strong
                              style={{
                                boxSizing: "border-box",
                                fontWeight: 700,
                                display: "block",
                              }}
                            >
                              T.J WILSON
                            </strong>
                            Executive Director & Group Head, Goveranance &
                            Corporate Affairs
                          </p>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                              lineHeight: "22px",
                              marginTop: "30px",
                            }}
                          >
                            T. J. Wilson is a Director of our Company and the
                            Group Head – Goveranance and Corporate Affairs, GCC.
                            He holds a bachelor’s degree in Commerce from the
                            University of Calicut, Kerala, India. He is also a
                            member of the Institute of Chartered Accountants of
                            India. In the past, he has worked with Koyenco Feeds
                            Private Limited and Parle (Exports) Limited. He is
                            responsible for overseeing the legal, secretarial
                            and governance function, internal audit and large
                            portfolio of new hospital projects. He has been a
                            Director of our Company since April 20, 2009.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="executive-profile-list__footer : text-center"
                  style={{
                    boxSizing: "border-box",
                    textAlign: "center",
                    marginTop: "84px",
                  }}
                >
                  <Link
                    className="btn : btn--default"
                    href="https://www.aster.om/about-us/about-aster-hospital"
                    target="_self"
                    title="OUR LEADERSHIP"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      padding: "10px 20px",
                      borderRadius: "64px",
                      border: "1px solid rgb(0, 179, 140)",
                      transition:
                        "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                      cursor: "pointer",
                      minWidth: "236px",
                      minHeight: "50px",
                      backgroundColor: "rgb(0, 179, 140)",
                      color: "rgb(255, 255, 255)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "26px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      className="btn__text"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 4,
                      }}
                    >
                      OUR LEADERSHIP
                    </span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>



      <div
                className="volunteer : bg-gray text-center"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  backgroundColor: "rgb(243, 246, 249)",

                  position: "relative",
                 
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                    style={{
                      backgroundColor: "#144d92",
                      height: 200,
                      position: "absolute",
                      width: "100%"
                    }}
                  >
  
                </div>
                <div
                  className="container"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px auto",
                    display: "block",
                    width: "100%",
                    maxWidth: "1240px",
                    position: "relative",
                    zIndex: 3,
                    padding: "0px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <div
                    className="volunteer__header aos-init aos-animate"
                    style={{
                      boxSizing: "border-box",
                      marginBottom: "36px",
                      pointerEvents: "auto",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      opacity: 1,
                      transform: "none",
                      paddingTop:30,
                    }}
                  >
                    <Image
                      width={0}
                      height={0}
                      alt="volunteers logo"
                      src="/aster_volunteers_logo.svg"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        margin: "0px",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="volunteer__image-list"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "34px",
                    }}
                  >
                    <div
                      className="volunteer__image aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "18px",
                        overflow: "hidden",
                        position: "relative",
                        width: "322px",
                        height: "200px",
                        pointerEvents: "auto",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.1s",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="volunteer__image-bg : cover-bg"
                        style={{
                          boxSizing: "border-box",
                          height: "100%",
                          left: "0px",
                          position: "absolute",
                          width: "100%",
                          top: "0px",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundImage:
                            'url("/volunteer_image_01.jpg")',
                        }}
                      />
                    </div>
                    <div
                      className="volunteer__image aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "18px",
                        overflow: "hidden",
                        position: "relative",
                        width: "322px",
                        height: "200px",
                        pointerEvents: "auto",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.1s",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="volunteer__image-bg : cover-bg"
                        style={{
                          boxSizing: "border-box",
                          height: "100%",
                          left: "0px",
                          position: "absolute",
                          width: "100%",
                          top: "0px",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundImage:
                            'url("/volunteer_image_02.jpg")',
                        }}
                      />
                    </div>
                    <div
                      className="volunteer__image aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "18px",
                        overflow: "hidden",
                        position: "relative",
                        width: "322px",
                        height: "200px",
                        pointerEvents: "auto",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.1s",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="volunteer__image-bg : cover-bg"
                        style={{
                          boxSizing: "border-box",
                          height: "100%",
                          left: "0px",
                          position: "absolute",
                          width: "100%",
                          top: "0px",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundImage:
                            'url("/volunteer_image_03.jpg")',
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="volunteer__footer aos-init aos-animate"
                    style={{
                      boxSizing: "border-box",
                      pointerEvents: "auto",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      transitionDelay: "0.4s",
                      opacity: 1,
                      transform: "none",
                      paddingBottom : 50,
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
                      {t("aboutaster.volunteersdescription")}
                    </p>
                    <Link
                      className="btn : btn--default btn_volunteer"
                      href="#"
                      target="_self"
                      title="Visit Aster Volunteers"
                    >
                      <span
                        className="btn__text"
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 4,
                        }}
                      >
                        {t("aboutaster.Visit Aster Volunteers")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>




      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: 'Titillium-semibold';
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
}

body {
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  margin: 0px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  color: rgb(33, 34, 65);
  font-family: 'Titillium-semibold';
  position: relative;
  height: auto;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
}
`,
        }}
      />
    </>
  );
}
