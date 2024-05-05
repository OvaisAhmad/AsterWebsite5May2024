import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { getAllSpecialization, getLastBlogs, getAllFecilities,getLastNews } from "../../../lib/posts";
import Information from "@/components/Library/Information";
import Information2 from "@/components/Library/Infromation2";
import Insurance from "@/components/Insurence";

export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
    if (locale === "ar") {
        language = "Arabic";
    }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const blogData = await getLastBlogs(language);
    const lastNewses = await getLastNews();
    return {
        props: {
            blogData,
            facilities,
            lastNewses,
            dummyData,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export default function HomeCare({ blogData, dummyData, facilities,lastNewses}) {

    return (
        <div className="">
            <Navbar post={dummyData} facilities={facilities} />
            <Information/>
            <Information2/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}