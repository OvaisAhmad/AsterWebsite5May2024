import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function AInformation3() {
  const { t } = useTranslation("");
  return (
    <>
      <section
        className="sec-cta margin_bottom_md"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom:60,
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
            className="cta : cta--career aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              padding: "55px 0px 46px",
              overflow: "hidden",
              borderRadius: "20px",
              position: "relative",
              color: "rgb(255, 255, 255)",
              textAlign: "center",
              backgroundImage:
                "radial-gradient(circle, rgb(20, 77, 146) 0%, rgb(10, 39, 73) 100%)",
              minHeight: "328px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              opacity: 1,
              transform: "none",
            }}
          >
            <div
              className="image-aspect : image-aspect--cover"
              style={{
                boxSizing: "border-box",
                height: "100%",
                left: "0px",
                overflow: "hidden",
                position: "absolute",
                width: "100%",
                pointerEvents: "none",
                top: "0px",
              }}
            >
              <div
                className="image-aspect__bg"
                style={{
                  boxSizing: "border-box",
                  height: "100%",
                  left: "0px",
                  position: "absolute",
                  width: "100%",
                  top: "0px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  backgroundImage:
                    'url("/AHQ.jpg")',
                }}
              >
                <Image
                width={100}
                height={100}
                  className="responsive-bg-img : no-lazy"
                  alt="Image"
                  src="/AHQ.jpg"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    opacity: 0,
                    zIndex: -1,
                    pointerEvents: "none",
                    width: "0px",
                    height: "0px",
                  }}
                />
              </div>
            </div>
            <div
              className="cta__text"
              style={{
                boxSizing: "border-box",
                margin: "0px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "720px",
                width: "100%",
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
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600,
                  marginBottom: "44px",
                }}
              >
                <h4
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
                  {t("careers.join")}
                </h4>
              </div>
              <Link
                className="btn : btn--default"
                href="https://hcdt.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX"
                target="_self"
                title="View Current openings"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "64px",
                  border: "1px solid rgb(0, 179, 140)",
                  transition:
                    "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                  cursor: "pointer",
                  minWidth: "236px",
                  minHeight: "50px",
                  backgroundColor: "rgb(0, 179, 140)",
                  color: "rgb(255, 255, 255)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  textAlign: "center",
                }}
              >
                <span
                  className="btn__text"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {t("careers.View Current openings")}
                </span>
              </Link>
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
