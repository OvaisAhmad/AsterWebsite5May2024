import Head from "next/head";
import { getAllDoctors, getDoctorSlugs, getSingleDoctor } from "../../../lib/posts";
import Footer from "@/components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/navbar";
import { getAllSpecialization,getLastBlogs,getAllFecilities,getLastNews } from "../../../lib/posts";
import Career from '@/components/career';
import Facilities from '@/components/facilities';
import DoctorProfile from '@/components/doctorprofile';
import Specialists from '@/components/specialists';
import Insurance from "@/components/Insurence";




export async function getStaticProps({ params, locale }) {
    const postData = await getSingleDoctor(params.postSlug);
    const doctorName = locale === 'ar' ? postData.doctorFields.doctorNameAr : postData.doctorFields.doctorName;
    const associations = locale === 'ar' ? postData.doctorFields.associationsAr : postData.doctorFields.associations;
    const experience = locale === 'ar' ? postData.doctorFields.experienceAr : postData.doctorFields.experience;
    const designation = locale === 'ar' ? postData.doctorFields.designationAr : postData.doctorFields.designation;
    const education = locale === 'ar' ? postData.doctorFields.educationAr : postData.doctorFields.education;
    const expertise = locale === 'ar' ? postData.doctorFields.expertiseAr : postData.doctorFields.expertise;
    const languages = locale === 'ar' ? postData.doctorFields.languagesAr : postData.doctorFields.languages;
    const licenses = locale === 'ar' ? postData.doctorFields.licensesAr : postData.doctorFields.licenses;
    const nationality = locale === 'ar' ? postData.doctorFields.nationalityAr : postData.doctorFields.nationality;
    const procedures = locale === 'ar' ? postData.doctorFields.proceduresAr : postData.doctorFields.procedures;
    const specialization = locale === 'ar' ? postData.doctorFields.specializationAr : postData.doctorFields.specialization;
    const typeOfPhysician = locale === 'ar' ? postData.doctorFields.typeOfPhysicianAr : postData.doctorFields.typeOfPhysician;


    let language = "English"; // Default to English
    if (locale === "ar") {
        language = "Arabic";
    }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const blogData = await getLastBlogs(language);
    const doctors = await getAllDoctors();
    const lastNewses = await getLastNews();
    return {
        props: {
            postData: {
                ...postData,
                doctorName: doctorName,
                experience: experience,
                associations,
                designation,
                education,
                expertise,
                languages,
                licenses,
                nationality,
                procedures,
                specialization,
                typeOfPhysician,
            },
            facilities,
            blogData,
            dummyData,
            lastNewses,
            doctors,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export async function getStaticPaths({ locales }) {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
          paths: [],
          fallback: 'blocking',
        }
      }
      
    const response = await getDoctorSlugs();

    const paths = response
        .map((post) => locales.map((locale) => ({
            params: { postSlug: post.slug },
            locale
        })))
        .flat()

    return { paths, fallback: false }
}

console.log('Debug logs');
console.log(lastNewses);

export default function Post({ postData,blogData,dummyData, lastNewses ,facilities,doctors}) {

    return (
        <div>
            <Navbar post={dummyData} facilities={facilities}/>
            <DoctorProfile postData={postData}/>
            <Specialists post={doctors}/>
            <Facilities/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
            </div>
    );
}
