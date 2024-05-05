import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ADescription() {
  const { t } = useTranslation("");
  return (
    <div className="topbar_wrapper" style={{width: "100%"}}>
      <div className="inner_wrapper">
        <div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft:0
            }}
          >
            <li
              className="breadcrumbs__item : breadcrumbs__item--home"
              style={{
                display: "inline-flex",
                paddingLeft: "0px",
                paddingRight: "5px",
              }}
            >
              <Link
                className="breadcrumbs__link : text--14"
                href="/"
                style={{
                  boxSizing: "border-box",
                  lineHeight: 0,
                }}
              >
                  <img src="/home.svg" alt="Instagram Icon" width="17" height="17"
                />
              </Link>
            </li>
            <li
              className="breadcrumbs__item"
              style={{
                boxSizing: "border-box",
                display: "inline-flex",
                fontWeight: 700,
              }}
            >
              <Link
                className="breadcrumbs__link : text--14"
                href="/about"
                target="_self"
                title="ABOUT ASTER"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.4,
                  color: "rgb(20, 77, 146)",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                }}
              >
                {" / "}
                {t("aboutaster.ABOUT ASTER")}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="page-header__text abt_topcontent"
          style={{ boxSizing: "border-box", marginTop: "27px"}}
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
            {t("aboutaster.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
