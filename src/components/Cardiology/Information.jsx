import React from "react";
import Link from "next/link";

export default function Information() {
  return (
    <>
      <section
        className="sec-default : sec-mod-tab"
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
          className="mod-tab"
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
              paddingLeft: "8px",
              paddingRight: "8px",
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
              <div
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
                  className="tab-nav : text--sb aos-init aos-animate"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    position: "relative",
                    width: "100%",
                    maxWidth: "212px",
                    letterSpacing: "0.4px",
                    pointerEvents: "auto",
                    transitionTimingFunction: "ease",
                    transitionDuration: "1s",
                    transitionProperty: "opacity, transform, -webkit-transform",
                    transitionDelay: "0.2s",
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <button
                    className="tab-nav__link : text--blue is-active"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
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
                      Cardiology
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
                  </button>
                  <button
                    className="tab-nav__link : text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
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
                      Nuclear Cardiology
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
                  </button>
                  <button
                    className="tab-nav__link : text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
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
                      Echocardiography
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
                  </button>
                  <button
                    className="tab-nav__link : text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
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
                      Cardiac Electrophysiology
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
                  </button>
                </div>
              </div>
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
                  <button
                    className="tab-nav__link : d-md-none text--blue is-active"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
                      padding: "12px 38px 12px 16px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                      transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                      backgroundColor: "rgb(255, 255, 255)",
                      position: "relative",
                      userSelect: "none",
                      width: "100%",
                      minHeight: "60px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      borderColor: "transparent",
                      color: "rgb(255, 255, 255)",
                      display: "none",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      Cardiology
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
                  </button>
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="accordion-list"
                      style={{ boxSizing: "border-box", marginBottom: "70px" }}
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
                              padding: "16px 40px 16px 24px",
                              position: "relative",
                              width: "100%",
                              display: "block",
                              textAlign: "start",
                            }}
                          >
                            Antenatal Packages
                          </button>
                          <div
                            className="accordion__panel"
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                              display: "none",
                            }}
                          >
                            <p
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                marginTop: "0px",
                                letterSpacing: "0.4px",
                                maxWidth: "676px",
                                width: "100%",
                                marginBottom: "30px",
                              }}
                            >
                              At Aster, we offer the most affordable Antenatal
                              Packages which are available at the Aster Clinics
                              and Aster Hospital across the UAE. This package
                              includes the consultations with the gynecologists,
                              along with regular tests and scans throughout the
                              period of pregnancy.
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                              padding: "16px 40px 16px 24px",
                              position: "relative",
                              width: "100%",
                              display: "block",
                              textAlign: "start",
                            }}
                          >
                            Continuity Of Care
                          </button>
                          <div
                            className="accordion__panel"
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                              display: "none",
                            }}
                          >
                            <p
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                marginTop: "0px",
                                letterSpacing: "0.4px",
                                maxWidth: "676px",
                                width: "100%",
                                marginBottom: "30px",
                              }}
                            >
                              At Aster, we offer the most affordable Antenatal
                              Packages which are available at the Aster Clinics
                              and Aster Hospital across the UAE. This package
                              includes the consultations with the gynecologists,
                              along with regular tests and scans throughout the
                              period of pregnancy.
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                              padding: "16px 40px 16px 24px",
                              position: "relative",
                              width: "100%",
                              display: "block",
                              textAlign: "start",
                            }}
                          >
                            Maternity Packages
                          </button>
                          <div
                            className="accordion__panel"
                            style={{
                              boxSizing: "border-box",
                              padding: "11px 19px 30px 30px",
                              display: "none",
                            }}
                          >
                            <p
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                marginTop: "0px",
                                letterSpacing: "0.4px",
                                maxWidth: "676px",
                                width: "100%",
                                marginBottom: "30px",
                              }}
                            >
                              At Aster, we offer the most affordable Antenatal
                              Packages which are available at the Aster Clinics
                              and Aster Hospital across the UAE. This package
                              includes the consultations with the gynecologists,
                              along with regular tests and scans throughout the
                              period of pregnancy.
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                                href="https://www.aster.om/specialisations/detail"
                                target="_self"
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
                    <div
                      className="tab-horizontal aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "788px",
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
                            className="tab-horizontal__nav-item : text--18 text--sb is-active"
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
                              borderRadius: "15px 0px 0px 15px",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
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
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              Treatments
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              borderRadius: "0px 15px 15px 0px",
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
                        className="tab-horizontal__panel is-active"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "block" }}
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
                          Heart disease treatments vary by condition. For
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
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Treatments:
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
                          Heart disease treatments vary by condition. For
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
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Heart disease treatments vary by condition. For
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
                    </div>
                  </div>
                </div>
                <div
                  className="mod-tab__panel"
                  role="tabpanel"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    minHeight: "500px",
                    display: "none",
                  }}
                >
                  <button
                    className="tab-nav__link : d-md-none text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
                      color: "rgb(20, 77, 146)",
                      padding: "12px 38px 12px 16px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                      transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                      backgroundColor: "rgb(255, 255, 255)",
                      position: "relative",
                      userSelect: "none",
                      width: "100%",
                      minHeight: "60px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "none",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      Nuclear Cardiology
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
                  </button>
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="tab-horizontal aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "788px",
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
                            className="tab-horizontal__nav-item : text--18 text--sb is-active"
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
                              borderRadius: "15px 0px 0px 15px",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
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
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              Treatments
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              borderRadius: "0px 15px 15px 0px",
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
                        className="tab-horizontal__panel is-active"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "block" }}
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
                          Lorem ipsum dolor sit amet:
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
                          Donec faucibus ornare auctor. Aenean id lorem id metus
                          laoreet aliquam et quis odio. Pellentesque congue,
                          felis in consequat feugiat, turpis arcu varius metus,
                          ut luctus nisl dolor nec est. Quisque sed porta orci.
                          Curabitur gravida nibh sed leo luctus ornare. Vivamus
                          bibendum volutpat enim eget commodo..
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
                          Duis aliquet at metus consectetur pharetra. Etiam
                          tristique massa erat, nec rhoncus risus bibendum ut.
                          Fusce fringilla, turpis non dapibus fringilla, tellus
                          sem pulvinar ligula, ac semper lacus est ut eros.
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
                          Cras non vehicula nisl. Sed hendrerit ipsum erat, vel
                          placerat magna efficitur id. Morbi cursus erat vel
                          ante commodo elementum. Proin in vestibulum metus, in
                          venenatis elit. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Nunc eu dapibus velit. Ut efficitur mauris
                          sed odio varius hendrerit.
                        </p>
                      </div>
                      <div
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Cras non vehicula nisl:
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
                          Heart disease treatments vary by condition. For
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
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Sed non auctor libero:
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
                          Heart disease treatments vary by condition. For
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
                    </div>
                  </div>
                </div>
                <div
                  className="mod-tab__panel"
                  role="tabpanel"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    minHeight: "500px",
                    display: "none",
                  }}
                >
                  <button
                    className="tab-nav__link : d-md-none text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
                      color: "rgb(20, 77, 146)",
                      padding: "12px 38px 12px 16px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                      transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                      backgroundColor: "rgb(255, 255, 255)",
                      position: "relative",
                      userSelect: "none",
                      width: "100%",
                      minHeight: "60px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "none",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      Echocardiography
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
                  </button>
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="tab-horizontal aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "788px",
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
                            className="tab-horizontal__nav-item : text--18 text--sb is-active"
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
                              borderRadius: "15px 0px 0px 15px",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
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
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              Treatments
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              borderRadius: "0px 15px 15px 0px",
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
                        className="tab-horizontal__panel is-active"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "block" }}
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
                          Echocardiography:
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
                          Heart disease treatments vary by condition. For
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
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Treatments:
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
                          Heart disease treatments vary by condition. For
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
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Heart disease treatments vary by condition. For
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
                    </div>
                  </div>
                </div>
                <div
                  className="mod-tab__panel"
                  role="tabpanel"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    minHeight: "500px",
                    display: "none",
                  }}
                >
                  <button
                    className="tab-nav__link : d-md-none text--blue"
                    role="tab"
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      border: "0px",
                      boxShadow: "none",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      lineHeight: "inherit",
                      textAlign: "inherit",
                      fontStyle: "inherit",
                      fontFamily: "inherit",
                      borderRadius: "0px",
                      textTransform: "none",
                      cursor: "pointer",
                      appearance: "button",
                      color: "rgb(20, 77, 146)",
                      padding: "12px 38px 12px 16px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                      transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                      backgroundColor: "rgb(255, 255, 255)",
                      position: "relative",
                      userSelect: "none",
                      width: "100%",
                      minHeight: "60px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "none",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      Cardiac Electrophysiology
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
                  </button>
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      className="tab-horizontal aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "788px",
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
                            className="tab-horizontal__nav-item : text--18 text--sb is-active"
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
                              borderRadius: "15px 0px 0px 15px",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
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
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              Treatments
                            </span>
                          </button>
                          <button
                            className="tab-horizontal__nav-item : text--18 text--sb"
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
                              borderRadius: "0px 15px 15px 0px",
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
                        className="tab-horizontal__panel is-active"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "block" }}
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
                          Cardiac Electrophysiology:
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec faucibus ornare auctor. Aenean id lorem id
                          metus laoreet aliquam et quis odio. Pellentesque
                          congue, felis in consequat feugiat, turpis arcu varius
                          metus, ut luctus nisl dolor nec est. Quisque sed porta
                          orci. Curabitur gravida nibh sed leo luctus ornare.
                          Vivamus bibendum volutpat enim eget commodo. Duis
                          aliquet at metus consectetur pharetra. Etiam tristique
                          massa erat, nec rhoncus risus bibendum ut. Fusce
                          fringilla, turpis non dapibus fringilla, tellus sem
                          pulvinar ligula, ac semper lacus est ut eros.
                        </p>
                      </div>
                      <div
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                          Treatments:
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
                          Cras non vehicula nisl. Sed hendrerit ipsum erat, vel
                          placerat magna efficitur id. Morbi cursus erat vel
                          ante commodo elementum. Proin in vestibulum metus, in
                          venenatis elit. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Nunc eu dapibus velit. Ut efficitur mauris
                          sed odio varius hendrerit. Vivamus ornare tortor eget
                          egestas vestibulum. Quisque commodo ante non erat
                          pretium pulvinar. Donec sed sollicitudin risus.
                          Integer hendrerit venenatis metus. Nulla erat elit,
                          convallis id commodo ac, efficitur eu enim. Vivamus
                          fringilla a metus a suscipit. Integer eget efficitur
                          turpis, at pretium quam.
                        </p>
                      </div>
                      <div
                        className="tab-horizontal__panel"
                        role="tabpanel"
                        tabIndex="0"
                        style={{ boxSizing: "border-box", display: "none" }}
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
                            marginBottom: "0px",
                          }}
                        >
                          Sed non auctor libero. Duis ac tellus nec ex dignissim
                          maximus ac ut arcu. Donec efficitur nulla accumsan
                          interdum ultrices. Sed eleifend ante elit, sed
                          molestie enim lobortis ac. Nam ut urna est. Duis sit
                          amet purus imperdiet, malesuada metus nec, venenatis
                          risus. Praesent a nibh ac ligula hendrerit viverra a
                          non mi. Integer ultrices, eros ut tristique porta,
                          erat lorem lacinia orci, ac pellentesque quam purus
                          vitae augue. Curabitur vitae risus malesuada, pulvinar
                          augue id, dignissim massa. Integer porta condimentum
                          pellentesque. Suspendisse sed volutpat mi. Ut posuere
                          sagittis arcu, sed aliquet dolor facilisis a. Donec
                          molestie dui ligula, id dictum turpis consequat
                          dictum.
                        </p>
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
    </>
  );
}
