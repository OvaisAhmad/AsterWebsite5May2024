import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Information({ post }) {
  return (
    <>
      <div
        id="c70"
        className="frame frame-default frame-type-list frame-layout-0 mt-[70px]"
        style={{ boxSizing: "border-box" }}
      >
        <div className="tx-doctor" style={{ boxSizing: "border-box" }}>
          <section
            className="sec-default : sec-hospital-list aos-init aos-animate"
            role="contentinfo"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              display: "block",
              position: "relative",
              marginBottom: "90px",
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
                padding: "0px",
                display: "block",
                width: "100%",
                maxWidth: "1240px",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <div
                className="hospital-list"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="hospital-list-tab-panel is-active"
                  style={{ boxSizing: "border-box", display: "block" }}
                >
                  <div
                    className="hospital-list__inner"
                    style={{
                      boxSizing: "border-box",
                      gap: "64px 80px",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      justifyContent: "center",
                    }}
                  >
                    {
                      post.map((posts) => (


                        <div
                          key={posts.slug}
                          className="hospital-card : text--blue aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(20, 77, 146)",
                            border: "1px solid rgb(0, 179, 140)",
                            borderRadius: "18px",
                            overflow: "hidden",
                            pointerEvents: "auto",
                            width: "100%",
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
                            className="hospital-card__name : text--14 text--sb"
                            style={{
                              boxSizing: "border-box",
                              fontSize: "14px",
                              lineHeight: 1.4,
                              fontWeight: 600,
                              gap: "0px",
                              padding: "12px 20px",
                              display: "grid",
                              gridTemplateColumns: "20px 1fr",
                              justifyContent: "center",
                              backgroundColor: "rgb(20, 77, 146)",
                              color: "rgb(255, 255, 255)",
                              alignItems: "center",
                              letterSpacing: "0.7px",
                              minHeight: 65
                            }}
                          >
                            <i
                              className="icon : icon-map-mark"
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                position: "relative",
                                width: "18px",
                                height: "22px",
                                background: "url(/location.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 24px"
                              }}
                            />
                            <span style={{ boxSizing: "border-box" }}>
                              {posts.title}
                            </span>
                          </div>
                          <div
                            className="hospital-card__header : text--10 text--bd bg-gray"
                            style={{
                              boxSizing: "border-box",
                              fontSize: "10px",
                              lineHeight: 1.5,
                              fontWeight: 700,
                              backgroundColor: "rgb(243, 246, 249)",
                              display: "grid",
                              gridTemplateColumns: "50% 50%",
                            }}
                          >
                            <div
                              className="hospital-card__location"
                              style={{
                                boxSizing: "border-box",
                                padding: "16px",
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "flex-start",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link
                                className="btn : btn--secondary"
                                href={posts.locationFields.mapUrl? posts.locationFields.mapUrl: ''}
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
                                  fontWeight: 700,
                                  textAlign: "center",
                                  borderColor: "rgb(20, 77, 146)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  color: "rgb(20, 77, 146)",
                                  padding: "6px",
                                  minHeight: "1px",
                                  lineHeight: 1,
                                  fontSize: "9px",
                                  minWidth: "70px",
                                  marginTop: "8px",
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
                                  View Map
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="hospital-card__body"
                            style={{
                              boxSizing: "border-box",
                              padding: "32px 24px",
                            }}
                          >
                            <div
                              className="hospital-card__facilities"
                              style={{
                                boxSizing: "border-box",
                                gap: "33px",
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                alignItems: "center",
                              }}
                            >
                              <div
                                className="hospital-card__facilities-item : text--hvy text-center"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 800,
                                  textAlign: "center",
                                }}
                              >
                                <Image
                                  width={100}
                                  height={100}
                                  alt="BEDS"
                                  src="/beds.svg"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "20px",
                                    maxWidth: "20px",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                                <div
                                  className="title : title--h4"
                                  style={{
                                    boxSizing: "border-box",
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
                                  />
                                </div>
                                <div
                                  className="text--9"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "9px",
                                    lineHeight: 1,
                                    letterSpacing: "0.23px",
                                    marginTop: 6,
                                  }}
                                >
                                  BEDS
                                </div>
                              </div>
                              <div
                                className="hospital-card__facilities-item : text--hvy text-center"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 800,
                                  textAlign: "center",
                                }}
                              >
                                <Image
                                  width={100}
                                  height={100}
                                  alt="DOCTORS"
                                  src="/stethoscope_green.svg"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "20px",
                                    maxWidth: "20px",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                                <div
                                  className="title : title--h4"
                                  style={{
                                    boxSizing: "border-box",
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
                                  />
                                </div>
                                <div
                                  className="text--9"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "9px",
                                    lineHeight: 1,
                                    letterSpacing: "0.23px",
                                    marginTop: 6,
                                  }}
                                >
                                  DOCTORS
                                </div>
                              </div>
                              <div
                                className="hospital-card__facilities-item : text--hvy text-center"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 800,
                                  textAlign: "center",
                                }}
                              >
                                <Image
                                  width={100}
                                  height={100}
                                  alt="SPECIALISATIONS"
                                  src="/specialisation.svg"
                                  style={{
                                    boxSizing: "border-box",
                                    borderStyle: "none",
                                    verticalAlign: "middle",
                                    margin: "0px",
                                    maxHeight: "20px",
                                    maxWidth: "20px",
                                    height: "auto",
                                    width: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                                <div
                                  className="title : title--h4"
                                  style={{
                                    boxSizing: "border-box",
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
                                  />
                                </div>
                                <div
                                  className="text--9"
                                  style={{
                                    boxSizing: "border-box",
                                    fontSize: "9px",
                                    lineHeight: 1,
                                    letterSpacing: "0.23px",
                                    marginTop: 6,
                                  }}
                                >
                                  SPECIALISATIONS
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="hospital-card__footer"
                            style={{
                              boxSizing: "border-box",
                              padding: "0px 24px 20px 30px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="text--10 : text--md"
                              style={{
                                boxSizing: "border-box",
                                fontSize: "10px",
                                lineHeight: 1.5,
                                fontWeight: 500,
                              }}
                            />
                            <div
                              className="hospital-card__footer-right"
                              style={{
                                boxSizing: "border-box",
                                margin: "3px 0px 0px 10px",
                              }}
                            >
                              <Link
                                className="hospital-card__tel : text--bd text--12"
                                href="tel:+968 22496000"
                                style={{
                                  boxSizing: "border-box",
                                  backgroundColor: "transparent",
                                  textDecoration: "none",
                                  transition:
                                    "color 0.3s ease 0s, border 0.3s ease 0s",
                                  color: "inherit",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 700,
                                  gap: "5px",
                                  display: "grid",
                                  gridTemplateColumns: "12px 1fr",
                                  alignItems: "center",
                                }}
                              >
                                <i
                                  className="icon : icon-telephone"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    height: "12px",
                                    width: "12px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  +968 22496000
                                </span>
                              </Link>
                              <Link
                                className="btn : btn--default"
                                href={`/locations/${(posts.slug)}`}
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
                                  fontWeight: 700,
                                  textAlign: "center",
                                  padding: "6px",
                                  minHeight: "1px",
                                  lineHeight: 1,
                                  fontSize: "12px",
                                  minWidth: "116px",
                                  marginTop: "16px",
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
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
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
