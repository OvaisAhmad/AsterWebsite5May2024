import { useTranslation } from "next-i18next";
import React from "react";
import { useState } from "react";

export default function Insurance() {

  const { t } = useTranslation("");
  const [selectedInsurance, setSelectedInsurance] = useState("Select your Insurance Provider");

  const handleInsuranceChange = (event) => {
    setSelectedInsurance(event.target.value);
  };

  return (
    <>
      <div
        id="c20"
        className="insurance_page_wrapper frame frame-default frame-type-list frame-layout-0"
        style={{ boxSizing: "border-box" }}
      >
        <div className="tx-insurance" style={{ boxSizing: "border-box" }}>
          <div
            className="insurance-coverage : text--white aos-init aos-animate"
            style={{
              boxSizing: "border-box",
              color: "rgb(255, 255, 255)",
              padding: "52px 0px 65px",
              backgroundImage:
                "linear-gradient(119deg, rgb(0, 179, 140) 28%, rgb(20, 77, 146) 199%)",
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
                color: "inherit",
              }}
            >
              <div
                className="insurance-coverage__header : text-center aos-init aos-animate"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  color: "inherit",
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
                  className="title : title--h6 font--primary"
                  style={{
                    boxSizing: "border-box",
                    fontSize: "18px",
                    lineHeight: 1.22,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.9px",
                    marginBottom: "60px",
                    textTransform: "uppercase",
                    color: "rgb(255, 255, 255)",
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
                      fontFamily: "inherit",
                      marginTop: "0px",
                      marginBottom: "0px",
                      letterSpacing: "inherit",
                      color: "inherit",
                    }}
                  >
                    {t("hero.INSURANCE COVERAGE")}
                  </h3>
                </div>
              </div>
              <div
                className="row insurance_container_lg"
                style={{
                  flex: "0 1 auto",
                  flexFlow: "wrap",
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxFlex: "0",
                  WebkitBoxOrient: "horizontal",
                  WebkitBoxDirection: "normal",
                  marginLeft: "-8px",
                  marginRight: "-8px",
                  color: "inherit",
                }}
              >
                <div
                  className="col-sm-6 : col-xs-12 aos-init aos-animate select_insurance_container"
                  style={{
                    flex: "0 0 auto",
                    boxSizing: "border-box",
                    WebkitBoxFlex: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    color: "inherit",
                    pointerEvents: "auto",
                    transitionTimingFunction: "ease",
                    transitionDuration: "1s",
                    transitionProperty: "opacity, transform, -webkit-transform",
                    transitionDelay: "0.2s",
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <select
                    id="insurance"
                    className="dr_selectcontrol"
                    name="insurance"
                    aria-hidden="true"
                    onChange={handleInsuranceChange}
                    tabIndex="-1"
                    style={{
                      background: "#00b38c",
                      color: "#fff",
                      fontSize: 15,
                      width: 400,
                      fontWeight: 700,
                    }}
                  >
                    <option
                      value="Select your Insurance Provider"
                      style={{ boxSizing: "border-box", color: "inherit" }}
                    >{t("hero.Select your Insurance Provider")}</option>
                    <option
                      value="1"
                      style={{ boxSizing: "border-box", color: "inherit" }}
                    >
                      {t("hero.AAFIYA")}
                    </option>
                    <option
                      value="2"
                      style={{ boxSizing: "border-box", color: "inherit" }}
                    >
                      {t("hero.ADNIC")}
                    </option>
                    <option
                      value="3"
                      style={{ boxSizing: "border-box", color: "inherit" }}
                    >
                      {t("hero.PREMIUM PLUS")}
                    </option>
                    <option
                      value="4"
                      style={{ boxSizing: "border-box", color: "inherit" }}
                    >
                      {t("hero.ALICO METLIFE INSURANCE")}
                    </option>
                  </select>


                </div>
                <div
                  className="col-sm-6 : col-xs-12 select_insurance_container"
                  style={{
                    flex: "0 0 auto",
                    boxSizing: "border-box",
                    WebkitBoxFlex: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    color: "inherit",
                  }}
                >
                  <div
                    className="insurance-coverage__table aos-init aos-animate"
                    style={{
                      boxSizing: "border-box",
                      color: "inherit",
                      pointerEvents: "auto",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      transitionDelay: "0.2s",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <table className="table_insurance_footer"
                      style={{
                        boxSizing: "border-box",
                        color: "inherit",
                        borderSpacing: "10px",
                        borderCollapse: "separate",
                        width: "100%",
                        maxWidth: "450px",
                      }}
                    >
                      <thead
                        style={{ boxSizing: "border-box", color: "inherit" }}
                      >
                        <tr
                          style={{ boxSizing: "border-box", color: "inherit" }}
                        >
                          <th className="table_th_ntwrk"
                            style={{
                              boxSizing: "border-box",
                              textAlign: "inherit",
                              color: "inherit",
                              padding: "10px",
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.6px",
                            }}
                          >
                            {t("hero.NETWORK")}
                          </th>
                          <th className="table_th_ntwrk"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                              padding: "10px",
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.6px",
                              textAlign: "center",
                              width: "35%",
                            }}
                          >
                            {t("hero.INPATIENT")}
                          </th>
                          <th className="table_th_ntwrk"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                              padding: "10px",
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.6px",
                              textAlign: "center",
                              width: "35%",
                            }}
                          >
                            {t("hero.OUTPATIENT")}
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ boxSizing: "border-box", color: "inherit" }}
                      >
                        {selectedInsurance === "Select your Insurance Provider" && (
                          <tr
                            className="demo_insurance"
                            style={{ boxSizing: "border-box", color: "inherit" }}
                          >
                            <td className="table_th_ntwrk"
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Comprehensive+")}
                            </td>
                            <td className="table_th_ntwrk"
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />

                            </td>
                            <td className="table_th_ntwrk"
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "Select your Insurance Provider" && (
                          <tr
                            className="demo_insurance"
                            style={{ boxSizing: "border-box", color: "inherit" }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Standard")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "Select your Insurance Provider" && (
                          <tr
                            className="demo_insurance"
                            style={{ boxSizing: "border-box", color: "inherit" }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Comprehensive")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}

                        {selectedInsurance === "1" && (
                          <tr
                            className="showrow_1 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Elite")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "1" && (
                          <tr
                            className="showrow_2 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Gold")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                position: "relative",
                                width: "16px",
                                height: "12px",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "2" && (
                          <tr
                            className="showrow_1 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Gold")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                position: "relative",
                                width: "16px",
                                height: "12px",
                                color: "inherit",
                                display: "inline-block",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "2" && (
                          <tr
                            className="showrow_2 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Platinum")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            />
                          </tr>
                        )}
                        {selectedInsurance === "2" && (
                          <tr
                            className="showrow_2 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Silver")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            />
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "3" && (
                          <tr
                            className="showrow_3 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Premium Plus")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "3" && (
                          <tr
                            className="showrow_3 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Premium")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "4" && (
                          <tr
                            className="showrow_4 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Gold")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                          </tr>
                        )}
                        {selectedInsurance === "4" && (
                          <tr
                            className="showrow_4 1"
                            style={{
                              boxSizing: "border-box",
                              color: "inherit",
                            }}
                          >
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                              }}
                            >
                              {t("hero.Silver")}
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            >
                              <img src="/check.svg" alt="Instagram Icon" width="16" height="22"
                                style={{ filter: 'invert(1)', fill: 'white' }} />
                            </td>
                            <td
                              style={{
                                boxSizing: "border-box",
                                color: "inherit",
                                padding: "10px",
                                verticalAlign: "top",
                                letterSpacing: "0.8px",
                                textAlign: "center",
                                width: "35%",
                              }}
                            />
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

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
    </>
  );
}
