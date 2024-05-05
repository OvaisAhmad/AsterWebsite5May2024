import React from "react";
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
                Visitors Guidelines
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
                        Visitation Policy
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
                          Our patients may designate visitors of their choosing,
                          including a person to be present for emotional support
                          during the course of the patient&apos;s stay whether or not
                          the visitor is related by blood or marriage, unless no
                          visitors are allowed. We may restrict visitation
                          privileges to ensure the health and safety of
                          patients, staff and visitors. Health facilities are
                          not permitted to restrict, limit or otherwise deny
                          visitation privileges on the basis of race, color,
                          national origin, religion, sex, gender identity,
                          sexual orientation or disability.
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
                        Age of visitors
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
                          We recommend limiting the children visiting the
                          hospital. The hospital allows children up to 16 years
                          of age with an adult (at least 18 yrs. old)
                          supervision only.
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
                        Visitors Health
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
                          If you have a flu/ fever/ other signs of infection, we
                          advise you to refrain from visiting the hospital.
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
                        Number of Visitors
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
                          At most 2 visitors are allowed at a given time.
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
                        Overnight stay for visitors
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
                          Only one visitor is allowed to stay overnight with the
                          patient.
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
                        Car Parking
                        <div>{getIcon(6)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 6 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
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
                        Meals
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
                          Meals are included in the room charge. Arabic, Asian &
                          Continental variety of food is available from the
                          nutrition & dietary service. Vegetarian preferences
                          and other special diets (therapeutic diet as per
                          physician’s order or according to patient’s clinical
                          condition) are also catered for.
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
                        Surgical Family Lounges
                        <div>{getIcon(8)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 8 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
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
                        onClick={() => toggleAccordion(9)}
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
                        Visiting Hours
                        <div>{getIcon(9)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 9 ? 'open' : ''}`}
                        style={{
                          boxSizing: "border-box",
                          padding: "11px 19px 30px 30px",
                        }}
                      >
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
                        onClick={() => toggleAccordion(10)}
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
                        Access Control
                        <div>{getIcon(10)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 10 ? 'open' : ''}`}
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
                          Certain areas have controlled access to maintain
                          patient safety and privacy. In order to access these
                          areas, please use the bell at entrance.
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
                        onClick={() => toggleAccordion(11)}
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
                        Pets
                        <div>{getIcon(11)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 11 ? 'open' : ''}`}
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
                          No animals are permitted to enter the hospital
                          premises.
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
                        onClick={() => toggleAccordion(12)}
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
                        Smoking
                        <div>{getIcon(12)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 12 ? 'open' : ''}`}
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
                          Smoking is strictly prohibited in the hospital
                          premises.
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
                        onClick={() => toggleAccordion(13)}
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
                        Hand Hygiene
                        <div>{getIcon(13)}</div>
                      </button>
                      <div
                        className={`accordion__panel ${openIndex === 13 ? 'open' : ''}`}
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
                          Please wash your hand or use our hand sanitizer
                          available in the hospital premise to ensure infection
                          control.
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
