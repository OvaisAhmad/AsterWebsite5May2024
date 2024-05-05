import FDescription from "@/components/Facilities/Nature/Description";
import FHeadBar from "@/components/Facilities/Nature/HeadBar";
import FInformation from "@/components/Facilities/Nature/Information";
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
          facilities,
          lastNewses,
          dummyData,
          ...(await serverSideTranslations(locale, ["common"])),
      }
  };
}


export default function Facilities({blogData,dummyData,facilities,lastNewses}) {
    return (
        <div>
            <Navbar post={dummyData} facilities={facilities}/>
            <FHeadBar />
            <FDescription />
            <FInformation />
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}