import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import Link from "next/link";
import $ from 'jquery';


const Navbar = ({ post, facilities }) => {

  const { t } = useTranslation("");
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      $(document).ready(function () {
        $(".aboutus_drop_box").hide();
        $(".specialities_drop_box").hide();
        $(".facilities_drop_box").hide();

        $(".aboutus_drop_box").on("mouseover", function () {
          $(".aboutus_drop_box").show();
        });
        $(".aboutus_dropdown_link").on("mouseout", function () {
          $(".aboutus_drop_box").hide();
        });

        $(".specialities_drop_box").on("mouseover", function () {
          $(".specialities_drop_box").show();
        });
        $(".specialities_dropdown_link").on("mouseout", function () {
          $(".specialities_drop_box").hide();
        });

        $(".facilities_drop_box").on("mouseover", function () {
          $(".facilities_drop_box").show();
        });
        $(".facilities_dropdown_link").on("mouseout", function () {
          $(".facilities_drop_box").hide();
        });

      });
    }
  }, []);


  const chunkSize = 10;
  const chunks = [];
  const chunks2 = [];

  for (let i = 0; i < post?.length; i += chunkSize) {
    chunks?.push(post?.slice(i, i + chunkSize));
  }

  for (let i = 0; i < facilities?.length; i += chunkSize) {
    chunks2?.push(facilities?.slice(i, i + chunkSize));
  }

  return (
    <div className="navbar_wrapper">
      <div className="navebar_container">
        <div>
          <Link href="/">
            <img className="relative w-[259px] h-[55px] object-cover" alt="LogoImage"
              src="/aster-oman-logo.png" />
          </Link>
        </div>
        <div>
          <div>
            <nav id="main_nav">
              <ul className="navbar_menu_container font_Titillium_semibold">
                <li>
                  <Link href="https://pp.aster.om" title="Patient Portal">
                    {t("header.Patient Portal")}
                  </Link>
                </li>
                <li className="aboutus_dropdown_link">
                  <Link href="/about" title="About Us" onMouseOver={() => showDropdown('aboutus_drop_box')}>
                    {t("header.About Us")}
                    <img alt="Downaroow1" src="/downmenuarrow.png" style={{ width: 10 }} />
                  </Link>
                  <ul className="aboutus_drop_box">
                    <li> <Link href="/about">{t("about.About Aster Oman")}</Link> </li>
                    <li> <Link href="/about/chairman">{t("about.Chairmans Message")}</Link> </li>
                    <li> <Link href="https://www.asterdmhealthcare.com/about-us/leadership">{t("about.Executive Management")}</Link> </li>
                    <li> <Link href="/about/awards-accolades">{t("about.Awards & Accolades")}</Link> </li>
                    <li> <Link href="https://www.asterdmhealthcare.com/investors">{t("about.Investors")}</Link> </li>
                    <li> <Link href="/about/careers">{t("about.Careers")}</Link> </li>
                  </ul>
                </li>
                <li>
                  <Link href="/appointment" title="Appointments">
                    {t("header.Appointment")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/appointment"
                    title="E-consult"
                  >
                    {t("header.E Consult")}
                  </Link>
                </li>
                <li>
                  <Link href="/homecare" title="Home Care">
                    {t("header.Home Care")}
                  </Link>
                </li>
                <li className="specialities_dropdown_link">
                  <Link href="#" title="Home Care" onMouseOver={() => showDropdown('specialities_drop_box')}>
                    {t("header.Specialities")}
                    <img alt="Downaroow2" src="/downmenuarrow.png" style={{ width: 10 }} />
                  </Link>
                  <div className="specialities_drop_box">
                    {chunks?.map((chunk, columnIndex) => (
                      <div key={columnIndex}>
                        {chunk?.map((post, index) => (
                          <div className="specialities_item" key={index}>
                            <Link href={`/specialities/${post?.slug}`}>
                              {post?.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </li>
                <li className="facilities_dropdown_link">
                  <Link href="#" title="Home Care" onMouseOver={() => showDropdown('facilities_drop_box')}>
                    {t("header.Facilities")}
                    <img alt="Downaroow3" src="/downmenuarrow.png" style={{ width: 10 }} />
                  </Link>
                  <div className="facilities_drop_box">
                    {chunks2?.map((chunk, columnIndex) => (
                      <div key={columnIndex}>
                        <div>
                          {chunk?.map((post, index) => (
                            <div className="facilities_item" key={index}>
                              <Link
                                href={`/facilities/${(post.slug)}`}>
                                {post?.title ? post?.title : ''}
                              </Link>
                            </div>
                          ))}
                        </div>
                        {columnIndex === chunks2?.length - 1 && (
                          <div>
                            <div className="facilities_item">
                              <Link
                                href={`/facilities/aster-preventive-health-check`}>
                                {t("facilities.Aster Preventive Health Check")}
                              </Link>
                            </div>
                            <div className="facilities_item">
                              <Link
                                href={`/facilities/faqs-health-check`}>
                                {t("facilities.FAQ’s – Health check")}
                              </Link>
                            </div>
                            <div className="facilities_item">
                              <Link
                                href={`/facilities/aster-integrated-liver-clinic`}>
                                {t("facilities.Aster Integrated Liver Clinic")}
                              </Link>
                            </div>
                            <div className="facilities_item">
                              <Link
                                href={`/facilities/aster-nurture`}>
                                {t("facilities.Aster Nuture")}
                              </Link>
                            </div>
                            <div className="facilities_item">
                              <Link
                                href={`/facilities/plan-your-visit`}>
                                {t("facilities.Plan your visit")}
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}


                  </div>
                </li>
                <li>
                  <Link
                    href="/locations"
                    title="Locations"
                  >
                    {t("header.Location")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="navbar_phone_container">
          <div style={{ marginRight: 5 }}>
            <img alt="Downaroow4" className="relative w-[16px] h-[16px] object-cover"
              src="/image-12@2x.png" />
          </div>
          <div>
            <Link className="text-[inherit]" href="tel:0096824618900" target="_blank">
              <span className="font_Titillium_semibold navbar_phone_number">
                {t("header.+968 2461 8900")}
              </span>
            </Link>
            {` `}
          </div>
        </div>
      </div>
      <div className="nav_sm_menu_button">
        <div>
          <Link href="/">
            <img alt="Downaroow5" className="relative w-[250px] h-[55px] object-cover" src="/aster-oman-logo.png" />
          </Link>
        </div>
        <div className="HamburgerMenuContainer">
          <div className="HamburgerMenu" id='HamburgerMenu' onClick={() => myFunction()}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className='dropdownmenu'>
          <div className="change" id="HamburgerMenu" onClick={() => myFunction()}
            style={{ right: 0, position: "absolute" }}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <ul>
            <li>
              <Link
                href="https://pp.aster.om"
                target="_blank"
                title="Patient Portal"
              >
                {t("header.Patient Portal")}
              </Link>
            </li>
            <li>
              <details>
                <summary>
                  {t("header.About Us")}
                </summary>
                <div className="child_link">
                  <div><Link href="/about">{t("about.About Aster Oman")}</Link></div>
                  <div><Link href="/about/chairman">{t("about.Chairmans Message")}</Link></div>
                  <div><Link href="https://www.asterdmhealthcare.com/about-us/leadership">{t("about.Executive Management")}</Link></div>
                  <div> <Link href="/about/awards-accolades">{t("about.Awards & Accolades")}</Link></div>
                  <div><Link href="https://www.asterdmhealthcare.com/investors">{t("about.Investors")}</Link></div>
                  <div><Link href="/about/careers">{t("about.Careers")}</Link></div>

                </div>
              </details>
            </li>
            <li>
              <Link
                href="/appointment"
                title="Appointments"
              >
                {t("header.Appointment")}
              </Link>
            </li>
            <li>
              <Link
                href="/appointment"
                title="E-consult"
              >
                {t("header.E Consult")}
              </Link>
            </li>
            <li><Link
              href="/homecare"
              title="Home Care"
            >
              {t("header.Home Care")}
            </Link></li>
            <li>
              <details>
                <summary>
                  {t("header.Specialities")}
                </summary>
                {chunks?.map((chunk, columnIndex) => (
                  <div className="child_link" key={columnIndex}>
                    <div key={columnIndex}>
                      {chunk?.map((post, index) => (
                        <div key={index}>
                          <Link href={`/specialities/${post?.slug}`}>
                            {post?.title}
                          </Link>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </details>
            </li>
            <li>
              <details>
                <summary>
                  {t("header.Facilities")}
                </summary>
                {chunks2?.map((chunk, columnIndex) => (
                  <div className="child_link" key={columnIndex}>
                    <div className="liststyltype">
                      {chunk?.map((post, index) => (
                        <div key={index}>
                          <Link
                            href={`/facilities/${(post?.slug)}`}>
                            {post?.title ? post?.title : ''}
                          </Link>
                        </div>
                      ))}
                    </div>
                    {columnIndex === chunks2?.length - 1 && (
                      <div className="list-none">
                        <div>
                          <Link
                            href={`/facilities/aster-preventive-health-check`}>
                            {t("facilities.Aster Preventive Health Check")}
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={`/facilities/faqs-health-check`}>
                            {t("facilities.FAQ’s – Health check")}
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={`/facilities/aster-integrated-liver-clinic`}>
                            {t("facilities.Aster Integrated Liver Clinic")}
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={`/facilities/aster-nurture`}>
                            {t("facilities.Aster Nuture")}
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={`/facilities/plan-your-visit`}>
                            {t("facilities.Plan your visit")}
                          </Link>
                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </details>
            </li>
            <li>
              <Link
                href="/locations"
                title="Locations"
              >
                {t("header.Location")}
              </Link>
            </li>
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img alt="LogoImage1" className="relative w-[17px] h-[17px] object-cover" src="/image-12@2x.png" />
                <div className="relative font-semibold px-[5px]">
                  <Link className="text-[inherit]" href="tel:0096824618900" target="_blank">
                    <span>
                      {t("header.+968 2461 8900")}
                    </span>
                  </Link>
                  {` `}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
};


function showDropdown(dropobj) {
  $("." + dropobj).show();
}

function myFunction() {
  if ($('#HamburgerMenu').hasClass('HamburgerMenu')) {
    $(".HamburgerMenu").attr('class', 'change');
    $(".dropdownmenu").show();
    // $('body').addClass("unscroll");
  } else {
    $(".change").attr('class', 'HamburgerMenu');
    $(".dropdownmenu").hide();
    // $('body').removeClass("unscroll");
  }
}

export default Navbar;
