import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const NetworkPage = () => {
  const {t} = useTranslation("");
  const router = useRouter();
  const locale = router.locale;
  return (
    <>
      
      <div className="sitefont networkpagewrapper"
        style={{
          boxSizing: "border-box",
          margin: "0px auto",
          padding: "0px",
          display: "block",
          width: "100%",
          backgroundColor: "#144d92",
          color: "rgb(255, 255, 255)",
        }}
      >
        <div>
          <h3 style={{
    boxSizing: "border-box",
    textTransform: "inherit",
    textAlign: "center",
    fontStyle: "inherit",
    margin: 0,
    fontSize: 27,
    lineHeight: "inherit",
    fontWeight: 500,
    color: "#144d92",
    fontFamily: "inherit",
    marginTop: 0,
    marginBottom: 0,
    letterSpacing: "inherit",
    backgroundColor: "#fff",
     paddingBottom: 50
  }}>
              {t("hero.Aster Global Network")}
            </h3>
          </div>

        <div
          className="network_wrapper topbar_wrapper row : middle-md py-[50px]
          lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4">
          
          <div
            className="col-lg-5 : col-md-6 col-xs-12 last-md aos-init aos-animate
             network_global_network__image_container">
            <div
              className="global-network__image-wrapper network_global_network__image_wrapper"
              
            >
              <div
                className="global-network__image"
                style={{ boxSizing: "border-box", direction: "rtl" }}
              >
                <img
                  alt="Earth Map"
                  src="/earth.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    margin: "0px",
                    maxHeight: "100%",
                    objectFit: "cover",
                    width: "482px",
                    maxWidth: "482px",
                    height: "auto",
                  }}
                />
              </div>
              <div
                className="global-network__image-pin : network-pin--1"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "31%",
                  top: "56%",
                }}
              />
              <div
                className="global-network__image-pin : network-pin--2"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "38%",
                  top: "54%",
                }}
              />
              <div
                className="global-network__image-pin : network-pin--3"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "43%",
                  top: "57%",
                }}
              />
              <div
                className="global-network__image-pin : network-pin--4"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "56%",
                  top: "56%",
                }}
              />
              <div
                className="global-network__image-pin : network-pin--5"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "56%",
                  top: "62%",
                }}
              />
              <div
                className="global-network__image-pin : network-pin--6"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 255, 255)",
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  left: "86%",
                  top: "68%",
                }}
              />
            </div>
          </div>
          <div
            className="networkcontenttext col-lg-7 : col-md-6 col-xs-12 first-md aos-init aos-animate"
            style={{
              order: -1,
              flex: "0 0 auto",
              boxSizing: "border-box",
              WebkitBoxFlex: "0",
              paddingLeft: "8px",
              paddingRight: "8px",
              flexBasis: "58.333%",
              maxWidth: "58.333%",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <div
              className="global-network__block-wrapper"
              style={{
                boxSizing: "border-box",
                gap: "10px",
                display: "grid",
                gridTemplateColumns: "212px 1fr 1fr",
                position: "relative",
                zIndex: 3,
                maxWidth: "554px",
              }}
            >
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
                  gridRow: "span 2 / auto",
                  height: "auto",
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
                  {t("hero.Countries")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    marginTop: "6px",
                    fontSize: "111px",
                    lineHeight: 0.8,
                  }}
                >
                  7
                </div>
              </div>
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Hospitals")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  33
                </div>
              </div>
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Clinics")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  127
                </div>
              </div>
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Pharmacies")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  527
                </div>
              </div>
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Asterians")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  26898
                </div>
              </div>
            </div>

            


            <div
              className="global-network__block-wrapper_mob"
              style={{
                boxSizing: "border-box",
                gap: "10px",
                display: "grid",
                gridTemplateColumns: "212px 1fr 1fr",
                position: "relative",
                zIndex: 3,
                maxWidth: "100%",
              }}
            >
              <div
                className="global-network__block : text--18 bg-green text--md"
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
                  gridRow: "span 2 / auto",
                  height: "auto",
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
                  {t("hero.Countries")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    marginTop: "6px",
                    fontSize: "111px",
                    lineHeight: 0.8,
                  }}
                >
                  7
                </div>
              </div>
              <div className="global-network__block-wrapper_mob2">


              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Hospitals")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  33
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Clinics")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  127
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Pharmacies")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  527
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  fontWeight: 500,
                  backgroundColor: "rgb(0, 179, 140)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  height: "108px",
                  letterSpacing: "0.8px",
                  flexDirection: "column",
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
                  {t("hero.Asterians")}
                </p>
                <div
                  className="global-network__block-count : font--secondary text--sb"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 600,
                    fontFamily: '"Ivy Journal", sans-serif',
                    fontSize: "30px",
                    marginTop: "6px",
                  }}
                >
                  26898
                </div>
              </div>


              </div>
              
            </div>
            

            {locale === "ar" ? (
              <div
              className="global-network__text : text--10"
              style={{
                boxSizing: "border-box",
                fontSize: "10px",
                lineHeight: 1.5,
                margin: "10px 0px -20px",
                textAlign:"right",
              }}
            >
              {t("hero.*Last Updated on August 14 2023")}
            </div>
            ) : (
            <div
              className="global-network__text : text--10"
              style={{
                boxSizing: "border-box",
                fontSize: "10px",
                lineHeight: 1.5,
                margin: "10px 0px -20px",
              }}
            >
              {t("hero.*Last Updated on August 14 2023")}
            </div>
            )}
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
};

export default NetworkPage;
