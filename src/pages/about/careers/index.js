import ADescription from "@/components/About/Carrers/Description";
import AHeadBar from "@/components/About/Carrers/HeadBar";
import AInformation from "@/components/About/Carrers/Information";
import AInformation2 from "@/components/About/Carrers/Information2";
import AInformation3 from "@/components/About/Carrers/Information3";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllSpecialization, getLastBlogs, getAllFecilities,getLastNews } from "../../../../lib/posts";
import Insurance from "@/components/Insurence";
import AButton from "@/components/About/Carrers/Button";


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

export default function index({ blogData, dummyData, lastNewses,facilities }) {
  return (
    <div>
      <Navbar post={dummyData} facilities={facilities} />
      <AHeadBar />
      <ADescription />
      <AButton />
      <AInformation />
      <AInformation2 />
      <AInformation3 />
      <Insurance />
      <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
    </div>
  )
}