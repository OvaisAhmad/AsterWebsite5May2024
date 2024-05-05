import { getLocationSlugs,getSingleLocation,getAllSpecialization,getLastBlogs,getAllFecilities, getLastNews } from "../../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";;
import React from 'react'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HeadBar from "@/components/Locations/Inside/HeadBar";
import Facilities from "@/components/facilities";
import Description from "@/components/Locations/Inside/Description";
import Information from "@/components/Locations/Inside/Information";
import Insurance from "@/components/Insurence";



export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
      if (locale === "ar") {
          language = "Arabic";
      }
    const dummyData = await getAllSpecialization(language);
    const postData = await getSingleLocation(params.postSlug);
    const facilities = await getAllFecilities(language);
    const blogData = await getLastBlogs(language);
    const lastNewses = await getLastNews();
    return {
        props: {
            postData,
            dummyData,
            lastNewses,
            facilities,
            blogData,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export async function getStaticPaths({ locales }) {
    const response = await getLocationSlugs();

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
            <HeadBar post={postData}/>
            <Description post={postData}/>
            <Information post={postData}/>
            <Facilities/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </>
    );
}



