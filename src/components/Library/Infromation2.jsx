import Link from "next/link";
import React from "react";

export default function Information2() {
  return (
    <>
      <section
        className="sec-default : sec-news"
        role="contentinfo"
        tabIndex="-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          position: "relative",
          marginBottom: "170px",
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
          <div
            className="breadcrumbs"
            style={{
              boxSizing: "border-box",
              margin: "46px 0px",
              position: "relative",
            }}
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
              <nav
                aria-label="breadcrumb"
                style={{ boxSizing: "border-box", display: "block" }}
              >
                <ul
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    margin: "0px",
                    padding: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "0px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li
                    className="breadcrumbs__item : breadcrumbs__item--home"
                    style={{
                      boxSizing: "border-box",
                      display: "inline-flex",
                      alignItems: "center",
                      position: "relative",
                      paddingLeft: "0px",
                      paddingRight: "5px",
                    }}
                  >
                    <Link
                      className="breadcrumbs__link : text--14"
                      href="/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        whiteSpace: "nowrap",
                        display: "block",
                        color: "rgb(20, 77, 146)",
                        letterSpacing: "0.7px",
                        textTransform: "uppercase",
                        fontSize: "0px",
                        lineHeight: 0,
                      }}
                    >
                      {"Home"}
                      <i
                        className="icon : icon-home"
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          position: "relative",
                          width: "17px",
                          height: "17px",
                        }}
                      />
                    </Link>
                  </li>
                  <li
                    className="breadcrumbs__item"
                    style={{
                      boxSizing: "border-box",
                      display: "inline-flex",
                      alignItems: "center",
                      position: "relative",
                      fontWeight: 700,
                    }}
                  >
                    <Link
                      className="breadcrumbs__link : text--14"
                      href="/blog"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        whiteSpace: "nowrap",
                        display: "block",
                        color: "rgb(20, 77, 146)",
                        letterSpacing: "0.7px",
                        textTransform: "uppercase",
                      }}
                    >
                      Health Library
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="row : sec-news__row"
            style={{
              flex: "0 1 auto",
              flexFlow: "wrap",
              boxSizing: "border-box",
              display: "flex",
              WebkitBoxFlex: "0",
              WebkitBoxOrient: "horizontal",
              WebkitBoxDirection: "normal",
              marginTop: "60px",
              marginLeft: "-15px",
              marginRight: "-15px",
            }}
          >
            <div
              className="col-lg-9 : col-md-8 col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "75%",
                maxWidth: "75%",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <div
                id="c50"
                className="frame frame-default frame-type-list frame-layout-0"
                style={{ boxSizing: "border-box" }}
              >
                <div className="news" style={{ boxSizing: "border-box" }}>
                  <div
                    className="news-grid : row aos-init aos-animate"
                    style={{
                      flex: "0 1 auto",
                      flexFlow: "wrap",
                      boxSizing: "border-box",
                      display: "flex",
                      WebkitBoxFlex: "0",
                      WebkitBoxOrient: "horizontal",
                      WebkitBoxDirection: "normal",
                      pointerEvents: "auto",
                      marginLeft: "-15px",
                      marginRight: "-15px",
                      transitionTimingFunction: "ease",
                      transitionDuration: "1s",
                      transitionProperty:
                        "opacity, transform, -webkit-transform",
                      opacity: 1,
                      transform: "none",
                      position: "relative",
                      height: "3160.72px",
                    }}
                  >
                    <div
                      className="grid-sizer : col-sm-6 col-xs-12"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                      }}
                    />
                    <div
                      className="grid-item : col-sm-6 col-xs-12 cardiology aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "0%",
                        top: "0px",
                      }}
                    >
                      <Link href="/blog/mitral-clip">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_list_03.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Cardiology"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Feb 11, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Mitral Clip: Everything You Ever Needed to Know
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                When a patient has mitral regurgitation but is
                                not a candidate for open-heart surgery, what is
                                a doctor to do? Thankfully, with the
                                groundbreaking…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 cardiology aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "0px",
                      }}
                    >
                      <Link href="/blog/surgical-repair">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_list_02.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Cardiology"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Feb 11, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Surgical Repair of the Mitral Valve
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Dr. Alain Bouchard discusses the history of
                                surgical options and modern techniques for
                                degenerative mitral valve disease and mitral
                                regurgitation with…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 cardiology aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "526.828px",
                      }}
                    >
                      <Link href="/blog/pulmonary">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_list_01.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Cardiology"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Feb 11, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                What is Pulmonary Hypertension?
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Pulmonary hypertension is a substantial global
                                health issue. All age groups are affected, with
                                growing importance in its effect on the
                                elderly.…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 dietetics aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "0%",
                        top: "551.219px",
                      }}
                    >
                      <Link href="/blog/eat-right">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_01.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Dietetics"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Eat Right to Beat Tuberculosis test
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Getting the right nutrition can help speed
                                treatment and prevention includes healthy
                                immunity. Tuberculosis (TB) is an infectious
                                disease caused by…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 dietetics aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "1053.66px",
                      }}
                    >
                      <Link href="/blog/eat-right">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_01.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Dietetics"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Eat Right to Beat Tuberculosis
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Getting the right nutrition can help speed
                                treatment and prevention includes healthy
                                immunity.
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 pregnancy-care aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "0%",
                        top: "1078.05px",
                      }}
                    >
                      <Link href="/blog/work-it-out">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_02.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Pregnancy Care"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Work It Out – Bump Approved Fitness
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                There are a plenty of options when it comes down
                                to each individual woman’s pregnancy and fitness
                                levels. Here are some best tips for working out
                                to…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 pregnancy-care aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "1559.38px",
                      }}
                    >
                      <Link href="/blog/work-it-out">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_02.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Pregnancy Care"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Work It Out – Bump Approved Fitness
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                There are a plenty of options when it comes down
                                to each individual woman’s pregnancy and fitness
                                levels. Here are some best tips for working out
                                to…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 pregnancy-care aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "0%",
                        top: "1604.88px",
                      }}
                    >
                      <Link href="/blog/yoga">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_03.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Pregnancy Care"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Can Yoga Cure Acid Reflux?
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Acid reflux, also known as Gastro esophageal
                                reflux disease (GERD), is a chronic digestive
                                disorder in which stomach acids or contents of
                                the stomach…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 pregnancy-care aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "2086.2px",
                      }}
                    >
                      <Link href="/blog/yoga">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/news_card_03.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="tag : text--bd tag--large"
                                style={{
                                  boxSizing: "border-box",
                                  fontWeight: 700,
                                  borderRadius: "16px",
                                  transition: "background-color 0.3s ease 0s",
                                  backgroundColor: "rgb(0, 179, 140)",
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "rgb(255, 255, 255)",
                                  letterSpacing: "0.25px",
                                  zIndex: 4,
                                  position: "relative",
                                  padding: "4px 22px",
                                  fontSize: "10px",
                                  lineHeight: 1.2,
                                  marginRight: "8px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {"Pregnancy Care"}
                              </div>
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jan 27, 2021
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Can Yoga Cure Acid Reflux?
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Acid reflux, also known as Gastro esophageal
                                reflux disease (GERD), is a chronic digestive
                                disorder in which stomach acids or contents of
                                the stomach…
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "0%",
                        top: "2131.7px",
                      }}
                    >
                      <Link href="/blog/frontline-warriors">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/footer_news_1.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jun 25, 2020
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Frontline Warriors and Volunteers from two Al
                                Warsan isolation facilities honoured
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Frontline Warriors and Volunteers from two Al
                                Warsan isolation facilities honoured
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div
                      className="grid-item : col-sm-6 col-xs-12 aos-init aos-animate"
                      style={{
                        flex: "0 0 auto",
                        boxSizing: "border-box",
                        WebkitBoxFlex: "0",
                        flexBasis: "50%",
                        maxWidth: "50%",
                        pointerEvents: "auto",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        transitionDelay: "0.2s",
                        opacity: 1,
                        transform: "none",
                        position: "absolute",
                        left: "50%",
                        top: "2613.03px",
                      }}
                    >
                      <Link href="/blog/aster-al-raffah">
                        <article
                          className="news-card : news-card--secondary"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            gap: "14px",
                            fontWeight: 300,
                            lineHeight: 1.32,
                            position: "relative",
                            display: "grid",
                            gridAutoRows: "minmax(min-content, max-content)",
                            padding: "0px",
                            borderRadius: "0px",
                            maxWidth: "352px",
                            backgroundColor: "transparent",
                            marginBottom: "50px",
                            minHeight: "1px",
                          }}
                        >
                          <figure
                            className="news-card__image"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              position: "relative",
                              backfaceVisibility: "hidden",
                              transform: "translate3d(0px, 0px, 0px)",
                              margin: "0px",
                              borderRadius: "10px",
                              width: "100%",
                              height: "310px",
                            }}
                          >
                            <img
                              height={310}
                              width={352}
                              src="/footer_news_2.jpg"
                              style={{
                                boxSizing: "border-box",
                                borderStyle: "none",
                                verticalAlign: "middle",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                margin: "0px",
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.4s ease 0s",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="news-card__button-wrapper"
                              style={{
                                boxSizing: "border-box",
                                padding: "0px 18px",
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: "0px",
                                bottom: "14px",
                                zIndex: 3,
                              }}
                            >
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-heart"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "20px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                              <div
                                className="news-card__button"
                                role="button"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(255, 255, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginRight: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="icon : icon-share"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    position: "relative",
                                    width: "18px",
                                    height: "18px",
                                    marginRight: "6px",
                                  }}
                                />
                                <span style={{ boxSizing: "border-box" }}>
                                  11
                                </span>
                              </div>
                            </div>
                          </figure>
                          <header
                            className="news-card__header"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              order: -1,
                            }}
                          >
                            <div
                              className="news-card__header-top"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                fontSize: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <div
                                className="news-card__date"
                                style={{ boxSizing: "border-box" }}
                              >
                                Jun 07, 2020
                              </div>
                            </div>
                            <div
                              className="title : title--h6 font--primary"
                              style={{
                                boxSizing: "border-box",
                                lineHeight: 1.22,
                                fontFamily: "Lato, sans-serif",
                                fontWeight: 600,
                                color: "rgb(33, 34, 65)",
                                margin: "0px",
                                fontSize: "20px",
                                marginBottom: "0px",
                                letterSpacing: "0px",
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
                                Aster Al Raffah Hosptal, in Association with
                                Oman’s Ministry of Health, Launches Free Mobile
                                Testing Service
                              </h3>
                            </div>
                          </header>
                          <div
                            className="news-card__content"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: "0px",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                Aster Al Raffah Hosptal, in Association with
                                Oman’s Ministry of Health, Launches Free Mobile
                                Testing Service
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 : col-md-4 col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "25%",
                maxWidth: "25%",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <aside style={{ boxSizing: "border-box", display: "block" }}>
                <div
                  id="c58"
                  className="frame frame-default frame-type-list frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="news" style={{ boxSizing: "border-box" }}>
                    <div
                      className="search-box : text--14 text--md p-relative"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        fontWeight: 500,
                        width: "100%",
                        position: "relative",
                        maxWidth: "100%",
                        marginBottom: "68px",
                      }}
                    >
                      <form
                        name="search"
                        action="/health-library/news-search?tx_news_pi1%5Bcontroller%5D=News&cHash=5e0aade53c2a6ca92a255d4eb7c6d786"
                        method="post"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div style={{ boxSizing: "border-box" }}>
                          <input
                            name="tx_news_pi1[__referrer][@extension]"
                            type="hidden"
                            defaultValue="News"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                          <input
                            name="tx_news_pi1[__referrer][@controller]"
                            type="hidden"
                            defaultValue="News"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                          <input
                            name="tx_news_pi1[__referrer][@action]"
                            type="hidden"
                            defaultValue="searchForm"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                          <input
                            name="tx_news_pi1[__referrer][arguments]"
                            type="hidden"
                            defaultValue="YTowOnt9599b5b529a0a0195f1d787cc75237c117a05886d"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                          <input
                            name="tx_news_pi1[__referrer][@request]"
                            type="hidden"
                            defaultValue='{"@extension":"News","@controller":"News","@action":"searchForm"}48a74fcc785a5c4d7510085fb2545c7ae4f1b2ad'
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                          <input
                            name="tx_news_pi1[__trustedProperties]"
                            type="hidden"
                            defaultValue='{"search":{"subject":1}}9122ac810862c4d182409c5a8397d573f2554b97'
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                              overflow: "visible",
                              boxShadow: "none",
                              appearance: "none",
                              borderWidth: "0px 0px 1px",
                              borderImage: "initial",
                              borderRadius: "0px",
                              outline: "0px",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              borderTopStyle: "initial",
                              borderRightStyle: "initial",
                              borderLeftStyle: "initial",
                              borderTopColor: "initial",
                              borderRightColor: "initial",
                              borderLeftColor: "initial",
                              height: "40px",
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomStyle: "solid",
                              borderBottomColor: "rgb(20, 77, 146)",
                            }}
                          />
                        </div>
                        <label
                          className="sr-only"
                          htmlFor="search"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            marginBottom: "1rem",
                            padding: "0px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            border: "0px",
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            clip: "rect(0px, 0px, 0px, 0px)",
                          }}
                        >
                          Search Topics
                        </label>
                        <input
                          id="news-subject"
                          name="tx_news_pi1[search][subject]"
                          type="text"
                          placeholder="Search Topics"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            fontSize: "inherit",
                            lineHeight: "inherit",
                            overflow: "visible",
                            boxShadow: "none",
                            appearance: "none",
                            borderWidth: "0px 0px 1px",
                            borderImage: "initial",
                            borderRadius: "0px",
                            outline: "0px",
                            transition: "border 0.3s ease 0s",
                            width: "100%",
                            borderTopStyle: "initial",
                            borderRightStyle: "initial",
                            borderLeftStyle: "initial",
                            borderTopColor: "initial",
                            borderRightColor: "initial",
                            borderLeftColor: "initial",
                            height: "40px",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderBottomStyle: "solid",
                            borderBottomColor: "rgb(20, 77, 146)",
                          }}
                        />
                        <button
                          className="search-box__submit : d-flex-cc"
                          type="submit"
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            border: "0px",
                            padding: "0px",
                            boxShadow: "none",
                            color: "inherit",
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            letterSpacing: "inherit",
                            lineHeight: "inherit",
                            textAlign: "inherit",
                            fontStyle: "inherit",
                            fontFamily: "inherit",
                            borderRadius: "0px",
                            textTransform: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            appearance: "button",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            height: "100%",
                            width: "40px",
                          }}
                        >
                          <span
                            className="sr-only"
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              border: "0px",
                              position: "absolute",
                              width: "1px",
                              height: "1px",
                              clip: "rect(0px, 0px, 0px, 0px)",
                            }}
                          >
                            Submit
                          </span>
                          <i
                            className="icon : icon-search"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              position: "relative",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  id="c59"
                  className="frame frame-default frame-type-list frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="news" style={{ boxSizing: "border-box" }}>
                    <div
                      className="categories-list aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "70px",
                        pointerEvents: "auto",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="categories-list__title : text--14 text--bd"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "14px",
                          lineHeight: 1.4,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "rgb(0, 179, 140)",
                          letterSpacing: "1.4px",
                          paddingBottom: "14px",
                          marginBottom: "14px",
                          position: "relative",
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
                          Categories
                        </h2>
                        <i
                          className="icon : icon-arrow-down"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontSize: "inherit",
                            lineHeight: "inherit",
                            fontWeight: "inherit",
                            color: "inherit",
                            fontFamily: "inherit",
                            letterSpacing: "inherit",
                            position: "relative",
                            width: "13px",
                            height: "7px",
                            display: "none",
                          }}
                        />
                      </div>
                      <ul
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          display: "block",
                        }}
                      >
                        <li
                          className="categories-list__item : is-active aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
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
                          <Link
                            href="/#"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            All
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Internal Medicine"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Internal Medicine"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Ophthalmology"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Ophthalmology"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="General Surgery"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"General Surgery"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Orthopedics"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Orthopedics"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Cardiology"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Cardiology"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Dietetics"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Dietetics"}
                          </Link>
                        </li>
                        <li
                          className="categories-list__item aos-init aos-animate"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            marginTop: "19px",
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
                          <Link
                            href="#"
                            title="Pregnancy Care"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                              paddingLeft: "34px",
                            }}
                          >
                            {"Pregnancy Care"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  id="c60"
                  className="frame frame-default frame-type-list frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="news" style={{ boxSizing: "border-box" }}>
                    <div
                      className="recent-post-list aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "70px",
                        pointerEvents: "auto",
                        transitionTimingFunction: "ease",
                        transitionDuration: "1s",
                        transitionProperty:
                          "opacity, transform, -webkit-transform",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="recent-post-list__title : text--14 text--bd aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "14px",
                          lineHeight: 1.4,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "rgb(0, 179, 140)",
                          letterSpacing: "1.4px",
                          paddingBottom: "14px",
                          marginBottom: "24px",
                          position: "relative",
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
                          Recent Posts
                        </h2>
                      </div>
                      <div
                        className="recent-post-card aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          gap: "13px",
                          maxWidth: "252px",
                          display: "grid",
                          gridTemplateColumns: "56px 1fr",
                          position: "relative",
                          width: "100%",
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
                        <div
                          className="recent-post-card__image"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            borderRadius: "100%",
                            position: "relative",
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            height={56}
                            width={56}
                            src="/3d-render-medical-background-with-male-figure-lungs-covid-19-virus-cells_small.jpg"
                            style={{
                              boxSizing: "border-box",
                              borderStyle: "none",
                              verticalAlign: "middle",
                              margin: "0px",
                              maxHeight: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                            }}
                          />
                        </div>
                        <div
                          className="recent-post-card__content : text--12"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "12px",
                            paddingTop: "2px",
                            lineHeight: 1.5,
                            letterSpacing: "0.12px",
                          }}
                        >
                          <div
                            className="recent-post-card__title : text--gray text--bd"
                            style={{
                              boxSizing: "border-box",
                              fontWeight: 700,
                              color: "rgb(70, 70, 70)",
                            }}
                          >
                            {" "}
                            An interesting case of Legionella pneumonia in a
                            patient with overlap syndrome treated at Aster Oman,
                            Dr. Dilip Abdul Khadar, Specialist, Internal
                            Medicine, Aster Royal Hospital
                          </div>
                          <div
                            className="recent-post-card__text"
                            style={{
                              boxSizing: "border-box",
                              color: "rgb(118, 135, 145)",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                A 48-year-old Arab lady who is on injection
                                Humira…
                              </p>
                            </div>
                            <Link
                              href="#"
                              title=" An interesting case of Legionella pneumonia in a patient with overlap syndrome treated at Aster Oman, Dr. Dilip Abdul Khadar, Specialist, Internal Medicine, Aster Royal Hospital"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              {"Read more"}
                            </Link>
                          </div>
                          <div
                            className="recent-post-card__time"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "9px",
                              color: "rgb(195, 204, 211)",
                            }}
                          >
                            2 days ago
                          </div>
                        </div>
                      </div>
                      <div
                        className="recent-post-card aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          gap: "13px",
                          maxWidth: "252px",
                          display: "grid",
                          gridTemplateColumns: "56px 1fr",
                          position: "relative",
                          width: "100%",
                          pointerEvents: "auto",
                          transitionTimingFunction: "ease",
                          transitionDuration: "1s",
                          marginTop: "20px",
                          transitionProperty:
                            "opacity, transform, -webkit-transform",
                          transitionDelay: "0.2s",
                          opacity: 1,
                          transform: "none",
                        }}
                      >
                        <div
                          className="recent-post-card__image"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            borderRadius: "100%",
                            position: "relative",
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            height={56}
                            width={56}
                            src="/retinal-biometrics-technology-with-man-s-eye-digital-remix.jpg"
                            style={{
                              boxSizing: "border-box",
                              borderStyle: "none",
                              verticalAlign: "middle",
                              margin: "0px",
                              maxHeight: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                            }}
                          />
                        </div>
                        <div
                          className="recent-post-card__content : text--12"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "12px",
                            paddingTop: "2px",
                            lineHeight: 1.5,
                            letterSpacing: "0.12px",
                          }}
                        >
                          <div
                            className="recent-post-card__title : text--gray text--bd"
                            style={{
                              boxSizing: "border-box",
                              fontWeight: 700,
                              color: "rgb(70, 70, 70)",
                            }}
                          >
                            &quot;Understanding Glaucoma: Symptoms, Causes, and
                            Treatment Options&quot; Dr. Saida Yasmeen, Specialist
                            Ophthalmology, Aster Royal Hospital, Ghubra
                          </div>
                          <div
                            className="recent-post-card__text"
                            style={{
                              boxSizing: "border-box",
                              color: "rgb(118, 135, 145)",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
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
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                  }}
                                >

                                </strong>
                                <br style={{ boxSizing: "border-box" }} />{" "}
                                <br style={{ boxSizing: "border-box" }} />{" "}
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                  }}
                                >
                                  Glaucoma
                                </strong>{" "}
                                is the commonest cause of…
                              </p>
                            </div>
                            <Link
                              href="#"
                              title='"Understanding Glaucoma: Symptoms, Causes, and Treatment Options" Dr. Saida Yasmeen, Specialist Ophthalmology, Aster Royal Hospital, Ghubra    '
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              {"Read more"}
                            </Link>
                          </div>
                          <div
                            className="recent-post-card__time"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "9px",
                              color: "rgb(195, 204, 211)",
                            }}
                          >
                            2 days ago
                          </div>
                        </div>
                      </div>
                      <div
                        className="recent-post-card aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          gap: "13px",
                          maxWidth: "252px",
                          display: "grid",
                          gridTemplateColumns: "56px 1fr",
                          position: "relative",
                          width: "100%",
                          pointerEvents: "auto",
                          transitionTimingFunction: "ease",
                          transitionDuration: "1s",
                          marginTop: "20px",
                          transitionProperty:
                            "opacity, transform, -webkit-transform",
                          transitionDelay: "0.2s",
                          opacity: 1,
                          transform: "none",
                        }}
                      >
                        <div
                          className="recent-post-card__image"
                          style={{
                            boxSizing: "border-box",
                            overflow: "hidden",
                            borderRadius: "100%",
                            position: "relative",
                            height: "56px",
                            width: "56px",
                          }}
                        >
                          <img
                            height={56}
                            width={56}
                            src="/Breast-cancer-stage-diagnosis.jpg"
                            style={{
                              boxSizing: "border-box",
                              borderStyle: "none",
                              verticalAlign: "middle",
                              margin: "0px",
                              maxHeight: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                            }}
                          />
                        </div>
                        <div
                          className="recent-post-card__content : text--12"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "12px",
                            paddingTop: "2px",
                            lineHeight: 1.5,
                            letterSpacing: "0.12px",
                          }}
                        >
                          <div
                            className="recent-post-card__title : text--gray text--bd"
                            style={{
                              boxSizing: "border-box",
                              fontWeight: 700,
                              color: "rgb(70, 70, 70)",
                            }}
                          >
                            &quot;Breast Cancer Awareness: Early Detection &
                            Treatment Options” Dr. Abha Singhvi, Specialist
                            Female General Surgeon, Aster Royal Hospital, Ghubra
                          </div>
                          <div
                            className="recent-post-card__text"
                            style={{
                              boxSizing: "border-box",
                              color: "rgb(118, 135, 145)",
                            }}
                          >
                            <div
                              itemProp="description"
                              style={{ boxSizing: "border-box" }}
                            >
                              <h1
                                className="text-justify"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgb(20, 77, 146)",
                                  fontSize: "45px",
                                  lineHeight: 1.2,
                                  letterSpacing: "1.13px",
                                  margin: "0px 0px 15px",
                                  marginTop: "0px",
                                  marginBottom: "15px",
                                }}
                              >
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    fontWeight: 700,
                                  }}
                                >
                                  <em style={{ boxSizing: "border-box" }}>
                                    Breast Cancer Awareness: Early Detection is
                                    your…
                                  </em>
                                </strong>
                              </h1>
                            </div>
                            <Link
                              href="#"
                              title='"Breast Cancer Awareness: Early Detection & Treatment Options”  Dr. Abha Singhvi, Specialist Female General Surgeon, Aster Royal Hospital, Ghubra'
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                transition:
                                  "color 0.3s ease 0s, border 0.3s ease 0s",
                                color: "inherit",
                              }}
                            >
                              {"Read more"}
                            </Link>
                          </div>
                          <div
                            className="recent-post-card__time"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "9px",
                              color: "rgb(195, 204, 211)",
                            }}
                          >
                            2 days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
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
