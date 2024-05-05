import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { getAllSpecialization,getLastBlogs,getAllFecilities,getLastNews } from "../../../../lib/posts";
import Insurance from "@/components/Insurence";
import AHeadBar from "@/components/About/Executive/HeadBar";
import ADescription from "@/components/About/Executive/Description";



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

export default function index({blogData,dummyData,facilities,lastNewses}){
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