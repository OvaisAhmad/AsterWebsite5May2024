import React from "react";
import Link from "next/link";

export default function Description() {
  return (
    <>
      <div className="page-header__bottom" style={{ boxSizing: "border-box" }}>
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
              className="col-xs-12 : col-sm-6 aos-init aos-animate"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "50%",
                maxWidth: "50%",
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
                className="breadcrumbs"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  margin: "34px 0px 0px",
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
                  <nav
                    aria-label="breadcrumb"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <ul
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        fontSize: "0px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <li
                        className="breadcrumbs__item : breadcrumbs__item--home"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                          paddingLeft: "0px",
                          paddingRight: "5px",
                        }}
                      >
                        <Link
                          className="breadcrumbs__link : text--14"
                          href="/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            transition:
                              "color 0.3s ease 0s, border 0.3s ease 0s",
                            whiteSpace: "nowrap",
                            display: "block",
                            color: "rgb(20, 77, 146)",
                            letterSpacing: "0.7px",
                            textTransform: "uppercase",
                            fontSize: "0px",
                            lineHeight: 0,
                          }}
                        >
                          {"Home"}
                          <img src="/home.svg" alt="Instagram Icon" width="17" height="17"
                          />
                        </Link>
                      </li>
                      <li
                        className="breadcrumbs__item"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <Link
                          className="breadcrumbs__link : text--14"
                          href="#"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            transition:
                              "color 0.3s ease 0s, border 0.3s ease 0s",
                            fontSize: "14px",
                            lineHeight: 1.4,
                            whiteSpace: "nowrap",
                            display: "block",
                            color: "rgb(20, 77, 146)",
                            letterSpacing: "0.7px",
                            textTransform: "uppercase",
                          }}
                        >
                          {" / SPECIALISATION"}
                        </Link>
                      </li>
                      <li
                        className="breadcrumbs__item"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                          fontWeight: 700,
                        }}
                      >
                        <Link
                          className="breadcrumbs__link : text--14"
                          href="#"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            transition:
                              "color 0.3s ease 0s, border 0.3s ease 0s",
                            fontSize: "14px",
                            lineHeight: 1.4,
                            whiteSpace: "nowrap",
                            display: "block",
                            color: "rgb(20, 77, 146)",
                            letterSpacing: "0.7px",
                            textTransform: "uppercase",
                          }}
                        >
                          {" / Cardiology"}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="page-header__text"
                style={{ boxSizing: "border-box", marginTop: "27px" }}
              />
            </div>
            <div
              className="col-sm-6 : col-xs-12 aos-init aos-animate"
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
                className="page-header__image"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "18px",
                  overflow: "hidden",
                  height: "290px",
                  marginTop: "-90px",
                }}
              >
                <img
                  height={290}
                  width={530}
                  alt="Cardiology"
                  src="/cardiology_header_image.jpg"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              className="col-xs-12 aos-init aos-animate"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "100%",
                maxWidth: "100%",
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
                className="page-header__fullwidth-content editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                  marginTop: "50px",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  A healthy heart is a sign of overall well being. The
                  department of cardiology at Aster Medical Centres understands
                  your heart like none other. Cardiology is the study and
                  treatment of disorders of the heart; it is a medical specialty
                  which is involved in the care of all things associated with
                  the heart and the arteries. The field includes medical
                  diagnosis and treatment of congenital heart defects, coronary
                  artery disease, and valvular heart disease and so on.
                </p>
                <ul
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                    listStyle: "none",
                  }}
                >
                  {" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      paddingLeft: "20px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    ECG
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      paddingLeft: "20px",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                    }}
                  >
                    Echocardiogram (scan) with color Doppler
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      paddingLeft: "20px",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                    }}
                  >
                    Tread Mill Exercise Test
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      paddingLeft: "20px",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                    }}
                  >
                    Hotler Monitoring (24 Hr Ambulatory ECG Monitor)
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      paddingLeft: "20px",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                    }}
                  >
                    24 Hrs Ambulatory BP monitoring
                  </li>{" "}
                </ul>
              </div>
            </div>
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
