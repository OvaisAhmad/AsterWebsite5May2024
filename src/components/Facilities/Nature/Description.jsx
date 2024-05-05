import React from "react";
import Link from "next/link";

export default function FDescription() {
  return (
    <>
      <div
        className="page-header__bottom aos-init aos-animate"
        style={{
          boxSizing: "border-box",
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
            <div
              className="col-xs-12 : col-sm-6"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "50%",
                maxWidth: "50%",
                paddingLeft: "15px",
                paddingRight: "15px",
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
                          fontWeight: 700,
                        }}
                      >
                        <Link
                          className="breadcrumbs__link : text--14"
                          href="#"
                          target="_self"
                          title="ASTER NURTURE"
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
                          {" / ASTER NURTURE"}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="page-header__text"
                style={{ boxSizing: "border-box", marginTop: "27px" }}
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
                  Aster’s legacy of excellence especially in mother and child
                  care, will ensure you that we will look after you at every
                  step as you embark on this journey of parenthood.
                </p>
              </div>
            </div>
            <div
              className="col-sm-6 : col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "50%",
                maxWidth: "50%",
                paddingLeft: "15px",
                paddingRight: "15px",
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
                  alt="Admission & Discharge"
                  src="/page_header_aster_nurture.jpg"
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
              className="col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "100%",
                maxWidth: "100%",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <div
                className="page-header__fullwidth-content"
                style={{ boxSizing: "border-box", marginTop: "50px" }}
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
                  At Aster, we believe a child is life’s greatest gift and this
                  gift has to be nurtured and cared for.As the name suggests,
                  Aster Nurture is a programme that aims at nurturing, caring
                  and protecting the mother and the new born baby from the time
                  when the mother conceives till when the child is 5 years old
                  .After enrolling in this programme, you will be entitled to a
                  range of benefits that will ensure you a healthy and happy
                  pregnancy. The care also continues into post pregnancy to
                  ensure the holistic wellbeing of you and your baby.
                </p>
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
