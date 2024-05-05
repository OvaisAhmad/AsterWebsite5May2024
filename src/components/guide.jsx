import React from 'react'
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Guide = () => {

    const { t } = useTranslation("");
    return (
        <div className="topbar_wrapper relative w-full py-0 px-[5px] box-border
            items-center justify-center gap-[75px] text-start text-37xl text-aster-blue
            font-paragraph-01 lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border
            sm:ps-4 sm:pe-4 sm:box-border">
            <div className="topbar_wrapper py-[75px] px-0 items-center justify-center gap-[50px] text-center lg:self-stretch lg:w-auto lg:items-center lg:justify-center lg:ps-0 lg:box-border md:py-[50px] md:px-0 md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[30px] sm:items-center sm:justify-center sm:py-[50px] sm:px-0 sm:box-border">
                <div className="flex flex-col items-center justify-start gap-[5px] lg:self-stretch lg:w-auto margin_bottom_div">
                    <b className="network_fontsize self-stretch relative leading-[40px] sm:text-[40px]">
                        {t("hero.Patient and Visitor Guide")}
                    </b>
                    <div className="network_desc self-stretch relative text-3xl leading-[132%] text-grey">
                        {t("hero.guide description")}
                    </div>
                </div>
                <div className="topbar_wrapper flex flex-row items-start justify-start gap-[30px] text-start text-5xl font-work-sans lg:self-stretch lg:w-auto lg:flex-row lg:gap-[30px] lg:items-center lg:justify-center lg:ps-0 lg:pe-0 lg:box-border md:self-stretch md:w-auto md:flex-col md:ps-0 md:pe-0 md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[30px] sm:ps-0 sm:pe-0 sm:box-border">
                    <div className="w-[60%] flex flex-col items-start justify-start gap-[30px] lg:flex-col md:self-stretch md:w-auto md:flex-1 sm:ps-0 sm:pe-0 sm:box-border">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-row sm:flex-col">
                            <div className="rounded-xl visitor_box flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                                <img
                                    className="relative w-9 h-9 overflow-hidden shrink-0"
                                    alt=""
                                    src="/hospital-1.svg"
                                />
                                <Link href="/plan-your-visit">
                                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                                        {t("hero.Plan your visit")}
                                    </div>
                                </Link>
                                <div className="self-stretch relative text-lg leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                                    {t("hero.plan description")}
                                </div>

                            </div>
                            <div className="rounded-xl visitor_box flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                                <img
                                    className="relative w-9 h-9 overflow-hidden shrink-0"
                                    alt=""
                                    src="/stethoscope-1.svg"
                                />
                                <Link href="/all-about-appointments">
                                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                                        {t("hero.All about Appointments")}
                                    </div>
                                </Link>
                                <div className="self-stretch relative text-lg leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                                    {t("hero.all about description")}
                                </div>

                            </div>

                        </div >
                        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-row sm:flex-col">
                            <div className="rounded-xl visitor_box flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                                <img
                                    className="relative w-9 h-9 overflow-hidden shrink-0"
                                    alt=""
                                    src="/hospital-11.svg"
                                />
                                <Link href="/admission-and-discharge">
                                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                                        <p className="m-0">{t("hero.Admission &")}</p>
                                        <p className="m-0">{t("hero.Discharge")}</p>
                                    </div>
                                </Link>
                                <div className="self-stretch relative text-lg leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                                    {t("hero.admission description")}
                                </div>

                            </div>
                            <div className="rounded-xl visitor_box flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                                <img
                                    className="relative w-9 h-9 overflow-hidden shrink-0"
                                    alt=""
                                    src="/hospital-12.svg"
                                />
                                <Link href="/rights-and-responsibilities">
                                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">{t("hero.Patient Rights & Responsibilities")}</div>
                                </Link>
                                <div className="self-stretch relative text-lg leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                                    {t("hero.Rights Description")}
                                </div>

                            </div>
                        </div>
                    </div >
                    <img
                        className="rounded-xl relative w-[40%] h-[626px] object-cover lg:w-[500px] lg:self-stretch lg:h-auto md:self-stretch md:w-auto md:flex-1"
                        alt=""
                        src="/rectangle-66@2x.png"
                    />
                </div >
            </div >
        </div>
    )
}

export default Guide