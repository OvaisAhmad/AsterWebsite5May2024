import React from "react";
import { useTranslation } from "next-i18next";

export default function AInformation2() {
  const { t } = useTranslation("");
  return (
    <>
      <section
        className="sec-default : sec-graybox-list"
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
          <div className="graybox-list" style={{ boxSizing: "border-box" }}>
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
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="graybox"
                  style={{
                    boxSizing: "border-box",
                    padding: "22px 36px",
                    borderRadius: "18px",
                    width: "100%",
                    backgroundColor: "rgb(250, 250, 250)",
                    marginBottom: "15px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(20, 77, 146)",
                      fontSize: "24px",
                      lineHeight: 1.54,
                      margin: "0px 0px 15px",
                      marginTop: "0px",
                      fontFamily: '"Ivy Journal", sans-serif',
                      fontWeight: 400,
                      marginBottom: "5px",
                    }}
                  >
                    {t("careers.Benefits")}
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    {t("careers.benifitdesc")}
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      marginTop: "28px",
                    }}
                  >
                    {t("careers.benifitdesc2")}
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      marginTop: "28px",
                    }}
                  >
                    {t("careers.benifitdesc3")}
                  </p>
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
                  transitionDelay: "0.2s",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="graybox"
                  style={{
                    boxSizing: "border-box",
                    padding: "22px 36px",
                    borderRadius: "18px",
                    width: "100%",
                    backgroundColor: "rgb(250, 250, 250)",
                    marginBottom: "15px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(20, 77, 146)",
                      fontSize: "24px",
                      lineHeight: 1.54,
                      margin: "0px 0px 15px",
                      marginTop: "0px",
                      fontFamily: '"Ivy Journal", sans-serif',
                      fontWeight: 400,
                      marginBottom: "5px",
                    }}
                  >
                    {t("careers.Values")}
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    {t("careers.valuesdesc")}
                  </p>
                </div>
                <div
                  className="graybox"
                  style={{
                    boxSizing: "border-box",
                    padding: "22px 36px",
                    borderRadius: "18px",
                    width: "100%",
                    backgroundColor: "rgb(250, 250, 250)",
                    marginBottom: "15px",
                  }}
                >
                  <h4
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(20, 77, 146)",
                      fontSize: "24px",
                      lineHeight: 1.54,
                      margin: "0px 0px 15px",
                      marginTop: "0px",
                      fontFamily: '"Ivy Journal", sans-serif',
                      fontWeight: 400,
                      marginBottom: "5px",
                    }}
                  >
                    {t("careers.Community")}
                  </h4>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    {t("careers.communitydesc")}
                  </p>
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
