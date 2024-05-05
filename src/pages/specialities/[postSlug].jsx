import { getSpecializationSlugs,getSingleSpecialization,getAllSpecialization,getLastBlogs,getAllFecilities,getRandomDoctors, getLastNews } from "../../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";;
import React from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SDescription from '@/components/Specialisation/FirstCol/Cardiology/Description'
import BlogPost from "@/components/blogpost";
import Testimonial from '@/components/Specialisation/Common/Testimonial'
import SHeadBar from '@/components/Specialisation/FirstCol/Cardiology/HeadBar'
import DoctorCarousal from "@/components/DoctorCarousel";
import Insurance from "@/components/Insurence";



export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
      if (locale === "ar") {
          language = "Arabic";
      }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const postData = await getSingleSpecialization(params.postSlug);
    const blogData = await getLastBlogs(language);
    const dummyData2 = await getRandomDoctors();
    const lastNewses = await getLastNews();
    return {
        props: {
            postData,
            facilities,
            dummyData,
            blogData,
            dummyData2,
            lastNewses,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export async function getStaticPaths({ locales }) {
    const response = await getSpecializationSlugs();

    const paths = response
        .map((post) => locales.map((locale) => ({
            params: { postSlug: post.slug },
            locale
        })))
        .flat()

    return { paths, fallback: false }
}


export default function Post({ postData,dummyData,blogData,facilities,dummyData2,lastNewses }) {

    const filteredDoctors = dummyData2.nodes.filter(doctor => {
        return (
          (doctor.doctorFields.specialization === postData.title || doctor.doctorFields.specializationAr === postData.title)
        );
      });
    return (
        <>
            <Navbar post={dummyData} facilities={facilities}/>
            <SHeadBar post={postData}/>
            <SDescription post={postData}/>
            <DoctorCarousal post={filteredDoctors}/>
            {/* <Specialists/> */}
            <Testimonial />
            <BlogPost/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </>
    );
}



