import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const Treatyouwell = () => {
  const { t } = useTranslation("");
  const router = useRouter();
  const locale = router.locale;

  return (
    <>
      <section
        className="treatyouwellcontainer content_zindex py-[75px] sec-default : sec-video-text 
        lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          paddingTop:10
        }}
      >
        <div className="video-text" style={{ boxSizing: "border-box" }}>
          <div
            className="section-title : text-center aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              textAlign: "center",
              fontFamily: '"Ivy Journal", sans-serif',
              marginBottom: "45px",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              opacity: 1,
              transform: "none",
            }}
          >
            <div className="container wetreat_wrapper">
              <div
                className="title : title--h3"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  fontWeight: "inherit",
                  fontFamily: "inherit",
                  letterSpacing: "inherit",
                  color: "rgb(20, 77, 146)",
                  fontSize: "27px",
                  lineHeight: 1.26,
                }}
              >
                <h3
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
                  {t("hero.We'll treat you well")}
                </h3>
              </div>
            </div>
          </div>
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
              className="video-text__inner wetreat_video_text__inner">
              <div
                className="video-text__text video_text__text aos-init aos-animate">
                {locale === "ar" ? (
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",
                      marginLeft: "20px",
                      textAlign: "right",
                    }}
                  >
                    {t("hero.treat description")}
                  </p>
                ) : (
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "0.4px",

                    }}
                  >
                    {t("hero.treat description")}
                  </p>
                )}
                <div
                  className="video-text__links"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "30px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    position: "relative",
                  }}
                >

                  <div
                    className="video-text__links-item treatwell_button"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      lineHeight: 1.4,
                      flex: "0 0 45%",
                      borderRadius: "18px",
                      border: "1px solid rgb(20, 77, 146)",
                      padding: "10px 20px",
                      transition:
                        "color 0.3s ease 0s, background-color 0.3s ease 0s",
                      maxWidth: "45%",
                      marginRight: "18px",
                      color: "rgb(20, 77, 146)",
                      fontWeight: 700,
                      
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Link href="/facilities/aster-preventive-health-check">
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        {t("hero.Preventive Health")}
                        <br style={{ boxSizing: "border-box" }} />
                        {t("hero.Check Packages")}
                      </p>
                    </Link>

                  </div>
                  <div
                    className="video-text__links-item treatwell_button margin_right_treatwell_box"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      lineHeight: 1.4,
                      flex: "0 0 45%",
                      borderRadius: "18px",
                      border: "1px solid rgb(20, 77, 146)",
                      padding: "10px 20px",
                      transition:
                        "color 0.3s ease 0s, background-color 0.3s ease 0s",
                      maxWidth: "45%",
                      marginRight: "18px",
                      color: "rgb(20, 77, 146)",
                      fontWeight: 700,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Link href="/">
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        {t("hero.Immunisations")}
                        <br style={{ boxSizing: "border-box" }} />{t("hero.& Vaccinations")}
                      </p>
                    </Link>
                    <a
                      className="stretched-link"
                      href="https://www.aster.om/"
                      title="Immunisations<br>& Vaccinations"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        color: "inherit",
                      }}
                    >
                      <span style={{ boxSizing: "border-box" }} />
                    </a>
                  </div>
                  <div
                    className="video-text__links-item treatwell_button"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      lineHeight: 1.4,
                      flex: "0 0 45%",
                      borderRadius: "18px",
                      border: "1px solid rgb(20, 77, 146)",
                      padding: "10px 20px",
                      transition:
                        "color 0.3s ease 0s, background-color 0.3s ease 0s",
                      maxWidth: "45%",
                      marginRight: "18px",
                      color: "rgb(20, 77, 146)",
                      fontWeight: 700,
                      textAlign: "center",
                      position: "relative",
                      marginTop: "28px",
                    }}
                  >
                    <Link href="/homecare">
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        {t("hero.Home Care")}
                        <br style={{ boxSizing: "border-box" }} /> {t("hero.Services")}
                      </p>
                    </Link>
                  </div>
                  <div
                    className="video-text__links-item treatwell_button margin_right_treatwell_box"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      lineHeight: 1.4,
                      flex: "0 0 45%",
                      borderRadius: "18px",
                      border: "1px solid rgb(20, 77, 146)",
                      padding: "10px 20px",
                      transition:
                        "color 0.3s ease 0s, background-color 0.3s ease 0s",
                      maxWidth: "45%",
                      marginRight: "18px",
                      color: "rgb(20, 77, 146)",
                      fontWeight: 700,
                      textAlign: "center",
                      position: "relative",
                      marginTop: "28px",
                    }}
                  >
                    <Link href="/">
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        {t("hero.Aster Maternity")}
                        <br style={{ boxSizing: "border-box" }} /> {t("hero.Packages")}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="video-text__video video_text__video aos-init aos-animate">
                <div
                  className="mod-video"
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "18px",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    padding: "0px",
                    height: "100%",
                    minHeight: "325px",
                    paddingBottom: "0px",
                    maxHeight: "325px",
                  }}
                >
                  
                  <video
                    height={240}
                    width={320}
                    controls
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "100%",
                      height: "100%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "rgb(0, 0, 0)",
                    }}
                  >
                    <source
                      type="video/mp4"
                      src="/aster-helth-care.mp4"
                      style={{ boxSizing: "border-box" }}
                    />
                  </video>
                </div>
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
};

export default Treatyouwell;
