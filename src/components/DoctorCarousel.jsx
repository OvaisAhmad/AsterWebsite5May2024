import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const DoctorCarousal = ({ post }) => {
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const isSmallerScreen = useMediaQuery({ maxWidth: 479 });
  const isMediumScreen = useMediaQuery({ minWidth: 480, maxWidth: 720 });

  const { t } = useTranslation('');

  let slidesToShow = Math.min(post?.length, 4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallerScreen
      ? 1
      : isMediumScreen
      ? 2
      : isMobile
      ? 3
      : slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: post?.length === 1, // Add this line
    centerPadding: post?.length === 1 ? '400px' : undefined,
  };
  return (
    <div
      className='topbar_wrapper py-[75px] doctors_carousal'
      style={{ maxHeight: 600, overflow: 'hidden' }}
    >
      <div style={{ marginBottom: '50px' }}>
        <h3
          style={{
            boxSizing: 'border-box',
            textTransform: 'inherit',
            textAlign: 'inherit',
            fontStyle: 'inherit',
            margin: '0px',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            fontFamily: 'inherit',
            marginTop: '0px',
            marginBottom: '0px',
            letterSpacing: 'inherit',
            fontSize: '27px',
            fontWeight: '500',
            color: '#144d92',
            textAlign: 'center',
          }}
        >
          {t('hero.Meet our Specialists')}
        </h3>
      </div>
      <div>
        <Slider {...settings}>
          {post?.map((doctor, index) => (
            <div
              className=''
              key={index}
            >
              <div>
                <div className='splt_img_container'>
                  <img
                    src={
                      doctor.featuredImage?.node.sourceUrl || '/AsterDoctor.svg'
                    }
                    className='splt_img'
                    alt=''
                  />
                </div>
                <div
                  className='py-[20px]'
                  style={{ width: 272 }}
                >
                  <div className='splt_usr_name'>
                    {doctor.doctorFields.doctorName}
                  </div>
                  <div className='splt_usr_designation'>
                    {doctor.doctorFields.specialization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='splst_btn_container'>
          <Link href='/appointment'>
            <button className='splst_btn'>{t('hero.View all Doctors')}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCarousal;
