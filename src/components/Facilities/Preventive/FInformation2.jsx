import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function FInformation2() {
  const { t } = useTranslation("");
  return (
    <>
      <section
        className="sec-default : sec-link-box-list aos-init aos-animate"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom: "90px",
          pointerEvents: "auto",
          transitionTimingFunction: "ease",
          transitionDuration: "1s",
          transitionProperty: "opacity, transform, -webkit-transform",
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
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <div
            className="link-box-list"
            style={{
              boxSizing: "border-box",
              gap: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            <Link
              className="link-box-list__item : text--18 text--bd d-flex-cc"
              href="/homecare"
              target="_self"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                lineHeight: 1.22,
                letterSpacing: "0.45px",
                fontWeight: 700,
                borderRadius: "20px",
                border: "1px solid rgb(20, 77, 146)",
                transition:
                  "background-color 0.3s ease 0s, color 0.3s ease 0s, box-shadow 0.4s ease 0s",
                padding: "30px 24px 22px",
                color: "rgb(20, 77, 146)",
                minHeight: "144px",
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                className="link-box-list__item-icon : d-flex-cc"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <img
                  src="https://www.aster.om/packages-phcp"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  fontSize: "32px",
                  lineHeight: 1.28,
                  margin: "0px",
                  display: "none",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              />
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              >
                {t("preventive.Home Care")}
                <br style={{ boxSizing: "border-box" }} /> {t("preventive.Services")}
              </p>
              <i
                className="icon : icon-arrow-right"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  position: "relative",
                  marginTop: "25px",
                  width: "10px",
                  height: "18px",
                }}
              />
            </Link>
            <Link
              className="link-box-list__item : text--18 text--bd d-flex-cc"
              href="/facilities/aster-preventive-health-check"
              target="_self"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                lineHeight: 1.22,
                letterSpacing: "0.45px",
                fontWeight: 700,
                borderRadius: "20px",
                border: "1px solid rgb(20, 77, 146)",
                transition:
                  "background-color 0.3s ease 0s, color 0.3s ease 0s, box-shadow 0.4s ease 0s",
                padding: "30px 24px 22px",
                color: "rgb(20, 77, 146)",
                minHeight: "144px",
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                className="link-box-list__item-icon : d-flex-cc"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <img
                  src="https://www.aster.om/packages-phcp"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  fontSize: "32px",
                  lineHeight: 1.28,
                  margin: "0px",
                  display: "none",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              />
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              >
                {t("preventive.Immunisations")}
                <br style={{ boxSizing: "border-box" }} /> {t("preventive.& Vaccinations")}
              </p>
              <i
                className="icon : icon-arrow-right"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  position: "relative",
                  marginTop: "25px",
                  width: "10px",
                  height: "18px",
                }}
              />
            </Link>
            <Link
              className="link-box-list__item : text--18 text--bd d-flex-cc"
              href="/facilities/aster-preventive-health-check"
              target="_self"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                lineHeight: 1.22,
                letterSpacing: "0.45px",
                fontWeight: 700,
                borderRadius: "20px",
                border: "1px solid rgb(20, 77, 146)",
                transition:
                  "background-color 0.3s ease 0s, color 0.3s ease 0s, box-shadow 0.4s ease 0s",
                padding: "30px 24px 22px",
                color: "rgb(20, 77, 146)",
                minHeight: "144px",
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                className="link-box-list__item-icon : d-flex-cc"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <img
                  src="https://www.aster.om/packages-phcp"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "rgb(20, 77, 146)",
                  fontSize: "32px",
                  lineHeight: 1.28,
                  margin: "0px",
                  display: "none",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              />
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              >
                {t("preventive.Aster Maternity")}
                <br style={{ boxSizing: "border-box" }} /> {t("preventive.Packages")}
              </p>
              <i
                className="icon : icon-arrow-right"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  position: "relative",
                  marginTop: "25px",
                  width: "10px",
                  height: "18px",
                }}
              />
            </Link>
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
