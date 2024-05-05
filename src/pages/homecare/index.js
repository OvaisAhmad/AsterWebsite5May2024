import Footer from "@/components/footer";
import Description from "@/components/HomeCare/Description";
import HeadBar from "@/components/HomeCare/HeadBar";
import Information from "@/components/HomeCare/Information";
import Navbar from "@/components/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { getAllSpecialization,getLastBlogs,getAllFecilities,getLastNews } from "../../../lib/posts";
import Insurance from "@/components/Insurence";
import Information2 from "@/components/HomeCare/Information2";



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
          dummyData,
          lastNewses,
          ...(await serverSideTranslations(locale, ["common"])),
      }
  };
}


export default function HomeCare({blogData,dummyData,facilities,lastNewses}) {

    return (
        <div className="">
            <Navbar post={dummyData} facilities={facilities}/>
            <HeadBar />
            <Description/>
            <Information/>
            <Information2/>
            <Insurance/>
            <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
        </div>
    )
}