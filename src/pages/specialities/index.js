import Footer from '@/components/footer';
import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from '@/components/navbar';
import HeadBar from '@/components/Spoecialities/HeadBar';
import Description from '@/components/Spoecialities/Description';
import Information from '@/components/Spoecialities/Information';
import { getAllSpecialization,getLastBlogs,getAllFecilities, getLastNews } from '../../../lib/posts';
import Insurance from '@/components/Insurence';


export async function getStaticProps({ locale }) {

  try {
      let language = "English"; // Default to English
      if (locale === "ar") {
          language = "Arabic";
      }
      const dummyData = await getAllSpecialization(language);
      const facilities = await getAllFecilities(language);
      const blogData = await getLastBlogs(language);
      const lastNewses = await getLastNews()
      return {
          props: {
              allPosts: dummyData,
              facilities,
              blogData,
              lastNewses,
              ...(await serverSideTranslations(locale, ["common", "footer"])),  
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

const index = ({allPosts,blogData,facilities,lastNewses}) => {
    return (
        <div className='flex flex-col'>
            <Navbar post={allPosts} facilities={facilities}/>
            <HeadBar />
            <Description/>
            <Information post={allPosts}/>
            <Insurance/>
            <Footer post={allPosts} facilities={facilities} newses={lastNewses}/>
        </div>
    );

}

export default index

