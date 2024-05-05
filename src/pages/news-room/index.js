import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { getAllSpecialization, getLastBlogs, getAllFecilities, getAllNewses, getLastNews } from "../../../lib/posts";
import Information2 from "@/components/News/Infromation2";
import Insurance from "@/components/Insurence";

export async function getStaticProps({ params, locale }) {
    let language = "English"; // Default to English
    if (locale === "ar") {
        language = "Arabic";
    }
    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const blogData = await getLastBlogs(language);
    const newses = await getAllNewses();
    const lastNewses = await getLastNews();
    return {
        props: {
            blogData,
            facilities,
            lastNewses,
            dummyData,
            newses,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}


export default function HomeCare({ blogData, dummyData, facilities ,newses,lastNewses}) {

    return (
        <div className="">
            <Navbar post={dummyData} facilities={facilities} />
            <Information2 newses={newses}/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}