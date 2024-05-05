import Image from "next/image";
import React from "react";

export default function FInformation() {
  return (
    <>
      <div
        id="c103"
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
              Emergency Department [ED] sees all acute admissions to the
              hospital and is manned by dedicated and highly trained emergency
              physicians, nurses and paramedics/EMTs. Whether you are
              experiencing a minor emergency or life-threatening situation, we
              provide the emergency care you need. The Emergency Department at
              Aster Al Raffah Hospitals & Clinics is committed to giving you the
              highest quality of care when your health care necessitates
              immediate attention.
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
                height={231}
                width={444}
                alt=""
                src="/emergency_01.jpg"
                style={{
                  boxSizing: "border-box",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  margin: "0px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                  height: "231px",
                  width: "444px",
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
              Our emergency rooms are designed to create a comfortable and
              calming ambiance while the patients receive emergency medical
              services. We keep our beds, for emergency and trauma care, in the
              treatment area well separated and curtained to protect the privacy
              of patients and their families. The emergency care unit is also
              supported a 24-hour pharmacy to ensure the availability of
              medicine at all times.
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
