import Image from 'next/image'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getAllSpecialization, getLastBlogs, getAllFecilities,getAllDoctors, getAllLocations,getLastNews } from "../../../lib/posts";
import DoctorsTile from '@/components/doctorstile';
import DoctorsHeader from '@/components/doctorsheader';
import Career from '@/components/career';
import Facilities from '@/components/facilities';
import Specialists from '@/components/specialists';
import Insurance from '@/components/Insurence';

export async function getStaticProps({ locale, preview = false }) {
  let language = "English"; // Default to English
  if (locale === "ar") {
    language = "Arabic";
  }
  const dummyData = await getAllSpecialization(language);
  const facilities = await getAllFecilities(language);
  const blogData = await getLastBlogs(language);
  const lastNewses = await getLastNews();
  const locations = await getAllLocations();
  try {
    const dummyData2 = await getAllDoctors(preview);
    return {
      props: {
        allPosts: dummyData2,
        ...(await serverSideTranslations(locale, ["common", "footer"])),
        dummyData,
        facilities,
        lastNewses,
        blogData,
        locations,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        allPosts: [],
      },
    };
  }
}

export default function Home({ allPosts, dummyData, blogData, facilities,locations,lastNewses }) {
  return (
    <div>
      <div style={{ float:'left',width:"100%" }}>
        <Navbar post={dummyData} facilities={facilities} />
        <DoctorsHeader doctors={allPosts} specializations={dummyData} locations={locations}/>
        <Facilities />  
        <Insurance/>
        <Footer post={dummyData} facilities={facilities} newses={lastNewses}/>
    </div>
    </div>  
  )
}
