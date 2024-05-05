import { useTranslation } from "next-i18next";
const Ceomessage = () => {
  const { t } = useTranslation("");
  return (
    <>
      <section
        className="sitefont sec-default : sec-chairman-testimonial"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
        }}
      >
        <div
          className="chairman-testimonial : text--21 aos-init aos-animate"
          style={{
            boxSizing: "border-box",
            fontSize: "21px",
            lineHeight: 1.52,
            letterSpacing: "0.53px",
            backgroundColor: "rgb(12, 13, 14)",
            color: "rgb(255, 255, 255)",
            pointerEvents: "auto",
            transitionTimingFunction: "ease",
            transitionDuration: "1s",
            transitionProperty: "opacity, transform, -webkit-transform",
            opacity: 1,
            transform: "none",
          }}
        >
          <div
            className="container ceomessage_container_lg"
            style={{
              boxSizing: "border-box",
              margin: "0px auto",
              padding: "0px",
              display: "block",
              width: "100%",
              paddingLeft: "8px",
              paddingRight: "8px",
              position: "relative",
              paddingTop: "80px",
              paddingBottom: "0px",
              maxWidth: "1240px",
            }}
          >
            <div className="flex">
              <div
                className="aos-init aos-animate"
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
                <blockquote
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 0px 0px",
                    maxWidth: "650px",
                    width: "100%",
                  }}
                >
                  <div
                    className="chairman-testimonial__text : font--secondary text--gray-2"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(177, 177, 177)",
                      fontFamily: '"Ivy Journal", sans-serif',
                      fontStyle: "italic",
                      position: "relative",
                      paddingBottom: "40px",
                    }}
                  >
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        letterSpacing: "inherit",
                        fontSize: 24,
                      }}
                    >
                      {t("hero.Dr Description")}
                    </p>
                  </div>
                  <div style={{ borderTop: "2px solid #00a475", width: 55 }}></div>
                  <footer
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      marginTop: "24px",
                    }}
                  >
                    <div
                      className="chairman-testimonial__author : text--bd"
                      style={{ boxSizing: "border-box", fontWeight: 700, fontSize: "23px" }}
                    >
                      {t("hero.Dr. Azad Moopen")} -{" "}
                      <strong
                        style={{
                          boxSizing: "border-box",
                          fontWeight: 400,
                          fontSize: "23px",
                          lineHeight: 1.38,
                        }}
                      >
                        {t("hero.MBBS, MD, FRCP")}
                      </strong>
                    </div>
                    <div
                      className="chairman-testimonial__designation : text--15"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "18px",
                        lineHeight: 1.5,
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "inherit",
                        }}
                      >
                        {t("hero.Founder Chairman and Managing Director")}
                        <br style={{ boxSizing: "border-box" }} />
                        {t("hero.Aster DM Healthcare")}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
              <div
                className="chairman-testimonial__image"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  right: "0px",
                  bottom: "0px",
                  height: "auto",
                  width: "482px",
                }}
              >
                <img
                  alt="Dr. Azad Moopen"
                  src="/chairman.jpg"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ceomessage_container_md">
                  
                  <div
                    className="chairman-testimonial__text : font--secondary text--gray-2"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(177, 177, 177)",
                      fontFamily: 'Titillium-semibold',
                      fontStyle: "italic",
                      position: "relative",
                      padding:"60px 35px 0px 35px"
                    }}
                  >
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        letterSpacing: "inherit",
                        fontSize: 24,
                        fontFamily: 'Titillium-semibold', 
                      }}
                    >
                      {t("hero.Dr Description")}
                    </p>
                  </div>
                  <div style={{ borderTop: "2px solid #00a475", width: 55,marginLeft:35,marginTop:30 }}></div>
                  
                    <div
                      className="chairman-testimonial__author : text--bd"
                      style={{ boxSizing: "border-box", fontWeight: 700, fontSize: "23px",
                      marginLeft:35,marginTop:30 }}
                    >
                      {t("hero.Dr. Azad Moopen")} -{" "}
                      <strong
                        style={{
                          boxSizing: "border-box",
                          fontWeight: 400,
                          fontSize: "23px",
                          lineHeight: 1.38,
                        }}
                      >
                        {t("hero.MBBS, MD, FRCP")}
                      </strong>
                    </div>
                    <div
                      className="chairman-testimonial__designation : text--15"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "18px",
                        lineHeight: 1.5,
                        marginLeft:35,
                        marginTop:30,
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "inherit",
                        }}
                      >
                        {t("hero.Founder Chairman and Managing Director")}
                        <br style={{ boxSizing: "border-box" }} />
                        {t("hero.Aster DM Healthcare")}
                      </p>
                    </div>
              <div
                className="chairman-testimonial__image"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  right: "0px",
                  bottom: "0px",
                  height: "auto",
                  width: "100%",
                  padding : "60px 35px 0px 35px"
                }}
              >
                <img
                  alt="Dr. Azad Moopen"
                  src="/chairman.jpg"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
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
};

export default Ceomessage;
