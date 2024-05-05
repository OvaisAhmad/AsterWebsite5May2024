import React from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function FInformation() {
  const { t } = useTranslation("");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getIcon = (index) => (openIndex === index ? '-' : '+');
  return (
    <>
      <div
        className="accordion-list aos-init aos-animate"
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
            className="accordion aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              borderRadius: "9px",
              border: "1px solid rgb(157, 157, 157)",
              transition: "background-color 0.3s ease 0s",
              marginBottom: "16px",
              backgroundColor: "rgb(255, 255, 255)",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <button
              className="accordion__title : text--blue text--bd"
              onClick={() => toggleAccordion(1)}
              style={{
                boxSizing: "border-box",
                background: "transparent",
                border: "0px",
                boxShadow: "none",
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontStyle: "inherit",
                fontFamily: "inherit",
                borderRadius: "0px",
                textTransform: "none",
                cursor: "pointer",
                appearance: "button",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                padding: "16px 24px", // Adjusted padding
                position: "relative",
                width: "100%",
                display: "flex", // Use flex container
                justifyContent: "space-between", // Align icon to the end
                alignItems: "center", // Vertically center content
                textAlign: "start",
              }}
            >
              {t("faq.HOW FREQUENTLY IS A HEALTH CHECK-UP REQUIRED?")}
              <div>{getIcon(1)}</div>
            </button>
            <div
              className={`accordion__panel ${openIndex === 1 ? 'open' : ''}`}
              style={{
                boxSizing: "border-box",
                padding: "11px 19px 30px 30px",
              }}
            >
              <div
                className="editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    maxWidth: "676px",
                    width: "100%",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  The interval is specific to an individual depending on their
                  health status. The general classification would be that beyond
                  the age of 40 an individual must undergo bi-annual health
                  check-ups and below the age of 40, they must undergo annual
                  check-ups. Pre-Health check instructions.
                </p>
                <ol
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                    listStyle: "none",
                    counterReset: "ol_text_counter 0",
                  }}
                >
                  {" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Plan all your health checks well in advance
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Overnight fasting
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Avoid alcohol consumption at least 48-72 hours before you
                    book health checks
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Females guests avoid health checks during their monthly
                    cycles
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    If you’ve had a surprise cycle upon booking the health
                    check, please notify the Health Check Team
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Carry all your current medications and your previous ailment
                    files at the time of your doctor’s consultation
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Notify the doctor about any of your allergic reactions
                    towards drugs.
                  </li>{" "}
                </ol>
              </div>
              <div
                className="accordion__panel-footer"
                style={{
                  boxSizing: "border-box",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              />
            </div>
          </div>
          <div
            className="accordion aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              borderRadius: "9px",
              border: "1px solid rgb(157, 157, 157)",
              transition: "background-color 0.3s ease 0s",
              marginBottom: "16px",
              backgroundColor: "rgb(255, 255, 255)",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <button
              onClick={() => toggleAccordion(2)}
              className="accordion__title : text--blue text--bd"
              style={{
                boxSizing: "border-box",
                background: "transparent",
                border: "0px",
                boxShadow: "none",
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontStyle: "inherit",
                fontFamily: "inherit",
                borderRadius: "0px",
                textTransform: "none",
                cursor: "pointer",
                appearance: "button",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                padding: "16px 24px", // Adjusted padding
                position: "relative",
                width: "100%",
                display: "flex", // Use flex container
                justifyContent: "space-between", // Align icon to the end
                alignItems: "center", // Vertically center content
                textAlign: "start",
              }}
            >
              {t("faq.WHO REQUIRES A HEALTH CHECK-UP?")}
              <div>{getIcon(2)}</div>
            </button>
            <div
              className={`accordion__panel ${openIndex === 2 ? 'open' : ''}`}
              style={{
                boxSizing: "border-box",
                padding: "11px 19px 30px 30px",
              }}
            >
              <div
                className="editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    maxWidth: "676px",
                    width: "100%",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  Everyone needs a health check-up, no matter how healthy an
                  individual is. The most common causes of premature death in
                  the world are due to heart, lung, bowel, kidney disease and
                  cancer. Early detection is an important form of disease
                  prevention. Getting a check-up periodically is a good step to
                  staying healthy always. It is recommended to have a health
                  check-up at an early age for those with a family history of
                  diabetes, high blood pressure, cholesterol or heart disease
                  and also for individuals who have a smoking habit or with any
                  of the health risk behaviors.
                </p>
              </div>
              <div
                className="accordion__panel-footer"
                style={{
                  boxSizing: "border-box",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              />
            </div>
          </div>
          <div
            className="accordion aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              borderRadius: "9px",
              border: "1px solid rgb(157, 157, 157)",
              transition: "background-color 0.3s ease 0s",
              marginBottom: "16px",
              backgroundColor: "rgb(255, 255, 255)",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <button
              onClick={() => toggleAccordion(3)}
              className="accordion__title : text--blue text--bd"
              style={{
                boxSizing: "border-box",
                background: "transparent",
                border: "0px",
                boxShadow: "none",
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontStyle: "inherit",
                fontFamily: "inherit",
                borderRadius: "0px",
                textTransform: "none",
                cursor: "pointer",
                appearance: "button",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                padding: "16px 24px", // Adjusted padding
                position: "relative",
                width: "100%",
                display: "flex", // Use flex container
                justifyContent: "space-between", // Align icon to the end
                alignItems: "center", // Vertically center content
                textAlign: "start",
              }}
            >
              {t("faq.HOW IS THE HEALTH CHECK-UP CONDUCTED?")}
              <div>{getIcon(3)}</div>
            </button>
            <div
              className={`accordion__panel ${openIndex === 3 ? 'open' : ''}`}
              style={{
                boxSizing: "border-box",
                padding: "11px 19px 30px 30px",
              }}
            >
              <div
                className="editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    maxWidth: "676px",
                    width: "100%",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  We carry all the assessments in a peaceful and welcoming
                  atmosphere. We assign a dedicated health check team to escort
                  you through the stages of the health check-up so that you can
                  rest easy.
                  <br style={{ boxSizing: "border-box" }} /> You will be
                  initially subjected to the definitive investigations depending
                  upon the package you select. Later, when the results are
                  examined by a qualified doctor, suitable medical advice is
                  given & necessary steps to improve your health can be taken.
                  Most reports are reviewed by the doctor on the same day. If
                  there are any specified tests that require more time, you will
                  be notified.
                </p>
              </div>
              <div
                className="accordion__panel-footer"
                style={{
                  boxSizing: "border-box",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              />
            </div>
          </div>
          <div
            className="accordion aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              borderRadius: "9px",
              border: "1px solid rgb(157, 157, 157)",
              transition: "background-color 0.3s ease 0s",
              marginBottom: "16px",
              backgroundColor: "rgb(255, 255, 255)",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <button
              onClick={() => toggleAccordion(4)}
              className="accordion__title : text--blue text--bd"
              style={{
                boxSizing: "border-box",
                background: "transparent",
                border: "0px",
                boxShadow: "none",
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontStyle: "inherit",
                fontFamily: "inherit",
                borderRadius: "0px",
                textTransform: "none",
                cursor: "pointer",
                appearance: "button",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                padding: "16px 24px", // Adjusted padding
                position: "relative",
                width: "100%",
                display: "flex", // Use flex container
                justifyContent: "space-between", // Align icon to the end
                alignItems: "center", // Vertically center content
                textAlign: "start",
              }}
            >
              {t("faq.WHAT IS THE HEALTH CHECK-UP ABOUT?")}
              <div>{getIcon(4)}</div>
            </button>
            <div
              className={`accordion__panel ${openIndex === 4 ? 'open' : ''}`}
              style={{
                boxSizing: "border-box",
                padding: "11px 19px 30px 30px",
              }}
            >
              <div
                className="editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    maxWidth: "676px",
                    width: "100%",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  A health check-up allows you to “know your numbers”. Your
                  blood pressure, cholesterol, blood sugar and body mass index
                  are important markers of your overall health that indicate a
                  healthier life. The Key Health Indicators are checked and any
                  deviations will be observed carefully by our physicians and
                  necessary advice would be provided to improve these. Some
                  aspects which we go through during a health check up are:
                </p>
                <ol
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                    listStyle: "none",
                    counterReset: "ol_text_counter 0",
                  }}
                >
                  {" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    CBC – A complete blood count (CBC) is a blood test used to
                    evaluate your overall health and detect a wide range of
                    disorders, including anemia, infection and leukemia
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Lipid Profile – The lipid profile is used as part of a
                    cardiac risk assessment to help determine an individual’s
                    risk of heart disease.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Chest X-ray –The chest X-Ray is performed to produce images
                    of the heart, lungs, airways, blood vessels and the bones of
                    the spine and chest. Especially for smokers or individual
                    affected by toxic substances.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    ECG – Electrocardiogram is to check the state of the heart
                    muscles and the heartbeat rhythm from which the doctor can
                    diagnose the existence of heart disease.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Stool Routine Examination – To check the functioning of the
                    excretion system. If any blood traces are found in stool, it
                    can be caused by a disorder of the intestine.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Urine Analysis – To examine if any irregularity in the
                    urinary tract such as inflamed urine bladder or kidney
                    disease.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Liver Function Test – This screening test can help us to
                    detect the presence of liver disease from an early stage.
                    Examination for any abnormalities of liver enzymes and
                    bilirubin metabolism.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Kidney Function Test – This test is done to detect
                    abnormalities in kidney function.
                  </li>{" "}
                  <li
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "0.4px",
                      marginTop: "4px",
                      paddingLeft: "30px",
                      position: "relative",
                      counterIncrement: "ol_text_counter 1",
                    }}
                  >
                    Ultrasound Abdomen – To diagnose abnormalities in various
                    internal organs, such as the kidneys, liver, gallbladder,
                    pancreas, spleen and abdominal aorta.
                  </li>{" "}
                </ol>
              </div>
              <div
                className="accordion__panel-footer"
                style={{
                  boxSizing: "border-box",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              />
            </div>
          </div>
          <div
            className="accordion aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              borderRadius: "9px",
              border: "1px solid rgb(157, 157, 157)",
              transition: "background-color 0.3s ease 0s",
              marginBottom: "16px",
              backgroundColor: "rgb(255, 255, 255)",
              pointerEvents: "auto",
              transitionTimingFunction: "ease",
              transitionDuration: "1s",
              transitionProperty: "opacity, transform, -webkit-transform",
              transitionDelay: "0.2s",
              opacity: 1,
              transform: "none",
            }}
          >
            <button
              onClick={() => toggleAccordion(5)}
              className="accordion__title : text--blue text--bd"
              style={{
                boxSizing: "border-box",
                background: "transparent",
                border: "0px",
                boxShadow: "none",
                fontSize: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                fontStyle: "inherit",
                fontFamily: "inherit",
                borderRadius: "0px",
                textTransform: "none",
                cursor: "pointer",
                appearance: "button",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                padding: "16px 24px", // Adjusted padding
                position: "relative",
                width: "100%",
                display: "flex", // Use flex container
                justifyContent: "space-between", // Align icon to the end
                alignItems: "center", // Vertically center content
                textAlign: "start",
              }}
            >
              {t("faq.WHY DO I NEED A HEALTH CHECK-UP?")}
              <div>{getIcon(5)}</div>
            </button>
            <div
              className={`accordion__panel ${openIndex === 5 ? 'open' : ''}`}
              style={{
                boxSizing: "border-box",
                padding: "11px 19px 30px 30px",
              }}
            >
              <div
                className="editor-text"
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "0.4px",
                    maxWidth: "676px",
                    width: "100%",
                    margin: "0px 0px 34px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  Regular medical check-ups are important to verify that you are
                  in a normal state of health and to detect any medical issues
                  before they crop up. They are also important in treating
                  diseases/disorders in their early stages greatly improving
                  chances of complete cure. This leads to a happier, healthier
                  and longer life. They are a form of Preventive Health
                  Initiatives or preventive health check-ups.
                </p>
              </div>
              <div
                className="accordion__panel-footer"
                style={{
                  boxSizing: "border-box",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              />
            </div>
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

      <style jsx>{`
        .accordion__panel {
          display: none;
          /* Add your styling for the panel */
        }

        .accordion__panel.open {
          display: block;
          /* Add your styling for the open panel */
        }
      `}</style>
    </>
  );
}
