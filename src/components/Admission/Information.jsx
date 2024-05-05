import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Information() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getIcon = (index) => (openIndex === index ? '-' : '+');


  return (
    <>
      <section
        className="sec-default : sec-accordion-col-2"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom: "90px",
          padding: "0px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        <div
          className="accordion-col-2"
          style={{
            boxSizing: "border-box",
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
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
            <header
              className="accordion-col-2__title : text--16 text--blue text--bd aos-init aos-animate"
              style={{
                boxSizing: "border-box",
                display: "block",
                fontSize: "16px",
                lineHeight: 1.38,
                paddingLeft: "8px",
                paddingRight: "8px",
                fontWeight: 700,
                color: "rgb(20, 77, 146)",
                marginBottom: "32px",
                pointerEvents: "auto",
                transitionTimingFunction: "ease",
                transitionDuration: "1s",
                transitionProperty: "opacity, transform, -webkit-transform",
                opacity: 1,
                transform: "none",
              }}
            >
              <h2
                style={{
                  boxSizing: "border-box",
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
                Admission & Discharge Guidelines
              </h2>
            </header>
            <div
              className="row : row-15"
              style={{
                flex: "0 1 auto",
                flexFlow: "wrap",
                boxSizing: "border-box",
                display: "flex",
                WebkitBoxFlex: "0",
                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                marginLeft: "-15px",
                marginRight: "-15px",
              }}
            >
              <div
                className="col-md-6 : col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
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
                  className="accordion-list"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
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
                        Planning your admission
                        <div>{getIcon(1)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 1 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          For all planned cases, Customer service executive
                          shall inform you a day prior on date and time of
                          arrival. Please carry your ID, all available medical
                          reports and insurance card for the admission process.
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(2)}
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
                        Meals
                        <div>{getIcon(2)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 2 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          Content Required
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(3)}
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
                        Belongings & Personal Requisites
                        <div>{getIcon(3)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 3 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          The hospital provides dressing gowns, bedroom slippers
                          and toiletries. The hospital is under CCTV
                          surveillance. However, we highly recommend leaving
                          valuables and jewellery at home or handing over to
                          your family.
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(4)}
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
                        Accommodation
                        <div>{getIcon(4)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 4 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          Content Required
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 : col-xs-12 aos-init aos-animate"
                style={{
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  WebkitBoxFlex: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  pointerEvents: "auto",
                  transitionTimingFunction: "ease",
                  transitionDuration: "1s",
                  transitionProperty: "opacity, transform, -webkit-transform",
                  transitionDelay: "0.3s",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div
                  className="accordion-list"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px auto",
                      display: "block",
                      width: "100%",
                      maxWidth: "1240px",
                      padding: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(5)}
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
                        For Mothers-To-Be
                        <div>{getIcon(5)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 5 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          It is best to pack a suitcase two weeks in advance,
                          including pre-washed nursing bras, baby vests, baby
                          gowns, mittens and wrapping blankets. You should
                          provide copies of passport with visa page, ID and
                          marriage certificate with Oman attestation (both
                          parents) at the time of admission, failing which
                          provision of birth certificate may be delayed. Incase
                          of NICU admission for the baby, please contact the
                          billing department as the standard maternity packages
                          do not include these charges.
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(6)}
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
                        Patient Safety
                        <div>{getIcon(6)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 6 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          All admitted patients need to wear hospital wrist ID
                          band clearly stating their full names and UHIDs to
                          ensure identification. Make use of the call bell
                          system at bedside and in all bathrooms in case of
                          assistance.
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(7)}
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
                        Payment Terms
                        <div>{getIcon(7)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 7 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          You may pay with your Card online or choose Credit
                          Card or Debit Card payment on physical visit to the
                          Aster Al Raffah hospital
                        </p>
                        <ul
                          style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            margin: "0px",
                            padding: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          {" "}
                          <li style={{ boxSizing: "border-box" }}>
                            Any dispute or claim arising out of or in connection
                            with this{" "}
                            <Link
                              href="https://asteroman.com/"
                              rel="noreferrer"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              asteroman.com
                            </Link>{" "}
                            shall be governed and construed in accordance with
                            the laws of Oman.
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            Minors under the age of 18 shall be prohibited to
                            register as a User of this{" "}
                            <Link
                              href="https://asteroman.com/"
                              rel="noreferrer"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              asteroman.com
                            </Link>{" "}
                            and are not allowed to transact or use the{" "}
                            <Link
                              href="https://asteroman.com/"
                              rel="noreferrer"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              asteroman.com
                            </Link>
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            If you make a payment for our services on our{" "}
                            <Link
                              href="https://asteroman.com/"
                              rel="noreferrer"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              asteroman.com
                            </Link>
                            , the details you are asked to submit will be
                            provided directly to our payment provider via a
                            secure connection.
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            The cardholder must retain a copy of transaction
                            records and{" "}
                            <Link
                              href="https://asteroman.com/"
                              rel="noreferrer"
                              target="_blank"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              asteroman.com
                            </Link>{" "}
                            policies and rules.
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            We accept payments online using Visa and MasterCard
                            credit/debit card in Omani rial
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            Refunds will be done only through the Original Mode
                            of Payment.
                          </li>{" "}
                          <li style={{ boxSizing: "border-box" }}>
                            User is responsible for maintaining the
                            confidentiality of his account
                          </li>{" "}
                        </ul>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >

                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >

                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "9px",
                        border: "1px solid rgb(157, 157, 157)",
                        transition: "background-color 0.3s ease 0s",
                        marginBottom: "16px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <button
                        className="accordion__title : text--blue text--bd"
                        onClick={() => toggleAccordion(8)}
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
                        Discharge Process
                        <div>{getIcon(8)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 8 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            letterSpacing: "0.4px",
                            maxWidth: "676px",
                            width: "100%",
                          }}
                        >
                          Families are requested to arrange for home clothes,
                          transport and finances for the planned day of
                          discharge. The discharge summary and instructions
                          including medication, follow up details other advice
                          will be explained and handed over to the patient. The
                          discharge process typically takes 3 hours or less from
                          the time of confirmation by treating doctor.
                        </p>
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
                        >
                          <span
                            className="btn__text"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
