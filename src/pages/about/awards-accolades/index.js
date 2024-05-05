import ADescription from "@/components/About/Awards/Description";
import AHeadBar from "@/components/About/Awards/HeadBar";
import AInformation from "@/components/About/Awards/Information";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllSpecialization, getLastBlogs, getAllFecilities,getLastNews } from "../../../../lib/posts";
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
            dummyData,
            facilities,
            lastNewses,
            ...(await serverSideTranslations(locale, ["common"])),
        }
    };
}

export default function index({ blogData, dummyData, facilities,lastNewses }) {
    return (
        <div>
            <Navbar post={dummyData} facilities={facilities} />
            <AHeadBar />
            <ADescription />
            <AInformation />
            <Insurance />
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}