import React from "react";

export default function Description() {
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
            maxWidth: "1106px",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <div
            className="row :"
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
              className="col-xs-12 :"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "100%",
                maxWidth: "100%",
                paddingLeft: "8px",
                paddingRight: "8px",
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
                    maxWidth: "1106px",
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
                        <a
                          className="breadcrumbs__link : text--14"
                          href="https://www.aster.om/"
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
                          <i
                            className="icon : icon-home"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              position: "relative",
                              width: "17px",
                              height: "17px",
                            }}
                          />
                        </a>
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
                        <a
                          className="breadcrumbs__link : text--14"
                          href="https://www.aster.om/campaigns"
                          target="_self"
                          title="Campaigns"
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
                          {"Campaigns"}
                        </a>
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
