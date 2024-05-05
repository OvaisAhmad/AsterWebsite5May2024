import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function FInformation() {
  const { t } = useTranslation("");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getIcon = (index) => (openIndex === index ? '-' : '+');

  return (
    <>
      <section
        className="sec-default : sec-accordion-col-2"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom: "90px",
          padding: "0px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        <div
          className="accordion-col-2"
          style={{
            boxSizing: "border-box",
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
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
            <header
              className="accordion-col-2__title : text--16 text--blue text--bd aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                display: "block",
                fontSize: "16px",
                lineHeight: 1.38,
                paddingLeft: "8px",
                paddingRight: "8px",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                marginBottom: "32px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                opacity: 1,
                transform: "none",
              }}
            >
              <h2
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
              />
            </header>
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
              <div
                className="col-md-6 : col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  pointerEvents: "auto",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1s",
                  transitionProperty: "opacity, transform, -webkit-transform",
                  transitionDelay: "0.2s",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="accordion-list"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Executive Health Check
                        <div>{getIcon(1)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 1 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                            className="home-care-modal btn : btn--default"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Executive Health Screening Package (Men Under 40)
                        <div>{getIcon(2)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 2 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                            className="home-care-modal btn : btn--default"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Executive Health Screening Package (Women Under
                        40)
                        <div>{getIcon(3)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 3 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Comprehensive Health Screening Package (Women 40+)
                        <div>{getIcon(4)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 4 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 : col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
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
                  className="accordion-list"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Diabetic Health Screening Package
                        <div>{getIcon(5)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 5 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                            className="home-care-modal btn : btn--default"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Aster Basic Health Screening Package
                        <div>{getIcon(6)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 6 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                            className="home-care-modal btn : btn--default"
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
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(7)}
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
                        Aster Cardiac Health Screening Package
                        <div>{getIcon(7)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 7 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(8)}
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
                        Teleconsultation Service
                        <div>{getIcon(8)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 8 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          ✔ Haemogram ✔ Haemoglobin ✔ Packed Cell Volume (PCV) ✔
                          Total & Differential Count ✔ MCV, MCH, MCHC ✔ RDW ✔
                          Platelet Count ESR ✔ Blood Sugar Fasting Postprandial
                        </p>
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
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
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
