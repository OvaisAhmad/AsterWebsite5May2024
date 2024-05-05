import React from "react";
import Link from "next/link";

export default function BInformation() {
  return (
    <>
      <section
        className="sec-default : sec-news mt-[150px]"
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
                id="c51"
                className="frame frame-default frame-type-list frame-layout-0"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="news news-single"
                  style={{ boxSizing: "border-box", maxWidth: "722px" }}
                >
                  <div
                    className="article"
                    itemScope="itemscope"
                    itemType="http://schema.org/Article"
                    style={{
                      boxSizing: "border-box",
                      paddingBottom: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <article
                      className="news-single aos-init aos-animate"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "722px",
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
                        className="news-single__header"
                        style={{
                          boxSizing: "border-box",
                          marginBottom: "32px",
                        }}
                      >
                        <figure
                          className="news-single__header-image"
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            margin: "0px 0px 1rem",
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "relative",
                            height: "475px",
                            marginBottom: "18px",
                          }}
                        >
                          <img
                            height={475}
                            width={722}
                            src="/footer_news_1.jpg"
                            style={{
                              boxSizing: "border-box",
                              borderStyle: "none",
                              verticalAlign: "middle",
                              maxHeight: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              margin: "0px",
                              height: "100%",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              top: "0px",
                            }}
                          />
                        </figure>
                        <div
                          className="news-single__header-bottom"
                          style={{
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "18px",
                          }}
                        >
                          <Link
                            className="tag : text--bd"
                            href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              fontWeight: 700,
                              borderRadius: "16px",
                              transition: "background-color 0.3s ease 0s",
                              backgroundColor: "rgb(0, 179, 140)",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "rgb(255, 255, 255)",
                              fontSize: "10px",
                              lineHeight: 1.2,
                              textTransform: "uppercase",
                              padding: "4px 18px",
                              letterSpacing: "1px",
                              marginRight: "20px",
                            }}
                          />
                          <button
                            className="news-single__header-button : news-like"
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
                              appearance: "button",
                              transition: "transform 0.3s ease 0s",
                              display: "flex",
                              alignItems: "center",
                              marginRight: "20px",
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
                            <span style={{ boxSizing: "border-box" }}>11</span>
                          </button>
                          <button
                            className="news-single__header-button : news-share"
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
                              appearance: "button",
                              transition: "transform 0.3s ease 0s",
                              display: "flex",
                              alignItems: "center",
                              marginRight: "20px",
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
                            <span style={{ boxSizing: "border-box" }}>11</span>
                          </button>
                        </div>
                      </div>
                      <div
                        className="news-single__body aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
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
                          className="news-single__date : text--12 text--gray"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "12px",
                            lineHeight: 1.4,
                            color: "rgb(70, 70, 70)",
                            marginBottom: "6px",
                          }}
                        >
                          25/06/2020
                        </div>
                        <header
                          style={{ boxSizing: "border-box", display: "block" }}
                        >
                          <h1
                            style={{
                              boxSizing: "border-box",
                              margin: "0px 0px 15px",
                              marginTop: "0px",
                              fontSize: "25px",
                              lineHeight: 1.3,
                              letterSpacing: "0.63px",
                              color: "rgb(33, 34, 65)",
                              fontWeight: 700,
                              fontFamily: "Lato, sans-serif",
                              marginBottom: "22px",
                            }}
                          >
                            Frontline Warriors and Volunteers from two Al Warsan
                            isolation facilities honoured
                          </h1>
                        </header>
                        <div
                          className="teaser-text"
                          itemProp="description"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "15px",
                            color: "rgb(136, 136, 136)",
                            margin: "0px 0px 10px",
                            marginBottom: "10px",
                          }}
                        >
                          <h2
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.28,
                              margin: "0px 0px 20px",
                              marginTop: "0px",
                              color: "rgb(33, 34, 65)",
                              fontWeight: 700,
                              fontFamily: "Lato, sans-serif",
                              fontSize: "16px",
                              letterSpacing: "0.4px",
                              marginBottom: "10px",
                            }}
                          >
                            Frontline Warriors and Volunteers from two Al Warsan
                            isolation facilities honoured
                          </h2>
                        </div>
                        <div
                          className="news-text-wrap"
                          itemProp="articleBody"
                          style={{
                            boxSizing: "border-box",
                            marginBottom: "10px",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              letterSpacing: "0.4px",
                              marginBottom: "22px",
                            }}
                          >
                            Frontline Warriors and Volunteers from two Al Warsan
                            isolation facilities honoured
                          </p>
                        </div>
                      </div>
                      <div
                        className="news-single__footer : text--blue text--bd aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          fontWeight: 700,
                          color: "rgb(20, 77, 146)",
                          gap: "30px",
                          display: "grid",
                          alignItems: "flex-start",
                          gridTemplateColumns: "repeat(2, 1fr)",
                          marginTop: "100px",
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
                          className="news-single__footer-nav : news-single__footer-nav--prev"
                          style={{ boxSizing: "border-box" }}
                        >
                          <Link
                            className="back-link : text--14 text--bd"
                            href="https://www.aster.om/health-library/newsdetail/aster-al-raffah-hosptal-in-association-with-omans-ministry-of-health-launches-free-mobile-testing-service"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              fontSize: "14px",
                              lineHeight: 1.4,
                              fontWeight: 700,
                              display: "inline-flex",
                              alignItems: "center",
                              position: "relative",
                              color: "rgb(0, 179, 140)",
                              marginBottom: "10px",
                            }}
                          >
                            Previous Post
                          </Link>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                            }}
                          >
                            Aster Al Raffah Hosptal, in Association with Oman’s
                            Ministry of Health, Launches Free Mobile Testing
                            Service
                          </p>
                        </div>
                        <div
                          className="news-single__footer-nav : news-single__footer-nav--next"
                          style={{
                            boxSizing: "border-box",
                            textAlign: "end",
                          }}
                        >
                          <Link
                            className="next-link : text--14 text--bd"
                            href="https://www.aster.om/health-library/newsdetail/can-yoga-cure-acid-reflux"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              fontSize: "14px",
                              lineHeight: 1.4,
                              fontWeight: 700,
                              display: "inline-flex",
                              alignItems: "center",
                              position: "relative",
                              color: "rgb(0, 179, 140)",
                              marginBottom: "10px",
                            }}
                          >
                            Next Post
                          </Link>
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              letterSpacing: "0.4px",
                            }}
                          >
                            Can Yoga Cure Acid Reflux?
                          </p>
                        </div>
                      </div>
                      <div
                        className="share-article aos-init aos-animate"
                        style={{
                          boxSizing: "border-box",
                          position: "fixed",
                          zIndex: 8,
                          top: "50%",
                          left: "0px",
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
                        <ul
                          style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "0px",
                            margin: "0px",
                            marginTop: "0px",
                            marginBottom: "0px",
                            fontSize: "0px",
                            lineHeight: 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <div
                              className="share-article__item : share-article__total"
                              style={{
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                width: "52px",
                                height: "53px",
                                color: "rgb(33, 34, 65)",
                                fontWeight: 800,
                                pointerEvents: "none",
                              }}
                            >
                              <span
                                className="share-article__total-count : text--15"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "15px",
                                  lineHeight: 1,
                                }}
                              >
                                297
                              </span>
                              <span
                                className="share-article__total-text : text--10"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "10px",
                                  lineHeight: 1.5,
                                }}
                              >
                                Shares
                              </span>
                            </div>
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <Link
                              className="share-article__item : share-article__item--facebook"
                              href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                color: "rgb(255, 255, 255)",
                                width: "52px",
                                height: "53px",
                                backgroundColor: "rgb(58, 87, 154)",
                                borderTopRightRadius: "9px",
                              }}
                            >
                              <i
                                className="icon : icon-facebook"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "9px",
                                  height: "18px",
                                  marginBottom: "2px",
                                }}
                              />
                              <span
                                className="text--12 : text--hvy"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 800,
                                }}
                              >
                                62
                              </span>
                            </Link>
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <Link
                              className="share-article__item : share-article__item--twitter"
                              href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                color: "rgb(255, 255, 255)",
                                width: "52px",
                                height: "53px",
                                backgroundColor: "rgb(0, 171, 240)",
                              }}
                            >
                              <i
                                className="icon : icon-twitter"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "16px",
                                  height: "13px",
                                  marginBottom: "2px",
                                }}
                              />
                              <span
                                className="text--12 : text--hvy"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 800,
                                }}
                              >
                                15
                              </span>
                            </Link>
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <Link
                              className="share-article__item : share-article__item--instagram"
                              href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                color: "rgb(255, 255, 255)",
                                width: "52px",
                                height: "53px",
                                backgroundColor: "rgb(209, 8, 105)",
                              }}
                            >
                              <i
                                className="icon : icon-instagram"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "17px",
                                  height: "17px",
                                  marginBottom: "2px",
                                }}
                              />
                              <span
                                className="text--12 : text--hvy"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 800,
                                }}
                              >
                                90
                              </span>
                            </Link>
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <Link
                              className="share-article__item : share-article__item--linkedin"
                              href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                color: "rgb(255, 255, 255)",
                                width: "52px",
                                height: "53px",
                                backgroundColor: "rgb(0, 119, 181)",
                              }}
                            >
                              <i
                                className="icon : icon-linkedin"
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  position: "relative",
                                  width: "15px",
                                  height: "15px",
                                  marginBottom: "2px",
                                }}
                              />
                              <span
                                className="text--12 : text--hvy"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 800,
                                }}
                              >
                                15
                              </span>
                            </Link>
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              padding: "0px",
                              display: "inline-block",
                            }}
                          >
                            <Link
                              className="share-article__item : share-article__item--heart"
                              href="https://www.aster.om/health-library/newsdetail/frontline-warriors-and-volunteers-from-two-al-warsan-isolation-facilities-honoured#"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "width 0.3s ease 0s",
                                flexDirection: "column",
                                color: "rgb(255, 255, 255)",
                                width: "52px",
                                height: "53px",
                                backgroundColor: "rgb(249, 81, 73)",
                                borderBottomRightRadius: "9px",
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
                                  marginBottom: "2px",
                                }}
                              />
                              <span
                                className="text--12 : text--hvy"
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                  lineHeight: 1.4,
                                  fontWeight: 800,
                                }}
                              >
                                115
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </article>
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
                  id="c61"
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

                    </div>
                  </div>
                </div>
                <div
                  id="c62"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=7&cHash=803bbea5eaf46081c7404507072e9432"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=6&cHash=83051e60baa43488a97683da5229bda7"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=5&cHash=385e02ee1aed100f8b496750a7e2b817"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=4&cHash=3223ae774ada8de99b872f26eca82309"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=3&cHash=b81261c540b4f203af7a301167dd46bb"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=1&cHash=e4830460415bca438488c76644edaf19"
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
                            href="https://www.aster.om/health-library?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D=2&cHash=7da341a9d431f8bcc8e040af1e3f3f24"
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
                  id="c63"
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
                              href="https://www.aster.om/health-library/newsdetail/an-interesting-case-of-legionella-pneumonia-in-a-patient-with-overlap-syndrome-treated-at-aster-oman-dr-dilip-abdul-khadar-specialist-internal-medicine-aster-royal-hospital"
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
                              href="https://www.aster.om/health-library/newsdetail/understanding-glaucoma-symptoms-causes-and-treatment-options-dr-saida-yasmeen-specialist-ophthalmology-aster-royal-hospital-ghubra"
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
                              href="https://www.aster.om/health-library/newsdetail/breast-cancer-awareness-early-detection-treatment-options-dr-abha-singhvi-specialist-female-general-surgeon-aster-royal-hospital-ghubra"
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
