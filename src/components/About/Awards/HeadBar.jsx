import React from "react";
import { useTranslation } from "next-i18next";

export default function AHeadBar() {
  const { t } = useTranslation("");
  return (
    <>
      <div
        className="page-header__top aos-init aos-animate mt-[40px]"
        style={{
          boxSizing: "border-box",
          padding: "60px 0px 20px",
          display: "flex",
          alignItems: "center",
          minHeight: "150px",
          backgroundImage:
            "linear-gradient(to right, rgb(20, 77, 146) 0%, rgb(0, 180, 141) 83%)",
          color: "rgb(245, 245, 245)",
          fontFamily: '"Ivy Journal", sans-serif',
          pointerEvents: "auto",
          transitionTimingFunction: "ease",
          transitionDuration: "1s",
          transitionProperty: "opacity, transform, -webkit-transform",
          opacity: 1,
          transform: "none",
        }}
      >
        <div
          className="container "
          style={{
            boxSizing: "border-box",
            margin: "0px auto",
            padding: "0px",
            display: "block",
            width: "100%",
            maxWidth: "1240px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            className="title : title--h4"
            style={{
              boxSizing: "border-box",
              fontSize: "24px",
              lineHeight: 1.54,
              color: "inherit",
            }}
          >
            <h1
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
            >
              {t("awards.Awards & Accolades")}
            </h1>
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
