import Navbar from '@/components/navbar';
import Description from '@/components/Locations/Description';
import HeadBar from '@/components/Locations/HeadBar';
import Footer from '@/components/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  getAllSpecialization,
  getLastBlogs,
  getAllLocations,
  getAllFecilities,
  getLastNews,
} from '../../../lib/posts';
import LocationHeader from '@/components/locationsHeader';
import Insurance from '@/components/Insurence';
import BodyPage from '@/components/bodypage';

export async function getStaticProps({ params, locale }) {
  let language = 'English'; // Default to English
  if (locale === 'ar') {
    language = 'Arabic';
  }
  const dummyData = await getAllSpecialization(language);
  const blogData = await getLastBlogs(language);
  const facilities = await getAllFecilities(language);
  const locations = await getAllLocations();
  const lastNewses = await getLastNews();
  // console.log(locations);
  return {
    props: {
      blogData,
      dummyData,
      facilities,
      lastNewses,
      locations,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function About({
  blogData,
  dummyData,
  locations,
  facilities,
  lastNewses,
}) {
  return (
    <div className='flex flex-col'>
      <Navbar
        post={dummyData}
        facilities={facilities}
      />
      <HeadBar />
      <Description />
      <LocationHeader
        locations={locations}
        specializations={dummyData}
      />
      <BodyPage />
      <Insurance />
      <Footer
        post={dummyData}
        facilities={facilities}
        newses={lastNewses}
      />
    </div>
  );
}
