import { getBlogSlugs,getAllSpecialization, getSingleBlog,getLastBlogs,getAllFecilities, getLastNews } from "../../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";;
import React from 'react'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SDescription from '@/components/Specialisation/FirstCol/Cardiology/Description'
import Insurance from "@/components/Insurence";



export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
      if (locale === "ar") {
          language = "Arabic";
      }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const postData = await getSingleBlog(params.postSlug);
    const blogData = await getLastBlogs(language);
    const lastNewses =await getLastNews();
    return {
        props: {
            postData,
            facilities,
            blogData,
            lastNewses,
            dummyData,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export async function getStaticPaths({ locales }) {
    const response = await getBlogSlugs();

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
            <SDescription post={postData}/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
            
        </>
    );
}


