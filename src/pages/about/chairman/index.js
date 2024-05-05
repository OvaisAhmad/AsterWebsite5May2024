import ADescription from "@/components/About/Chairman/Description";
import AHeadBar from "@/components/About/Chairman/HeadBar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getAllSpecialization,getLastBlogs,getAllFecilities,getLastNews } from "../../../../lib/posts";
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
          lastNewses,
          facilities,
          ...(await serverSideTranslations(locale, ["common"])),
      }
  };
}

export default function Chairman({blogData,lastNewses,dummyData,facilities}){
    return(
        <div>
            <Navbar post={dummyData} facilities={facilities}/>
            <AHeadBar/>
            <ADescription/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}