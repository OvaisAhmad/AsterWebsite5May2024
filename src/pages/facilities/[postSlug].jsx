import {getAllSpecialization,getLastBlogs,getAllFecilities, getSingleFacilities, getFacilitySlugs, getLastNews } from "../../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";;
import React from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FHeadBar from "@/components/Facilities/HeadBar";
import FDescription from "@/components/Facilities/Description";
import Insurance from "@/components/Insurence";



export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
      if (locale === "ar") {
          language = "Arabic";
      }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const postData = await getSingleFacilities(params.postSlug);
    const blogData = await getLastBlogs(language);
    const lastNewses = await getLastNews();
    return {
        props: {
            postData,
            dummyData,
            facilities,
            lastNewses,
            blogData,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export async function getStaticPaths({ locales }) {
    const response = await getFacilitySlugs();

    const paths = response
        .map((post) => locales.map((locale) => ({
            params: { postSlug: post.slug },
            locale
        })))
        .flat()

    return { paths, fallback: false }
}


export default function Post({ postData,dummyData,blogData,facilities,lastNewses }) {

    return (
        <>
            <Navbar post={dummyData} facilities={facilities}/>
            <FHeadBar post={postData}/>
            <FDescription post={postData}/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </>
    );
}



