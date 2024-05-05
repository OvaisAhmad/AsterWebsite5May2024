import React from "react";
import Link from "next/link";

export default function AButton() {
  return (
    <>
      <section
        className="sec-default : sec-current-openings aos-init aos-animate"
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
          }}
        >
          <div className="current-openings" style={{ boxSizing: "border-box" }}>
            <div
              className="current-openings__button : text-center"
              style={{ boxSizing: "border-box", textAlign: "center" }}
            >
              <Link
                className="btn : btn--default"
                href="https://hcdt.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX"
                rel="noreferrer"
                target="_blank"
                title="VIEW CURRENT OPENINGS"
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
                  fontWeight: 700,
                  lineHeight: "26px",
                  textAlign: "center",
                  fontSize: "14px",
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
                  VIEW CURRENT OPENINGS
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
