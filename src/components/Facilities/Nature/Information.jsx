import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function FInformation() {

  const { t } = useTranslation("");
  const [selectednature, setSelectedNature] = useState("Pregnancy Packages");

  const handleNatureChange = (event) => {
    setSelectedNature(event.target.value);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getIcon = (index) => (openIndex === index ? '-' : '+');

  return (
    <>
      <section
        className="sec-default : sec-mod-tab mt-[20px]"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom: "90px",
        }}
      >
        <div
          className="mod-tab : mod-tab--external-links"
          role="tablist"
          style={{ boxSizing: "border-box" }}
        >
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              margin: "0px auto",
              padding: "0px",
              display: "block",
              width: "100%",
              maxWidth: "1240px",
            }}
          >
            <div
              className="row : row-15"
              style={{
                flex: "0 1 auto",
                flexFlow: "wrap",
                boxSizing: "border-box",
                display: "flex",
                WebkitBoxFlex: "0",
                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                marginLeft: "-15px",
                marginRight: "-15px",
              }}
            >
              {/* <div
                className="col-md-3 : col-xs-12"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "25%",
                  maxWidth: "25%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <div
                  id="c74"
                  className="frame frame-default frame-type-menu_subpages frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                > */}
              {/* <div
                    className="tab-nav : text--sb"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: 600,
                      position: "relative",
                      width: "100%",
                      maxWidth: "212px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    <Link
                      className="tab-nav__link : text--blue is-active"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderColor: "transparent",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Pregnancy Packages
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                            transform: "translate(0px, 0px)",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Pregnancy & Maternity
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Premenstrual Syndrome
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Maternal Foetal Medicine
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Uterine Fibroids
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Polycystic Ovary Syndrome (PCOS)
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        Obstretrics & Gynaecology
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                    <Link
                      className="tab-nav__link : text--blue"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(20, 77, 146)",
                        padding: "12px 38px 12px 16px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        backgroundColor: "rgb(255, 255, 255)",
                        position: "relative",
                        userSelect: "none",
                        width: "100%",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        FAQs
                      </span>
                      <span
                        className="tab-nav__link-arrow : d-flex-cc"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          transition: "transform 0.3s ease 0s",
                          position: "absolute",
                          right: "0px",
                          top: "50%",
                          width: "26px",
                          height: "26px",
                          zIndex: 3,
                          backgroundColor: "rgb(255, 255, 255)",
                          transform: "translate(0px, -50%)",
                        }}
                      >
                        <i
                          className="icon : icon-arrow-right"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            position: "relative",
                            transition: "transform 0.3s ease 0s",
                            width: "6px",
                            height: "12px",
                          }}
                        />
                      </span>
                    </Link>
                  </div> */}
              {/* </div>
              </div> */}
              <div
                className="col-md-9 : col-xs-12"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "75%",
                  maxWidth: "75%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <div
                  className="mod-tab__panel is-active"
                  role="tabpanel"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    minHeight: "500px",
                    display: "block",
                  }}
                >
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="accordion-list aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        pointerEvents: "auto",
                        marginBottom: "70px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
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

                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(1)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Antenatal Packages
                            <div>{getIcon(1)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 1 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="More Details"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  More Details
                                </span>
                              </Link>
                              <Link
                                className="btn : btn--default"
                                href="#"
                                target="_self"
                                title="Book Now"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
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
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
                                  marginLeft: "auto",
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
                                  Book Now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(2)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Continuity Of Care
                            <div>{getIcon(2)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 2 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="More Details"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  More Details
                                </span>
                              </Link>
                              <Link
                                className="btn : btn--default"
                                href="#"
                                target="_self"
                                title="Book Now"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
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
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
                                  marginLeft: "auto",
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
                                  Book Now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(3)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Maternity Packages
                            <div>{getIcon(3)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 3 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="More Details"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  More Details
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(4)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Antenatal Classes
                            <div>{getIcon(4)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 4 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="Book Now"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  Book Now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(5)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Free Hospital Tours
                            <div>{getIcon(5)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 5 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="More Details"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  More Details
                                </span>
                              </Link>
                              <Link
                                className="btn : btn--default"
                                href="#"
                                target="_self"
                                title="Book Now"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
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
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
                                  marginLeft: "auto",
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
                                  Book Now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "9px",
                            border: "1px solid rgb(157, 157, 157)",
                            transition: "background-color 0.3s ease 0s",
                            marginBottom: "16px",
                            backgroundColor: "rgb(255, 255, 255)",
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
                          <button
                            className="accordion__title : text--blue text--bd"
                            onClick={() => toggleAccordion(6)}
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              boxShadow: "none",
                              fontSize: "inherit",
                              letterSpacing: "inherit",
                              lineHeight: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontWeight: 700,
                              color: "rgb(20, 77, 146)",
                              padding: "16px 24px", // Adjusted padding
                              position: "relative",
                              width: "100%",
                              display: "flex", // Use flex container
                              justifyContent: "space-between", // Align icon to the end
                              alignItems: "center", // Vertically center content
                              textAlign: "start",
                            }}
                          >
                            Financial Counselling
                            <div>{getIcon(6)}</div>
                          </button>
                          <div
                            className={`accordion__panel ${openIndex === 6 ? 'open' : ''}`}
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                            }}
                          >
                            <div
                              className="editor-text"
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Lato, sans-serif",
                                marginBottom: "30px",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  letterSpacing: "0.4px",
                                  maxWidth: "676px",
                                  width: "100%",
                                  margin: "0px 0px 34px",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                At Aster, we offer the most affordable Antenatal
                                Packages which are available at the Aster
                                Clinics and Aster Hospital across the UAE. This
                                package includes the consultations with the
                                gynecologists, along with regular tests and
                                scans throughout the period of pregnancy.
                              </p>
                            </div>
                            <div
                              className="accordion__panel-footer"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href="#"
                                target="_self"
                                title="More Details"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  lineHeight: "26px",
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
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
                                  More Details
                                </span>
                              </Link>
                              <Link
                                className="btn : btn--default"
                                href="#"
                                target="_self"
                                title="Book Now"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  borderRadius: "64px",
                                  border: "1px solid rgb(0, 179, 140)",
                                  transition:
                                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                                  cursor: "pointer",
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
                                  padding: "6px 20px",
                                  minWidth: "166px",
                                  minHeight: "40px",
                                  marginLeft: "auto",
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
                                  Book Now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="tab-horizontal aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "788px",
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
                        className="tab-horizontal__nav-wrapper"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div
                          className="tab-horizontal__nav"
                          aria-label="Tab Menu"
                          role="tablist"
                          style={{
                            boxSizing: "border-box",
                            border: "1px solid rgb(0, 179, 140)",
                            borderRadius: "18px",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "50px",
                          }}
                        >
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb is-active aos-init aos-animate"
                            role="tab"
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              padding: "0px",
                              boxShadow: "none",
                              textAlign: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontSize: "18px",
                              lineHeight: 1.22,
                              letterSpacing: "0.45px",
                              fontWeight: 600,
                              flex: "1 1 0%",
                              margin: "-1px",
                              transition:
                                "background-color 0.2s ease 0s, color 0.2s ease 0s",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              height: "126px",
                              position: "relative",
                              pointerEvents: "auto",
                              borderRadius: "15px 0px 0px 15px",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.2s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <span
                              className="tab-horizontal__nav-icon : d-flex-cc"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "38px",
                                height: "38px",
                                marginBottom: "8px",
                              }}
                            >
                              <i
                                className="icon : icon-atom"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "38px",
                                  height: "38px",
                                }}
                              />
                            </span>
                            <span
                              className="tab-horizontal__nav-text"
                              style={{ boxSizing: "border-box" }}
                            >
                              Symptoms
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb aos-init aos-animate"
                            role="tab"
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              padding: "0px",
                              boxShadow: "none",
                              textAlign: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              borderRadius: "0px",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontSize: "18px",
                              lineHeight: 1.22,
                              letterSpacing: "0.45px",
                              fontWeight: 600,
                              flex: "1 1 0%",
                              margin: "-1px",
                              transition:
                                "background-color 0.2s ease 0s, color 0.2s ease 0s",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              height: "126px",
                              color: "rgb(20, 77, 146)",
                              position: "relative",
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
                            <span
                              className="tab-horizontal__nav-icon : d-flex-cc"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "38px",
                                height: "38px",
                                marginBottom: "8px",
                              }}
                            >
                              <i
                                className="icon : icon-first-aid"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "38px",
                                  height: "32px",
                                }}
                              />
                            </span>
                            <span
                              className="tab-horizontal__nav-text"
                              style={{ boxSizing: "border-box" }}
                            >
                              Diagnosis
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb aos-init aos-animate"
                            role="tab"
                            style={{
                              boxSizing: "border-box",
                              background: "transparent",
                              border: "0px",
                              padding: "0px",
                              boxShadow: "none",
                              textAlign: "inherit",
                              fontStyle: "inherit",
                              fontFamily: "inherit",
                              textTransform: "none",
                              cursor: "pointer",
                              appearance: "button",
                              fontSize: "18px",
                              lineHeight: 1.22,
                              letterSpacing: "0.45px",
                              fontWeight: 600,
                              flex: "1 1 0%",
                              margin: "-1px",
                              transition:
                                "background-color 0.2s ease 0s, color 0.2s ease 0s",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              height: "126px",
                              color: "rgb(20, 77, 146)",
                              position: "relative",
                              pointerEvents: "auto",
                              borderRadius: "0px 15px 15px 0px",
                              transitionTimingFunction: "ease",
                              transitionDuration: "1s",
                              transitionProperty:
                                "opacity, transform, -webkit-transform",
                              transitionDelay: "0.2s",
                              opacity: 1,
                              transform: "none",
                            }}
                          >
                            <span
                              className="tab-horizontal__nav-icon : d-flex-cc"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "38px",
                                height: "38px",
                                marginBottom: "8px",
                              }}
                            >
                              <i
                                className="icon : icon-heart-beat"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "38px",
                                  height: "30px",
                                }}
                              />
                            </span>
                            <span
                              className="tab-horizontal__nav-text"
                              style={{ boxSizing: "border-box" }}
                            >
                              Specialized Service
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-horizontal__panel is-active aos-init aos-animate"
                        role="tabpanel"
                        tabIndex="0"
                        style={{
                          boxSizing: "border-box",
                          pointerEvents: "auto",
                          display: "block",
                          transitionTimingFunction: "ease",
                          transitionDuration: "1s",
                          transitionProperty:
                            "opacity, transform, -webkit-transform",
                          transitionDelay: "0.2s",
                          opacity: 1,
                          transform: "none",
                        }}
                      >
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Lifestyle alterations:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          Consuming a low-fat and low-sodium diet, getting at
                          least 30 minutes of moderate exercise on most days of
                          the week, quitting smoking and limiting alcohol.
                        </p>
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Medications:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          If lifestyle changes aren’t adequate, you may be
                          prescribed medications to control your heart disease.
                          Heart disease Diagnosis vary by condition. For
                          instance, if you’re diagnosed with a heart infection,
                          you’ll likely be given antibiotics. The type of
                          medication will completely depend upon the type of
                          heart disease. Medications will also be prescribed if
                          you have heart attack symptoms.
                        </p>
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Medical procedures or surgery:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "0px",
                          }}
                        >
                          It’s possible you will be recommended specific medical
                          procedures or surgeries. The type of procedure will
                          depend on the type of heart ailment and the extent of
                          the damage caused to your heart due to coronary artery
                          disease.
                        </p>
                      </div>
                      <div
                        className="tab-horizontal__panel aos-init aos-animate"
                        role="tabpanel"
                        tabIndex="0"
                        style={{
                          boxSizing: "border-box",
                          display: "none",
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
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Diagnosis
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          During your prenatal check-ups, your obstetrician will
                          check for any possible complications such as anaemia,
                          gestational diabetes, high blood pressure, foetal
                          health issues. Your doctor will conduct physical
                          exams, and suggest blood tests or ultrasound exams, as
                          necessary.
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          We offer 3 routine scans to every pregnant woman who
                          consult us:
                        </p>
                        <h4
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 15px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          11- 14 weeks scan (FTS) during the first trimester.
                        </h4>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          This is a critical period, marked by rapid changes for
                          both you and your baby. These scans help doctors rule
                          out Down syndrome, anencephaly, cleft lip,abnormal
                          placenta function and other abnormalities in the
                          foetus. These scans reveal the age of the baby and if
                          there are multiple pregnancies. Meet your doctor to
                          understand what to expect and what to be careful
                          about.
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          You need to take extra care because the pregnancy is
                          very fragile. Morning sickness is at its worst during
                          the first trimester and sometimes there is loss of
                          appetite accompanied by an aversion to certain smells
                          or food. Your breasts will feel tender and swollen and
                          as the pregnancy progresses you may feel out of breath
                          sometimes as the baby pushes up into your lung space.
                        </p>
                        <h4
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 15px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          18 – 22 weeks (Anomaly /level 2/target scan) during
                          the second trimester.
                        </h4>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          These scans check the health and position of the
                          placenta, water level and baby’s growth. This is the
                          best period of pregnancy. For most women the symptoms
                          of morning sickness go away and they are restored to
                          their former energetic selves. Your nipples turn dark
                          and you experience itching and stretchmarks.
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          Regular visits to your doctor remain important during
                          the second trimester. Share all your anxieties and
                          apprehensions with your doctor so he may be able to
                          assist you. Your doctor will monitor your baby’s
                          heartbeat using Doppler ultrasound test.
                        </p>
                        <h4
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 15px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          28 – 35 weeks (growth scan) during the third
                          trimester.
                        </h4>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          The growth scan is done primarily to check the speed
                          of growth, foetal heart rate and measurements that
                          denote proper growth. This is a difficult time as you
                          may experience back pain, leg cramps, heartburn,
                          hemorrhoids, swollen ankles, warm body temperature,
                          and tiredness. Consult your doctor if you have
                          excessive ankle swelling.
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "0px",
                          }}
                        >
                          You will feel your baby move and kick, it’s a great
                          time of joy and exhilaration! Continue to visit your
                          doctor regularly and learn how to smoothly manage the
                          final stages of your pregnancy. At any time if you
                          experience symptoms of severe abdominal pain,
                          significant bleeding or extreme dizziness, call your
                          doctor immediately.
                        </p>
                      </div>
                      <div
                        className="tab-horizontal__panel aos-init aos-animate"
                        role="tabpanel"
                        tabIndex="0"
                        style={{
                          boxSizing: "border-box",
                          display: "none",
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
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Specialized Service:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          Consuming a low-fat and low-sodium diet, getting at
                          least 30 minutes of moderate exercise on most days of
                          the week, quitting smoking and limiting alcohol.
                        </p>
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Medications:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "30px",
                          }}
                        >
                          If lifestyle changes aren’t adequate, you may be
                          prescribed medications to control your heart disease.
                          Heart disease Diagnosis vary by condition. For
                          instance, if you’re diagnosed with a heart infection,
                          you’ll likely be given antibiotics. The type of
                          medication will completely depend upon the type of
                          heart disease. Medications will also be prescribed if
                          you have heart attack symptoms.
                        </p>
                        <h3
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 20px",
                            marginTop: "0px",
                            color: "rgb(20, 77, 146)",
                            fontSize: "20px",
                            lineHeight: 1.2,
                            marginBottom: "14px",
                          }}
                        >
                          Medical procedures or surgery:
                        </h3>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            letterSpacing: "0.4px",
                            marginBottom: "0px",
                          }}
                        >
                          It’s possible you will be recommended specific medical
                          procedures or surgeries. The type of procedure will
                          depend on the type of heart ailment and the extent of
                          the damage caused to your heart due to coronary artery
                          disease.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <style jsx>{`
        .accordion__panel {
          display: none;
          /* Add your styling for the panel */
        }

        .accordion__panel.open {
          display: block;
          /* Add your styling for the open panel */
        }
      `}</style>
    </>
  );
}
