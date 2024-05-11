import Link from 'next/link';
import React from 'react';

export default function Information2({ newses }) {
  return (
    <>
      <section
        className='sec-default : sec-news mt-[150px]'
        role='contentinfo'
        style={{
          boxSizing: 'border-box',
          display: 'block',
          position: 'relative',
          marginBottom: '170px',
        }}
      >
        <div
          className='inner_wrapper abt_topcontent'
          style={{ boxSizing: 'border-box', overflowX: 'hidden' }}
        >
          <div
            className='breadcrumbs'
            style={{
              boxSizing: 'border-box',
              margin: '46px 0px',
              position: 'relative',
            }}
          >
            <div
              className='container'
              style={{
                boxSizing: 'border-box',
                margin: '0px auto',
                display: 'block',
                width: '100%',
                maxWidth: '1240px',
                padding: '0px',
                paddingRight: '0px',
                paddingLeft: '0px',
              }}
            >
              <nav
                aria-label='breadcrumb'
                style={{ boxSizing: 'border-box', display: 'block' }}
              >
                <ul
                  style={{
                    boxSizing: 'border-box',
                    listStyle: 'none',
                    margin: '0px',
                    padding: '0px',
                    marginTop: '0px',
                    marginBottom: '0px',
                    fontSize: '0px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <li
                    className='breadcrumbs__item : breadcrumbs__item--home'
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-flex',
                      alignItems: 'center',
                      position: 'relative',
                      paddingLeft: '0px',
                      paddingRight: '5px',
                    }}
                  >
                    <Link
                      className='breadcrumbs__link : text--14'
                      href='/'
                      style={{
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease 0s, border 0.3s ease 0s',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        color: 'rgb(20, 77, 146)',
                        letterSpacing: '0.7px',
                        textTransform: 'uppercase',
                        fontSize: '0px',
                        lineHeight: 0,
                      }}
                    >
                      <img
                        src='/home.svg'
                        alt='Instagram Icon'
                        width='17'
                        height='17'
                      />
                    </Link>
                  </li>
                  <li
                    className='breadcrumbs__item'
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-flex',
                      alignItems: 'center',
                      position: 'relative',
                      fontWeight: 700,
                    }}
                  >
                    <Link
                      className='breadcrumbs__link : text--14'
                      href='/news-room'
                      style={{
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease 0s, border 0.3s ease 0s',
                        fontSize: '14px',
                        lineHeight: 1.4,
                        whiteSpace: 'nowrap',
                        display: 'block',
                        color: 'rgb(20, 77, 146)',
                        letterSpacing: '0.7px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {' / '}
                      News Room
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='text-center text-9xl '>
            <h2 className='border-b border-black pb-2'>NEWS ROOM</h2>
          </div>
          <div className='mt-16 mx-auto'>
            <div className='flex max-w-[1400px]  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto'>
              {newses.nodes?.map((news, index) => (
                <div
                  className='max-w-[350px] mx-auto '
                  key={index}
                >
                  <Link
                    href={news.newsFields.mapUrl || '#'}
                    target='_blank'
                  >
                    <div className='mb-5'>
                      <img
                        src={news.featuredImage?.node.sourceUrl}
                        alt='News Image'
                        className='w-full h-72 object-cover rounded-xl'
                      />
                    </div>
                    <div className='text-2xl mb-10 sm:text-base md:text-xl'>
                      {news.title}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
