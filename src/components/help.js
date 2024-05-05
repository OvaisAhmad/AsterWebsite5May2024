import Link from 'next/link'
import React from 'react'
import { useTranslation } from "next-i18next";

const Help = () => {
    const { t } = useTranslation("");
    return (
        <div className="max-w-[100%] mt-[10px] mx-auto xl:hidden flex flex-col
         justify-center items-center" style={{ fontFamily: 'Titillium-semibold'}} >
            <div className="text-center" >
                <div className="text-5xl md:text-9xl leading-[61px] 
                font-semibold text-aster-blue  inline-block md:w-[100%] h-[63px]" style={{lineHeight:1.2}}>
                    {t("help.How can we help you today?")}
                </div>
            </div>
            <div className='help_grid_container flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center items-center gap-[30px] mt-5'>
                <Link href="/">
                    <div className="help_block rounded-2xl w-[100%]  h-[180px]  bg-aster-blue flex flex-col 
                    mb-6 space-y-4 justify-center items-center sm:mb-2 md:mb-2 lg:mb-6">
                        <img
                            className="w-11 h-11 overflow-hidden"
                            alt=""
                            src="/memocirclecheck-1.svg"
                        />
                        <div className='text-lg font-semibold font-work-sans text-white text-center'>
                            {t("help.Book an Apoointment")}
                        </div>
                    </div>
                </Link>
                <Link href="/appointment">
                    <div className="help_block rounded-2xl w-[100%]  h-[180px] 
                     bg-aster-blue flex flex-col mb-6 space-y-4 justify-center items-center sm:mb-2 md:mb-2 lg:mb-6">
                        <img
                            className="w-11 h-11 overflow-hidden"
                            alt=""
                            src="/usershield-1.svg"
                        />
                        <div className='text-lg font-semibold font-work-sans text-white text-center'>
                            {t("help.Find a Doctor")}
                        </div>
                    </div>
                </Link>
                <Link href="/appointment">
                    <div className="help_block rounded-2xl w-[100%]  h-[180px] bg-aster-blue flex
                     flex-col mb-6 space-y-4 justify-center items-center sm:mb-2 md:mb-2 lg:mb-6">
                        <img
                            className="w-11 h-11 overflow-hidden"
                            alt=""
                            src="/vector1.svg"
                        />
                        <div className='text-lg font-semibold font-work-sans text-white text-center'>
                            {t("help.E- Consult")}
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className="help_block rounded-2xl w-[100%]  h-[180px]  
                    bg-aster-blue flex flex-col mb-6 space-y-4 justify-center items-center sm:mb-2 md:mb-2 lg:mb-6">
                        <img
                            className="w-11 h-11 overflow-hidden"
                            alt=""
                            src="/usermd-1.svg"
                        />
                        <div className='text-lg font-semibold font-work-sans text-white text-center'>
                            {t("help.Insurance Cover")}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Help