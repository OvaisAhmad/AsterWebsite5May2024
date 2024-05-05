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
                  id="c94"
                  className="frame frame-default frame-type-menu_subpages frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
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
                        Rights
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
                        {/* <i
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
                        /> */}
                        <img src="/right-arrow.svg" alt="Instagram Icon" width="6" height="12"
                          style={{ filter: 'invert(1)', fill: 'black' }}
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
                        Responsibilities
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
                  </div>
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
                  <div
                    className="mod-tab__panel-content"
                    style={{ boxSizing: "border-box", display: "block" }}
                  >
                    <div
                      id="c92"
                      className="frame frame-default frame-type-text frame-layout-0"
                      style={{ boxSizing: "border-box" }}
                    >
                      <section
                        className="sec-default : editor-text"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          position: "relative",
                          fontFamily: "Lato, sans-serif",
                          marginBottom: "30px",
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
                          <h4
                            style={{
                              boxSizing: "border-box",
                              margin: "0px 0px 15px",
                              color: "rgb(20, 77, 146)",
                              fontSize: "24px",
                              lineHeight: 1.54,
                              fontFamily: "inherit",
                              letterSpacing: "0.6px",
                              marginBottom: "25px",
                              marginTop: "0px",
                            }}
                          >
                            Rights
                          </h4>
                          <p
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "0.4px",
                              margin: "0px 0px 34px",
                              marginTop: "0px",
                              marginBottom: "30px",
                            }}
                          >
                            Being a valued patient, you and your family have the
                            following Rights:
                          </p>
                          <ol
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              margin: "0px 0px 34px",
                              marginTop: "0px",
                              marginBottom: "34px",
                              listStyle: "none",
                              counterReset: "ol_text_counter 0",
                            }}
                          >
                            {" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To be informed and educated in a language that you
                              can understand
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To receive medical advice and treatment which
                              fully meets the currently accepted standards of
                              care & Quality
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To be given a clear description of your medical
                              condition, estimated cost of treatment and to
                              involve you in decision about your care
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To have your privacy & dignity and your religious
                              and cultural beliefs respected
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To have information regarding your medical
                              condition kept confidential
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To have information of your care providers
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To have a safe and protected environment for you &
                              your relatives
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To make suggestions & voice complaints
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To refuse treatment
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To have access to your clinical records
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To be protected from physical abuse and neglect
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              To obtain informed consent from you before any
                              procedure/ surgery/ treatment/ anesthesia/
                              initiation of any research protocol/ blood & blood
                              product transfusion
                            </li>{" "}
                            <li
                              style={{
                                boxSizing: "border-box",
                                letterSpacing: "0.4px",
                                marginTop: "4px",
                                paddingLeft: "30px",
                                position: "relative",
                                counterIncrement: "ol_text_counter 1",
                              }}
                            >
                              Right to seek an addition opinion regarding
                              clinical care
                            </li>{" "}
                          </ol>
                        </div>
                      </section>
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
