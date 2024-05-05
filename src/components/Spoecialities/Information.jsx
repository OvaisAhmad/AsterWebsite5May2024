import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

export default function Information({ post }) {
  const { t } = useTranslation("");
  const chunkSize = 10;
  const chunks = [];

  for (let i = 0; i < post.length; i += chunkSize) {
    chunks.push(post.slice(i, i + chunkSize));
  }

  return (
    <>
      <div
        id="c41"
        className="frame frame-default frame-type-list frame-layout-0"
        style={{ boxSizing: "border-box" }}
      >
        <div className="tx-doctor" style={{ boxSizing: "border-box" }}>
          <section
            className="sec-default : sec-specialities-list aos-init aos-animate"
            role="contentinfo"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              display: "block",
              position: "relative",
              marginBottom: "90px",
              marginTop: "90px",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              opacity: 1,
              transform: "none",
            }}
          >
            <div
              className="specialities-list"
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
                  {chunks.map((chunk, columnIndex) => (
                    <div
                      key={columnIndex}
                      className="col-sm-4 : col-xs-12"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "33.333%",
                        maxWidth: "33.333%",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                      }}
                    >
                      <ul
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        {chunk.map((post, index) => (
                          <Link
                            key={index}
                            className="stretched-link"
                            href={`/specialities/${post.slug}`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              zIndex: 4,
                            }}
                          >
                            <li
                              className="specialities-list__heading : text--18 text--hvy specialities-list__item"

                              style={{
                                boxSizing: "border-box",
                                fontSize: "18px",
                                lineHeight: 1.22,
                                letterSpacing: "0.45px",
                                fontWeight: 800,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "42px",
                                overflow: "hidden",
                                padding: "10px",
                                transition:
                                  "box-shadow 0.3s ease 0s, transform 0.3s ease 0s",
                                width: "222px",
                                height: "64px",
                                position: "relative",
                                textAlign: "center",
                                border: "1px solid rgb(20, 77, 146)",
                                margin: "0px auto 38px",
                                color: "rgb(0, 180, 141)",
                                pointerEvents: "none",
                              }}
                            >

                              {post.title}

                            </li>
                          </Link>

                        ))}
                      </ul>

                    </div>
                  ))}
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
