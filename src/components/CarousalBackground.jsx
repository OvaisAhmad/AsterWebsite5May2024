import React from "react";
import Carousel from "./Carousel"; // Import your Carousel component
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LocaleSwitcher from "./laguage-switcher";
import Image from "next/image";

const CarouselBackground = () => {
    const { t } = useTranslation("");
    return (

        <div className="relative content_zindex">
            <Carousel />
            <div className="my-0 mx-[!important] absolute top-[0px] right-[0px] flex flex-col p-[50px] items-end justify-start z-[0] md:ps-8 md:pe-8 md:box-border sm:p-4 sm:box-border">
                <div className="flex flex-row items-center justify-end">
                    <div className="w-[118px] h-9 flex flex-col items-start justify-start relative gap-[10px]">
                        <div className="rounded-81xl bg-white shadow-[0px_5px_20px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[0]" style={{ borderRadius: 50 }}>
                            <div className="h-9 flex flex-col items-start justify-center">
                            <LocaleSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content to overlay on top of the carousel */}
            <div className="left-0 w-full h-full flex flex-col justify-center
             items-center pointer-events-none" style={{marginTop:70}}>
                <div className="hidden xl:block rounded-2xl bg-mediumaquamarine-200 shadow-[4px_4px_30px_5px_rgba(0,_0,_0,_0.1)] max-w-[1000px] h-[190px]" >
                    <div className=" rounded-t-2xl rounded-b-none bg-aster-blue max-w-[1000px] h-[63px] text-center" >
                        <div className="font_bannerblock_title leading-[61px] font-semibold text-white  inline-block w-[445px] h-[63px]">
                            {t("help.How can we help you today?")}
                        </div>
                    </div>
                    <div className='banner_padding flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center bg-aster-green  items-center gap-5 mt-5 min-w-[710px]'>
                        <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
                            <Link href="/">
                                <div className="link-overlay">
                                    <Image
                                        width={8}
                                        height={8}
                                        className="w-8 h-8 overflow-hidden"
                                        alt=""
                                        src="/memocirclecheck-1.svg"
                                    />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='banner_block_font_size font-semibold font-work-sans text-white text-center link-overlay'>
                                    {t("help.Book an Apoointment")}
                                </div>
                            </Link>

                        </div>
                        <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
                            <Link href="/appointment">
                                <div className="link-overlay">
                                    <Image
                                        width={8}
                                        height={8}
                                        className="w-8 h-8 overflow-hidden"
                                        alt=""
                                        src="/usershield-1.svg"
                                    />
                                </div>
                            </Link>
                            <Link href="/appointment">
                                <div className='banner_block_font_size font-semibold font-work-sans text-white text-center link-overlay'>
                                    {t("help.Find a Doctor")}
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
                            <Link href="/appointment">
                                <div className="link-overlay">
                                    <img
                                        className="w-8 h-8 overflow-hidden"
                                        alt=""
                                        src="/vector1.svg"
                                    />
                                </div>
                            </Link>
                            <Link href="/appointment">
                                <div className='banner_block_font_size font-semibold font-work-sans text-white text-center link-overlay'>
                                    {t("help.E- Consult")}
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
                            <Link href="/">
                                <div className="link-overlay">
                                    <img
                                        className="w-8 h-8 overflow-hidden"
                                        alt=""
                                        src="/usermd-1.svg"
                                    />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='banner_block_font_size font-semibold font-work-sans text-white text-center link-overlay'>
                                    {t("help.Insurance Cover")}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselBackground;
