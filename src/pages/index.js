import Navbar from '../components/navbar'
import Footer from '../components/footer'
import BodyPage from '../components/bodypage'
import Specialisations from '../components/specialisations'
import Specialists from '../components/specialists'
import Facilities from '../components/facilities'
import BlogPost from '../components/blogpost'
import NetworkPage from '../components/networkpage'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getAllFecilities, getRandomDoctors, getAllSpecialization,getLastBlogs, getLastNews } from '../../lib/posts';
import Help from '@/components/help'
import CarouselBackground from '@/components/CarousalBackground'
import Ceomessage from '@/components/ceomessage'
import Treatyouwell from '@/components/treatyouwell'
import Insurance from '@/components/Insurence'
import GetInvolved from '@/components/getinvolved'
import Commmitedsafety from '@/components/commmitedsafety'
import Head from "next/head";

export async function getStaticProps({ locale }) {
  try {
    let language = "English"; // Default to English

    if (locale === "ar") {
      language = "Arabic";
    }

    const dummyData = await getAllSpecialization(language);
    const facilities = await getAllFecilities(language);
    const blogData = await getLastBlogs(language);
    const doctors = await getRandomDoctors();
    const lastNewses = await getLastNews();
    console.log('Last Newses:', lastNewses);
    return {
      props: {
        allPosts: dummyData,
        lastBlogs: blogData,
        facilities,
        lastNewses,
        doctors,
        ...(await serverSideTranslations(locale, ["common", "footer"])),
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        allPosts: [],
        lastBlogs: [],
        facilities: [],
        doctors:[],
      },
    };
  }
}

export default function Home({allPosts,facilities,doctors,lastNewses}) {
  return (
    <div>
      <Head>
        <title>Welcome to Aster Al Raffah Hospital Oman</title>
      </Head>
      <div>
        <Navbar post={allPosts} facilities={facilities}/>
        <CarouselBackground/>
        <Help/>
        <Commmitedsafety/>
        <Treatyouwell/>
        <Specialisations />
        <Specialists post={doctors}/>
        <BodyPage />
        <Facilities />
        <NetworkPage />
        <Ceomessage/>
        <BlogPost />
        <GetInvolved/>
        <Insurance/>
        <Footer post={allPosts} facilities={facilities} newses={lastNewses}/>
      </div>
    </div>
  )
}
