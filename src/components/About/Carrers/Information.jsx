import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

export default function AInformation() {
  const { t } = useTranslation("");
  return (
    <>
      <section
        className="sec-default : sec-image-text-card-list"
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
            className="image-text-card-list aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              opacity: 1,
              transform: "none",
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
                className="col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "100%",
                  maxWidth: "100%",
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
                <article
                  className="image-text-card : image-text-card--horizontal"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    gap: "54px",
                    maxWidth: "1088px",
                    display: "grid",
                    gridTemplateColumns: "444px 1fr",
                    marginBottom: "90px",
                  }}
                >
                  <figure
                    className="image-text-card__image : p-relative"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      position: "relative",
                      borderRadius: "18px",
                      overflow: "hidden",
                      height: "230px",
                      margin: "48px 0px 0px",
                    }}
                  >
                    <Image
                    width={0}
                    height={0}
                    alt=""
                      src="/culture.jpg"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "cover",
                        margin: "0px",
                        height: "100%",
                        left: "0px",
                        position: "absolute",
                        width: "100%",
                        top: "0px",
                        transition: "transform 0.3s ease 0s",
                      }}
                    />
                  </figure>
                  <div
                    className="image-text-card__content"
                    style={{ boxSizing: "border-box" }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        color: "rgb(20, 77, 146)",
                        fontSize: "24px",
                        lineHeight: 1.54,
                        margin: "0px 0px 15px",
                        marginTop: "0px",
                        marginBottom: "10px",
                        fontWeight: 400,
                        fontFamily: '"Ivy Journal", sans-serif',
                      }}
                    >
                      {t("careers.Culture")}
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
                      {t("careers.culturedesc1")}
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
                      {t("careers.culturedesc2")}
                    </p>
                  </div>
                </article>
              </div>
              <div
                className="col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "100%",
                  maxWidth: "100%",
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
                <article
                  className="image-text-card : image-text-card--horizontal"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    gap: "54px",
                    maxWidth: "1088px",
                    display: "grid",
                    gridTemplateColumns: "444px 1fr",
                    marginBottom: "36px",
                  }}
                >
                  <figure
                    className="image-text-card__image : p-relative"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      position: "relative",
                      borderRadius: "18px",
                      overflow: "hidden",
                      height: "230px",
                      margin: "48px 0px 0px",
                    }}
                  >
                    <Image
                    width={0}
                    height={0}
                    alt=""
                      src="/diversity.jpg"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "cover",
                        margin: "0px",
                        height: "100%",
                        left: "0px",
                        position: "absolute",
                        width: "100%",
                        top: "0px",
                        transition: "transform 0.3s ease 0s",
                      }}
                    />
                  </figure>
                  <div
                    className="image-text-card__content"
                    style={{ boxSizing: "border-box" }}
                  >
                    <h4
                      style={{
                        boxSizing: "border-box",
                        color: "rgb(20, 77, 146)",
                        fontSize: "24px",
                        lineHeight: 1.54,
                        margin: "0px 0px 15px",
                        marginTop: "0px",
                        marginBottom: "10px",
                        fontWeight: 400,
                        fontFamily: '"Ivy Journal", sans-serif',
                      }}
                    >
                      {t("careers.Diversity And Inclusion")}
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
                      {t("careers.inclusiondesc1")}
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
                      {t("careers.inclusiondesc2")}
                    </p>
                  </div>
                </article>
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
