import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";



export default function Footer({ post, facilities, newses }) {
  const { t } = useTranslation("");
  const chunkSize = 10;
  const chunks = [];
  const chunks2 = [];

  for (let i = 0; i < post?.length; i += chunkSize) {
    chunks.push(post?.slice(i, i + chunkSize));
  }

  for (let i = 0; i < facilities?.length; i += chunkSize) {
    chunks2.push(facilities?.slice(i, i + chunkSize));
  }

  return (
    <>
      <div
        className="site-footer__main : text--14 bg-blue "
        style={{
          boxSizing: "border-box",
          fontSize: "14px",
          lineHeight: 1.4,
          backgroundColor: "rgb(20, 77, 146)",
          color: "rgb(255, 255, 255)",
          paddingBottom: "52px",
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
            style={{ boxSizing: "border-box", marginBottom: "55px" }}
          >
            <Image
              alt="Image"
              src="/medcare.jpg"
              width={311}
              height={205}
              style={{
                boxSizing: "border-box",
                borderStyle: "none",
                verticalAlign: "middle",
                margin: "0px",
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                marginTop: "-95px",
              }}
            />
          </div>
          <div
            className="row site-footer__image footer_conatiner_lg"
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
            }}
          >
            <div
              className="col-sm-3 : col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "25%",
                maxWidth: "25%",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="site-footer__nav"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="site-footer__nav-title : title--h6"
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.22,
                    letterSpacing: "0.45px",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "inherit",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {t("footer.Patient Services")}
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
                <div
                  id="c6"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <ul
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "34px",
                        }}
                      >
                        {" "}
                        <li style={{ boxSizing: "border-box" }}>
                          <Link
                            href="/appointment"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Online Appointments")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/appointment"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Tele Consultation")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/admission-and-discharge"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Admission and Discharge")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Insurance")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Guidelines for Patients")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/rights-and-responsibilities"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Patient Rights and Responsibilities")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Service Providing Policy")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Refund/Return Policy")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Cancellation Policy")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Privacy Policy")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="https://pp.aster.om/"
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
                            {t("header.Patient Portal")}
                          </Link>
                        </li>{" "}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div
                className="site-footer__nav"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="site-footer__nav-title : title--h6"
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.22,
                    letterSpacing: "0.45px",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "inherit",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {t("footer.Corporate")}
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
                <div
                  id="c7"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <ul
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "34px",
                        }}
                      >
                        {" "}
                        <li style={{ boxSizing: "border-box" }}>
                          <Link
                            href="/about"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.About Aster")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/about/chairman"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("about.Chairmans Message")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Vision Values and Promise")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Leadership Team")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.CSR - Aster Volunteers")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/about/careers"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("about.Careers")}
                          </Link>
                        </li>{" "}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div
                className="site-footer__logo"
                style={{
                  boxSizing: "border-box",
                  marginTop: "auto",
                  marginBottom: "32px",
                }}
              >
                <Link
                  href="/"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                    color: "inherit",
                  }}
                >
                  <Image
                    alt="Aster DM"
                    src="/footer_logo.svg"
                    width={0}
                    height={0}
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
                </Link>
              </div>
            </div>
            <div
              className="col-sm-3 : col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "25%",
                maxWidth: "25%",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="site-footer__nav"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="site-footer__nav-title : title--h6"
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.22,
                    letterSpacing: "0.45px",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "inherit",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {t("footer.Specialisations")}
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
                <div
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    margin: "0px",
                    padding: "0px",
                    marginTop: "0px",
                    marginBottom: "34px",
                  }}
                >
                  {chunks.map((chunk, columnIndex) => (
                    <div key={columnIndex}>
                      {chunk.map((post, index) => (
                        <div style={{ boxSizing: "border-box" }} key={index} className="mt-[9px]">
                          <Link
                            href={`/specialities/${post?.slug}`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {post?.title}
                          </Link>
                        </div>
                      ))}

                    </div>

                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 : col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "25%",
                maxWidth: "25%",
                paddingLeft: "8px",
                paddingRight: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="site-footer__nav"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="site-footer__nav-title : title--h6"
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.22,
                    letterSpacing: "0.45px",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "inherit",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {t("footer.Facilities & Services")}
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
                <div
                  id="c9"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <div
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "34px",
                        }}
                      >
                        {chunks2.map((chunk, columnIndex) => (
                          <div key={columnIndex}>
                            {chunk.map((post, index) => (
                              <div style={{ boxSizing: "border-box" }} key={index} className="mt-[9px]">
                                <Link
                                  href={`/facilities/${(post?.slug)}`}
                                  style={{
                                    boxSizing: "border-box",
                                    backgroundColor: "transparent",
                                    textDecoration: "none",
                                    transition:
                                      "color 0.3s ease 0s, border 0.3s ease 0s",
                                    color: "inherit",
                                  }}
                                >
                                  {post?.title ? post?.title : ''}
                                </Link>
                              </div>
                            ))}
                          </div>
                        ))}
                        <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                          <Link
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                            href={`/facilities/aster-preventive-health-check`}>
                            {t("facilities.Aster Preventive Health Check")}
                          </Link>
                        </div>
                        <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                          <Link
                            href={`/facilities/faqs-health-check`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("facilities.FAQ’s – Health check")}
                          </Link>
                        </div>
                        <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                          <Link
                            href={`/facilities/aster-integrated-liver-clinic`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("facilities.Aster Integrated Liver Clinic")}
                          </Link>
                        </div>
                        <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                          <Link
                            href={`/facilities/aster-nurture`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("facilities.Aster Nuture")}
                          </Link>
                        </div>
                        <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                          <Link
                            href={`/facilities/plan-your-visit`}
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("facilities.Plan your visit")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div
                id="c22"
                className="frame frame-default frame-type-list frame-layout-0"
                style={{ boxSizing: "border-box" }}
              >
                <div className="news" style={{ boxSizing: "border-box" }}>
                  <div
                    className="news-room"
                    style={{ boxSizing: "border-box", marginTop: "60px" }}
                  >
                    <div
                      className="news-room__title : text--14"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        marginBottom: "8px",
                      }}
                    >
                      <h3
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
                        {t("footer.News Room")}
                      </h3>
                    </div>
                    {newses?.nodes?.map((news, index) => (
                      <article
                        className="footer-article : text--12"
                        key={index}
                        style={{
                          boxSizing: "border-box",
                          fontSize: "12px",
                          lineHeight: 1.25,
                          marginBottom: "50px",
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <Link href={news.newsFields.mapUrl} target="_blank">
                          <div className="flex flex-row items-start justify-start gap-[25px]">
                            <img
                              className="relative rounded w-[61px] h-[61px] object-cover"
                              alt=""
                              src={news.featuredImage?.node.sourceUrl}
                            />
                            <div className="footer_tile self-stretch relative capitalize inline-block w-[180px] shrink-0">{news.title}</div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-3 : col-xs-12"
              style={{
                flex: "0 0 auto",
                boxSizing: "border-box",
                WebkitBoxFlex: "0",
                flexBasis: "25%",
                maxWidth: "25%",
                paddingRight: "8px",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "40px",
              }}
            >
              <div
                className="site-footer__nav"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="site-footer__nav-title : title--h6"
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.22,
                    letterSpacing: "0.45px",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "inherit",
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {t("footer.Aster Media Centre")}
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
                <div
                  id="c10"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <ul
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "0px",
                          marginBottom: "34px",
                        }}
                      >
                        {" "}
                        <li style={{ boxSizing: "border-box" }}>
                          <Link
                            href="/news-room"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.News & Events")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/blog"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("hero.Health Library")}
                          </Link>
                        </li>{" "}
                        <li
                          style={{ boxSizing: "border-box", marginTop: "8px" }}
                        >
                          <Link
                            href="/"
                            style={{
                              boxSizing: "border-box",
                              backgroundColor: "transparent",
                              textDecoration: "none",
                              transition:
                                "color 0.3s ease 0s, border 0.3s ease 0s",
                              color: "inherit",
                            }}
                          >
                            {t("footer.Patient Testimonials")}
                          </Link>
                        </li>{" "}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              />
              <address
                style={{
                  boxSizing: "border-box",
                  fontStyle: "normal",
                  margin: "34px 0px 0px",
                  lineHeight: 1.9,
                  marginBottom: "0px",
                }}
              >
                <strong
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {t("footer.Corporate HQ")}
                </strong>
                <br style={{ boxSizing: "border-box" }} />
                {t("footer.33rd Floor, Aspect Towers,")}
                <br style={{ boxSizing: "border-box" }} />
                {t("footer.Business Bay, Dubai, UAE")}
                <br style={{ boxSizing: "border-box" }} />
                <Link
                  href="mailto:info@asterhospital.com"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                    color: "inherit",
                  }}
                >
                  info@asterhospital.com
                </Link>
              </address>
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              />
              <div
                className="site-footer__region"
                style={{ boxSizing: "border-box", marginTop: "46px" }}
              >
                <h5
                  style={{
                    boxSizing: "border-box",
                    color: "rgb(20, 77, 146)",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    margin: "0px 0px 15px",
                    marginTop: "0px",
                    marginBottom: "15px",
                  }}
                >
                  {t("footer.Change Region")}
                </h5>
                <select
                  id="change_region"
                  className="custom-select select2-hidden-accessible"
                  name="change_region"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    overflowWrap: "normal",
                    textTransform: "none",
                    boxShadow: "none",
                    appearance: "none",
                    border: "0px",
                    overflow: "hidden",
                    padding: "0px",
                    whiteSpace: "nowrap",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    position: "absolute",
                    width: "1px",
                  }}
                >
                  <option style={{ boxSizing: "border-box" }} />{" "}
                  <option
                    value="https://www.asterhospitals.ae/"
                    style={{ boxSizing: "border-box" }}
                  >
                    UAE
                  </option>
                  <option
                    value="https://www.astersanad.sa/"
                    style={{ boxSizing: "border-box" }}
                  >
                    KSA
                  </option>
                  <option
                    value="https://www.aster.om/"
                    style={{ boxSizing: "border-box" }}
                  >
                    Oman
                  </option>
                  <option
                    value="https://www.aster.bh/"
                    style={{ boxSizing: "border-box" }}
                  >
                    Bahrain
                  </option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "inline-block",
                    position: "relative",
                    verticalAlign: "middle",
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "0.8px",
                    zIndex: 99,
                    color: "rgb(255, 255, 255)",
                    fontSize: "inherit",
                    width: "auto",
                  }}
                >
                  <span
                    className="selection"
                    style={{ boxSizing: "border-box" }}
                  >
                    <span
                      className="select2-selection select2-selection--single"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-labelledby="select2-change_region-container"
                      role="combobox"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cursor: "pointer",
                        display: "flex",
                        height: "34px",
                        userSelect: "none",
                        alignItems: "center",
                        borderBottom: "1px solid rgb(20, 77, 146)",
                      }}
                    >
                      <span
                        id="select2-change_region-container"
                        className="select2-selection__rendered"
                        aria-readonly="true"
                        role="textbox"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          display: "block",
                          paddingRight: "30px",
                          textOverflow: "ellipsis",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          className="select2-selection__placeholder"
                          style={{ boxSizing: "border-box" }}
                        >
                          {t("footer.United Arab Emirates")}
                        </span>
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                        style={{
                          boxSizing: "border-box",
                          height: "34px",
                          position: "absolute",
                          top: "1px",
                          right: "1px",
                          width: "20px",
                        }}
                      >
                        <b
                          role="presentation"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 700,
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center center",
                            left: "50%",
                            marginLeft: "-8px",
                            marginTop: "-5px",
                            position: "absolute",
                            top: "50%",
                            width: "14px",
                            height: "8px",
                            WebkitMaskSize: "contain",
                            WebkitMaskImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.14' height='6.941' viewBox='0 0 12.14 6.941'%3E%3Cpath id='Icon_ionic-ios-arrow-down' data-name='Icon ionic-ios-arrow-down' d='M12.26,16.1,16.85,11.5a.864.864,0,0,1,1.225,0,.875.875,0,0,1,0,1.229l-5.2,5.2a.866.866,0,0,1-1.2.025L6.441,12.734A.868.868,0,1,1,7.666,11.5Z' transform='translate(-6.188 -11.246)' fill='%23fff'/%3E%3C/svg%3E%0A\")",
                            backgroundColor: "rgb(0, 179, 140)",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span
                    className="dropdown-wrapper"
                    aria-hidden="true"
                    style={{ boxSizing: "border-box" }}
                  />
                </span>
              </div>
              <div
                className="site-footer__social-media"
                style={{ boxSizing: "border-box", marginTop: "45px" }}
              >
                <div className="social-nav" style={{ boxSizing: "border-box" }}>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      margin: "0px",
                      padding: "0px",
                      marginTop: "0px",
                      marginBottom: "24px",
                    }}
                  >
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-linkedin group-hover:bg-green-600"
                        href="https://www.linkedin.com/feed/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          linkedin
                        </span>
                        <img src="/linkedin.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-facebook group-hover:bg-green-600"
                        href="https://www.facebook.com/andreas.collete"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          facebook
                        </span>
                        <img src="/facebook.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-twitter group-hover:bg-green-600"
                        href="https://twitter.com/YPXYLON"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          twitter
                        </span>
                        <img src="/twitter.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-youtube group-hover:bg-green-600"
                        href="https://www.youtube.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          youtube
                        </span>
                        <img src="/youtube.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block  mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-instagram group-hover:bg-green-600"
                        href="https://www.instagram.com/?hl=en"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          instagram
                        </span>
                        <img src="/instagram-logo.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="site-footer__tel : text--18"
                  href="tel:800"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                    color: "inherit",
                    fontSize: "18px",
                    lineHeight: 1.22,
                    display: "inline-flex",
                    alignItems: "center",
                    letterSpacing: "1.8px",
                  }}
                >
                  <i
                    className="icon : icon-telephone"
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
                    800
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: 700 }}
                    >
                      {t("footer.ASTER")}
                    </strong>
                  </span>
                </Link>
              </div>
              <div
                className="site-footer__copywrite : text--12"
                style={{
                  boxSizing: "border-box",
                  fontSize: "12px",
                  lineHeight: 1.4,
                  marginTop: "50px",
                }}
              >
                <div
                  id="c11"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        <Image
                          height={46}
                          width={47}
                          alt=""
                          src="/certificate.png"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            margin: "0px",
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "cover",
                            height: "46px",
                            width: "47px",
                          }}
                        />
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                          marginTop: "8px",
                        }}
                      >
                        {t("footer.MOH Approval. MW27059.")}
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                          marginTop: "8px",
                        }}
                      >
                        {t("footer.© 2023 ASTER GROUP. All rights reserved.")}
                      </p>

                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_conatiner_md">
            <details style={{ fontSize: 16, marginBottom: 10 }}>
              <summary>
                {t("footer.Patient Services")}
              </summary>
              <ul
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "34px",
                }}
              >
                {" "}
                <li style={{ boxSizing: "border-box" }}>
                  <Link
                    href="/appointment"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Online Appointments")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/appointment"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Tele Consultation")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/admission-and-discharge"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Admission and Discharge")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Insurance")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Guidelines for Patients")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/rights-and-responsibilities"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Patient Rights and Responsibilities")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Service Providing Policy")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Refund/Return Policy")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Cancellation Policy")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Privacy Policy")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="https://pp.aster.om/"
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
                    {t("header.Patient Portal")}
                  </Link>
                </li>{" "}
              </ul>
            </details>
            <details style={{ fontSize: 16, marginBottom: 10 }}>
              <summary>
                {t("footer.Specialisations")}
              </summary>
              <div
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "34px",
                }}
              >
                {chunks.map((chunk, columnIndex) => (
                  <div key={columnIndex}>
                    {chunk.map((post, index) => (
                      <div style={{ boxSizing: "border-box" }} key={index} className="mt-[9px]">
                        <Link
                          href={`/specialities/${post?.slug}`}
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                            color: "inherit",
                          }}
                        >
                          {post?.title}
                        </Link>
                      </div>
                    ))}

                  </div>

                ))}
              </div>
            </details>



            <details style={{ fontSize: 16, marginBottom: 10 }}>
              <summary>
                {t("footer.Facilities & Services")}
              </summary>
              <div
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "34px",
                }}
              >
                {chunks2.map((chunk, columnIndex) => (
                  <div key={columnIndex}>
                    {chunk.map((post, index) => (
                      <div style={{ boxSizing: "border-box" }} key={index} className="mt-[9px]">
                        <Link
                          href={`/facilities/${(post?.slug)}`}
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            transition:
                              "color 0.3s ease 0s, border 0.3s ease 0s",
                            color: "inherit",
                          }}
                        >
                          {post?.title ? post?.title : ''}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}

                <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                  <Link
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                    href={`/facilities/aster-preventive-health-check`}>
                    {t("facilities.Aster Preventive Health Check")}
                  </Link>
                </div>
                <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                  <Link
                    href={`/facilities/faqs-health-check`}
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("facilities.FAQ’s – Health check")}
                  </Link>
                </div>
                <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                  <Link
                    href={`/facilities/aster-integrated-liver-clinic`}
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("facilities.Aster Integrated Liver Clinic")}
                  </Link>
                </div>
                <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                  <Link
                    href={`/facilities/aster-nurture`}
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("facilities.Aster Nuture")}
                  </Link>
                </div>
                <div style={{ boxSizing: "border-box" }} className="mt-[9px]">
                  <Link
                    href={`/facilities/plan-your-visit`}
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("facilities.Plan your visit")}
                  </Link>
                </div></div>
            </details>
            <details style={{ fontSize: 16, marginBottom: 10 }}>
              <summary>
                {t("footer.Aster Media Centre")}
              </summary>
              <ul
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "34px",
                }}
              >
                {" "}
                <li style={{ boxSizing: "border-box" }}>
                  <Link
                    href="/news-room"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.News & Events")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/blog"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("hero.Health Library")}
                  </Link>
                </li>{" "}
                <li
                  style={{ boxSizing: "border-box", marginTop: "8px" }}
                >
                  <Link
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      transition:
                        "color 0.3s ease 0s, border 0.3s ease 0s",
                      color: "inherit",
                    }}
                  >
                    {t("footer.Patient Testimonials")}
                  </Link>
                </li>{" "}
              </ul>
            </details>
            <div>
              <div style={{ marginTop: 40 }}>
                <img src="/one_aster.svg" alt="One Aster" />
              </div>
              <p>Your personalised healthcare assistant for all your healthcare needs</p>

              <address
                style={{
                  boxSizing: "border-box",
                  fontStyle: "normal",
                  margin: "34px 0px 0px",
                  lineHeight: 1.9,
                  marginBottom: "0px",
                }}
              >
                <strong
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {t("footer.Corporate HQ")}
                </strong>
                <br style={{ boxSizing: "border-box" }} />
                {t("footer.33rd Floor, Aspect Towers,")}
                <br style={{ boxSizing: "border-box" }} />
                {t("footer.Business Bay, Dubai, UAE")}
                <br style={{ boxSizing: "border-box" }} />
                <Link
                  href="mailto:info@asterhospital.com"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                    color: "inherit",
                  }}
                >
                  info@asterhospital.com
                </Link>
              </address>
              <p
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  letterSpacing: "0.4px",
                }}
              />
              <div
                className="site-footer__region"
                style={{ boxSizing: "border-box", marginTop: "46px" }}
              >
                <h5
                  style={{
                    boxSizing: "border-box",
                    color: "rgb(20, 77, 146)",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    margin: "0px 0px 15px",
                    marginTop: "0px",
                    marginBottom: "15px",
                  }}
                >
                  {t("footer.Change Region")}
                </h5>
                <select
                  id="change_region"
                  className="custom-select select2-hidden-accessible"
                  name="change_region"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    overflowWrap: "normal",
                    textTransform: "none",
                    boxShadow: "none",
                    appearance: "none",
                    border: "0px",
                    overflow: "hidden",
                    padding: "0px",
                    whiteSpace: "nowrap",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    position: "absolute",
                    width: "1px",
                  }}
                >
                  <option style={{ boxSizing: "border-box" }} />{" "}
                  <option
                    value="https://www.asterhospitals.ae/"
                    style={{ boxSizing: "border-box" }}
                  >
                    UAE
                  </option>
                  <option
                    value="https://www.astersanad.sa/"
                    style={{ boxSizing: "border-box" }}
                  >
                    KSA
                  </option>
                  <option
                    value="https://www.aster.om/"
                    style={{ boxSizing: "border-box" }}
                  >
                    Oman
                  </option>
                  <option
                    value="https://www.aster.bh/"
                    style={{ boxSizing: "border-box" }}
                  >
                    Bahrain
                  </option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "inline-block",
                    position: "relative",
                    verticalAlign: "middle",
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "0.8px",
                    zIndex: 99,
                    color: "rgb(255, 255, 255)",
                    fontSize: "inherit",
                    width: "auto",
                  }}
                >
                  <span
                    className="selection"
                    style={{ boxSizing: "border-box" }}
                  >
                    <span
                      className="select2-selection select2-selection--single"
                      aria-disabled="false"
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-labelledby="select2-change_region-container"
                      role="combobox"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cursor: "pointer",
                        display: "flex",
                        height: "34px",
                        userSelect: "none",
                        alignItems: "center",
                        borderBottom: "1px solid rgb(20, 77, 146)",
                      }}
                    >
                      <span
                        id="select2-change_region-container"
                        className="select2-selection__rendered"
                        aria-readonly="true"
                        role="textbox"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          display: "block",
                          paddingRight: "30px",
                          textOverflow: "ellipsis",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          className="select2-selection__placeholder"
                          style={{ boxSizing: "border-box" }}
                        >
                          {t("footer.United Arab Emirates")}
                        </span>
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                        style={{
                          boxSizing: "border-box",
                          height: "34px",
                          position: "absolute",
                          top: "1px",
                          right: "1px",
                          width: "20px",
                        }}
                      >
                        <b
                          role="presentation"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 700,
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center center",
                            left: "50%",
                            marginLeft: "-8px",
                            marginTop: "-5px",
                            position: "absolute",
                            top: "50%",
                            width: "14px",
                            height: "8px",
                            WebkitMaskSize: "contain",
                            WebkitMaskImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.14' height='6.941' viewBox='0 0 12.14 6.941'%3E%3Cpath id='Icon_ionic-ios-arrow-down' data-name='Icon ionic-ios-arrow-down' d='M12.26,16.1,16.85,11.5a.864.864,0,0,1,1.225,0,.875.875,0,0,1,0,1.229l-5.2,5.2a.866.866,0,0,1-1.2.025L6.441,12.734A.868.868,0,1,1,7.666,11.5Z' transform='translate(-6.188 -11.246)' fill='%23fff'/%3E%3C/svg%3E%0A\")",
                            backgroundColor: "rgb(0, 179, 140)",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span
                    className="dropdown-wrapper"
                    aria-hidden="true"
                    style={{ boxSizing: "border-box" }}
                  />
                </span>
              </div>
              <div
                className="site-footer__social-media"
                style={{ boxSizing: "border-box", marginTop: "45px" }}
              >
                <div className="social-nav" style={{ boxSizing: "border-box" }}>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      margin: "0px",
                      padding: "0px",
                      marginTop: "0px",
                      marginBottom: "24px",
                    }}
                  >
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-linkedin group-hover:bg-green-600"
                        href="https://www.linkedin.com/feed/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          linkedin
                        </span>
                        <img src="/linkedin.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-facebook group-hover:bg-green-600"
                        href="https://www.facebook.com/andreas.collete"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          facebook
                        </span>
                        <img src="/facebook.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-twitter group-hover:bg-green-600"
                        href="https://twitter.com/YPXYLON"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          twitter
                        </span>
                        <img src="/twitter.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block mr-5 mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginRight: "5px",
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-youtube group-hover:bg-green-600"
                        href="https://www.youtube.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          youtube
                        </span>
                        <img src="/youtube.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                    <li
                      className="inline-block  mt-0 group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "0px",
                        lineHeight: 0,
                        marginTop: "0px",
                      }}
                    >
                      <Link
                        className="social-nav__link : social-nav__link-instagram group-hover:bg-green-600"
                        href="https://www.instagram.com/?hl=en"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "100%",
                          border: "2px solid currentcolor",
                          transition:
                            "border 0.3s ease 0s, background-color 0.3s ease 0s",
                          width: "38px",
                          height: "38px",
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
                          instagram
                        </span>
                        <img src="/instagram-logo.svg" alt="Instagram Icon" width="17" height="17"
                          style={{ filter: 'invert(1)', fill: 'white' }}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="site-footer__tel : text--18"
                  href="tel:800"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition: "color 0.3s ease 0s, border 0.3s ease 0s",
                    color: "inherit",
                    fontSize: "18px",
                    lineHeight: 1.22,
                    display: "inline-flex",
                    alignItems: "center",
                    letterSpacing: "1.8px",
                  }}
                >
                  <i
                    className="icon : icon-telephone"
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
                    800
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: 700 }}
                    >
                      {t("footer.ASTER")}
                    </strong>
                  </span>
                </Link>
              </div>
              <div
                className="site-footer__copywrite : text--12"
                style={{
                  boxSizing: "border-box",
                  fontSize: "12px",
                  lineHeight: 1.4,
                  marginTop: "50px",
                }}
              >
                <div
                  id="c11"
                  className="frame frame-default frame-type-text frame-layout-0"
                  style={{ boxSizing: "border-box" }}
                >
                  <section
                    className=":"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
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
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        <Image
                          height={46}
                          width={47}
                          alt=""
                          src="/certificate.png"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            margin: "0px",
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "cover",
                            height: "46px",
                            width: "47px",
                          }}
                        />
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                          marginTop: "8px",
                        }}
                      >
                        {t("footer.MOH Approval. MW27059.")}
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          marginBottom: "0px",
                          letterSpacing: "0.4px",
                          marginTop: "8px",
                        }}
                      >
                        {t("footer.© 2023 ASTER GROUP. All rights reserved.")}
                      </p>

                    </div>
                  </section>
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
