import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const Carousel = () => {

    const { t } = useTranslation("");

    const router = useRouter();
    const locale = router.locale;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: (dots) => (
            // Custom function to append the dots to the slider
            <div style={{ bottom: "15px" }}>{dots}</div>
        ),
    };
    const slideStyle = {
        width: "100%", // Set the width of each slide to 100%

    };

    return (

        <div className="w-cover mt-[100px] xxl:mx-auto">

            <div id="slideset6">
                <div className="slider_img_1">
                    <div className="topbar_wrapper">
                        <div className="slider_content_wrapper">
                        
                            <h1 className="text-white text-xl font-bold">
                                {t("banner.Royal Care Experience")}
                            </h1>
                            <div className="text-white banner_text_desc">
                                <div className="md_banner_text_height">
                                    {t("banner.bannertext1")}
                                </div>
                                <div>
                                    {t("banner.bannertext2")}
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white carousalbtnfontsize px-5 py-3 rounded-full mt-4 hover:bg-blue-600 sm:text-sm md:text-md sm:px-2 md:px-4 sm:py-2 md:py-2 sm:mt-2"
                                style={{ background: "#03a885" }}>
                                <b>{t("banner.View Package")}</b>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="slider_img_2">
                    <div className="topbar_wrapper">
                        <div className="slider_content_wrapper">
                            <h1 className="text-white text-xl font-bold">
                                {t("banner.Royal Care Experience")}
                            </h1>
                            <div className="text-white banner_text_desc">
                                <div className="md_banner_text_height">
                                {t("banner.bannertext1")}
                                </div>
                                <div>
                                    {t("banner.bannertext2")}
                                </div>

                            </div>
                            <button className="bg-blue-500 text-white carousalbtnfontsize px-5 py-3 rounded-full mt-4 hover:bg-blue-600 sm:text-sm md:text-md sm:px-2 md:px-4 sm:py-2 md:py-2 sm:mt-2"
                                style={{ background: "#03a885" }}>
                                <b>{t("banner.View Package")}</b>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="slider_img_3">
                    <div className="topbar_wrapper">
                        <div className="slider_content_wrapper">
                            <h1 className="text-white text-xl font-bold">
                                {t("banner.Royal Care Experience")}
                            </h1>
                            <div className="text-white banner_text_desc">
                                <div className="md_banner_text_height">
                                {t("banner.bannertext1")}
                                </div>
                                <div>
                                    {t("banner.bannertext2")}
                                </div>

                            </div>
                            <button className="bg-blue-500 text-white carousalbtnfontsize px-5 py-3 rounded-full mt-4 hover:bg-blue-600 sm:text-sm md:text-md sm:px-2 md:px-4 sm:py-2 md:py-2 sm:mt-2"
                                style={{ background: "#03a885" }}>
                                <b>{t("banner.View Package")}</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
