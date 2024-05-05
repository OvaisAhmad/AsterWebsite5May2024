import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

export default function AInformation() {
  const { t } = useTranslation("");
  return (
    <>
      <div
        id="c165"
        className="frame frame-default frame-type-text frame-layout-0"
        style={{ boxSizing: "border-box" }}
      >
        <section
          className="sec-default : editor-text"
          style={{
            boxSizing: "border-box",
            display: "block",
            position: "relative",
            marginBottom: "90px",
            fontFamily: "Lato, sans-serif",
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
            <p
              style={{
                boxSizing: "border-box",
                letterSpacing: "0.4px",
                margin: "0px 0px 34px",
                marginTop: "0px",
                marginBottom: "34px",
              }}
            >
             {t("awards.para1")}
            </p>
            <p
              style={{
                boxSizing: "border-box",
                letterSpacing: "0.4px",
                margin: "0px 0px 34px",
                marginTop: "0px",
                marginBottom: "34px",
              }}
            >
              {t("awards.para2")}
            </p>
            <p
              style={{
                boxSizing: "border-box",
                letterSpacing: "0.4px",
                margin: "0px 0px 34px",
                marginTop: "0px",
                marginBottom: "34px",
              }}
            >
              <Image
                height={300}
                width={232}
                alt=""
                src="/NABH-for-Hospital-232x300-1.jpg"
                style={{
                  boxSizing: "border-box",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  margin: "0px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                  height: "300px",
                  width: "232px",
                }}
              />
                     
              <Image
                height={300}
                width={232}
                alt=""
                src="/award-accrediation-232x300-1.jpg"
                style={{
                  boxSizing: "border-box",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  margin: "0px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                  height: "300px",
                  width: "232px",
                }}
              />
                    
              <Image
                height={300}
                width={232}
                alt=""
                src="/healthcare-232x300-1.jpg"
                style={{
                  boxSizing: "border-box",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  margin: "0px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                  height: "300px",
                  width: "232px",
                }}
              />
            </p>
            <p
              style={{
                boxSizing: "border-box",
                letterSpacing: "0.4px",
                margin: "0px 0px 34px",
                marginTop: "0px",
                marginBottom: "34px",
              }}
            >
                    {t("awards.NABH For Hospital")}             {t("awards.Award For Quality Beyond Accrediation")}
                        {t("awards.Best Healthcare Entrepreneur")}
            </p>
          </div>
        </section>
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
