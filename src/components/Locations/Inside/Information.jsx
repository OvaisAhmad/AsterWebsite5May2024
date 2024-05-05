import React from "react";
import Link from "next/link";

export default function Information({post}) {
  return (
    <>
      <section
        className="sec-default : sec-location-info"
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
            className="location-info"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid rgb(112, 112, 112)",
              paddingBottom: "50px",
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
                className="col-md-6 : col-xs-12 aos-init aos-animate"
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
                  transitionProperty: "opacity, transform, -webkit-transform",
                  transitionDelay: "0.2s",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="location-info__left"
                  style={{ boxSizing: "border-box", paddingRight: "24px" }}
                />
              </div>
              <div
                className="col-lg-5 : col-lg-offset-1 col-md-6 col-xs-12"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  flexBasis: "41.667%",
                  maxWidth: "41.667%",
                  marginLeft: "8.333%",
                }}
              >
                <div
                  className="location-info__right aos-init aos-animate"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
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
                    className="location-info__right-top"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "36px",
                    }}
                  >
                    <address
                      style={{
                        boxSizing: "border-box",
                        fontStyle: "normal",
                        lineHeight: "inherit",
                        margin: "0px",
                        marginBottom: "0px",
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
                        <strong
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 700,
                            color: "rgb(20, 77, 146)",
                          }}
                        >
                         {post.title}
                        </strong>
                      </p>
                    </address>
                    <Link
                      className="location-info__tel : text--sb text--21"
                      href="tel:"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        fontSize: "21px",
                        lineHeight: 1.52,
                        letterSpacing: "0.53px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "55px",
                        color: "rgb(20, 77, 146)",
                      }}
                    >
                      <i
                        className="icon : icon-telephone"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          position: "relative",
                          width: "24px",
                          height: "26px",
                          marginRight: "4px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        800
                        <strong
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 700,
                            color: "rgb(20, 77, 146)",
                          }}
                        >
                          ASTER
                        </strong>
                      </span>
                    </Link>
                    <Link
                      className="location-info__tour"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        color: "inherit",
                        position: "absolute",
                        right: "-80px",
                        top: "-9px",
                        width: "60px",
                        height: "74px",
                        display: "block",
                      }}
                    >
                      <img
                        alt="360 Facilities Tour"
                        src="/vr_tour.svg"
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
                    </Link>
                  </div>
                  <div
                    className="location-info__map : p-relative"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      borderRadius: "19px",
                      overflow: "hidden",
                      marginTop: "44px",
                      height: "288px",
                    }}
                  >
                    <img
                      className="map-init"
                      alt="Image"
                      src="/map.jpg"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        margin: "0px",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "cover",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: "0px",
                        top: "0px",
                      }}
                    />
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
