import React from "react";

export default function Volunteer() {
  return (
    <>
      <div
        className="volunteer : bg-gray text-center"
        style={{
          boxSizing: "border-box",
          textAlign: "center",
          backgroundColor: "rgb(243, 246, 249)",
          padding: "30px 20px 40px",
          position: "relative",
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
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
            position: "relative",
            zIndex: 3,
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <div
            className="volunteer__header aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              marginBottom: "36px",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              opacity: 1,
              transform: "none",
            }}
          >
            <img
              alt="volunteers logo"
              src="/aster_volunteers_logo.svg"
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
          <div
            className="volunteer__image-list"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "34px",
            }}
          >
            <div
              className="volunteer__image aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                width: "322px",
                height: "200px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.1s",
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="volunteer__image-bg : cover-bg"
                style={{
                  boxSizing: "border-box",
                  height: "100%",
                  left: "0px",
                  position: "absolute",
                  width: "100%",
                  top: "0px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage:
                    'url("/volunteer_image_01.jpg")',
                }}
              />
            </div>
            <div
              className="volunteer__image aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                width: "322px",
                height: "200px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.1s",
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="volunteer__image-bg : cover-bg"
                style={{
                  boxSizing: "border-box",
                  height: "100%",
                  left: "0px",
                  position: "absolute",
                  width: "100%",
                  top: "0px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage:
                    'url("/volunteer_image_02.jpg")',
                }}
              />
            </div>
            <div
              className="volunteer__image aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                width: "322px",
                height: "200px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                transitionDelay: "0.1s",
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="volunteer__image-bg : cover-bg"
                style={{
                  boxSizing: "border-box",
                  height: "100%",
                  left: "0px",
                  position: "absolute",
                  width: "100%",
                  top: "0px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage:
                    'url("/volunteer_image_03.jpg")',
                }}
              />
            </div>
          </div>
          <div
            className="volunteer__footer aos-init"
            style={{
              boxSizing: "border-box",
              pointerEvents: "none",
              transitionTimingFunction: "ease",
              transform: "translate3d(0px, 100px, 0px)",
              transitionDelay: "0s",
              transitionDuration: "1s",
              opacity: 0,
              transitionProperty: "opacity, transform, -webkit-transform",
            }}
          >
            <p
              style={{
                boxSizing: "border-box",
                margin: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                letterSpacing: "0.4px",
              }}
            >
              Our social contribution arm - Aster Volunteers, executes a variety
              of projects in the areas of community development & support,
              medical & wellness, international aid, disaster recovery, child
              health, and disabled community empowerment. Our approach is to
              empower communities by building collaborations with different
              stakeholders. Come, join hands with us to make this world a better
              place.
            </p>
            <a
              className="btn : btn--default"
              href="https://www.aster.om/about-us/about-aster-hospital"
              target="_self"
              title="Visit Aster Volunteers"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                borderRadius: "64px",
                border: "1px solid rgb(0, 179, 140)",
                transition:
                  "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s",
                cursor: "pointer",
                backgroundColor: "rgb(0, 179, 140)",
                color: "rgb(255, 255, 255)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                fontWeight: 700,
                textAlign: "center",
                fontSize: "14px",
                lineHeight: 1.4,
                padding: "8px 20px",
                marginTop: "30px",
                minHeight: "1px",
                minWidth: "216px",
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
                Visit Aster Volunteers 1111
              </span>
            </a>
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
