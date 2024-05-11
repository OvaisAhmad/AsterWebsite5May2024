import DoctorsTile from './doctorstile';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const DoctorsHeader = ({ doctors, specializations, locations }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('Doctors');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Specialization');
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [selectedLanguage, setSelectedLanguage] = useState('Language');

  const filteredDoctors = doctors.nodes?.filter((doctor) => {
    return (
      (selectedDoctor === 'Doctors' ||
        doctor.doctorFields.doctorName === selectedDoctor) &&
      (selectedSpecialty === 'Specialization' ||
        doctor.doctorFields.specialization === selectedSpecialty) &&
      (selectedLocation === 'Location' ||
        doctor.doctorFields.location === selectedLocation) &&
      (selectedLanguage === 'Language' ||
        (typeof doctor.doctorFields.languages === 'string' &&
          doctor.doctorFields.languages.includes(selectedLanguage)))
    );
  });

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);

    if (selectedDoctor !== 'Doctors') {
      setSelectedSpecialty('Specialization');
      setSelectedLocation('Location');
      setSelectedLanguage('Language');
    } else {
      setSelectedSpecialty('Specialization');
      setSelectedLocation('Location');
      setSelectedLanguage('Language');
    }

    const specializationSelect = document.getElementById(
      'specializationSelect'
    );
    const locationSelect = document.getElementById('locationSelect');
    const languageSelect = document.getElementById('languageSelect');
    if (specializationSelect && locationSelect && languageSelect) {
      specializationSelect.value = 'Specialization';
      locationSelect.value = 'Location';
      languageSelect.value = 'Language';
    }
  };

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);

    if (selectedSpecialty !== 'Specialization') {
      setSelectedDoctor('Doctors');
      setSelectedLocation('Location');
      setSelectedLanguage('Language');
    } else {
      setSelectedDoctor('Doctors');
      setSelectedLocation('Location');
      setSelectedLanguage('Language');
    }

    const doctorSelect = document.getElementById('doctorSelect');
    const locationSelect = document.getElementById('locationSelect');
    const languageSelect = document.getElementById('languageSelect');
    if (doctorSelect && locationSelect && languageSelect) {
      doctorSelect.value = 'Doctors';
      locationSelect.value = 'Location';
      languageSelect.value = 'Language';
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);

    if (selectedLocation !== 'Location') {
      setSelectedDoctor('Doctors');
      setSelectedSpecialty('Specialization');
      setSelectedLanguage('Language');
    } else {
      setSelectedDoctor('Doctors');
      setSelectedSpecialty('Specialization');
      setSelectedLanguage('Language');
    }

    const specializationSelect = document.getElementById(
      'specializationSelect'
    );
    const doctorSelect = document.getElementById('doctorSelect');
    const languageSelect = document.getElementById('languageSelect');
    if (specializationSelect && doctorSelect && languageSelect) {
      specializationSelect.value = 'Specialization';
      doctorSelect.value = 'Doctors';
      languageSelect.value = 'Language';
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);

    if (selectedLanguage !== 'Language') {
      setSelectedSpecialty('Specialization');
      setSelectedLocation('Location');
      setSelectedDoctor('Doctors');
    } else {
      setSelectedSpecialty('Specialization');
      setSelectedLocation('Location');
      setSelectedDoctor('Doctors');
    }

    const specializationSelect = document.getElementById(
      'specializationSelect'
    );
    const locationSelect = document.getElementById('locationSelect');
    const doctorSelect = document.getElementById('doctorSelect');
    if (specializationSelect && locationSelect && doctorSelect) {
      specializationSelect.value = 'Specialization';
      locationSelect.value = 'Location';
      doctorSelect.value = 'Doctors';
    }
  };

  const { t } = useTranslation('');

  return (
    <>
      <div
        className='page-header__top aos-init aos-animate mt-[40px]'
        style={{
          boxSizing: 'border-box',
          marginTop: '102px',
          alignItems: 'center',
          minHeight: '100px',
          backgroundImage:
            'linear-gradient(to right, rgb(20, 77, 146) 0%, rgb(0, 180, 141) 83%)',
          color: 'rgb(245, 245, 245)',
          fontFamily: 'Titillium-semibold',
          pointerEvents: 'auto',
          transitionTimingFunction: 'ease',
          transitionDuration: '1s',
          transitionProperty: 'opacity, transform, -webkit-transform',
          opacity: 1,
          transform: 'none',
        }}
      >
        <div
          className=''
          style={{
            boxSizing: 'border-box',
            margin: '0px auto',
            padding: '0px',
            display: 'block',
            width: '100%',
            maxWidth: '1240px',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <div
            className='about_container title : title--h4'
            style={{
              boxSizing: 'border-box',
              fontSize: '24px',
              lineHeight: 1.54,
              color: 'inherit',
              justifyContent: 'center',
              display: 'flex', // Add flex display
              alignItems: 'center', // Align items vertically center
            }}
          >
            <h1
              style={{
                boxSizing: 'border-box',
                textTransform: 'inherit',
                textAlign: 'inherit',
                width: '100%',
                fontStyle: 'inherit',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                fontWeight: 'inherit',
                color: 'inherit',
                fontFamily: 'inherit',
                marginTop: '30px',
                marginBottom: '0px',
                letterSpacing: 'inherit',
              }}
            >
              {t('doctor.Our Doctors')}
            </h1>
          </div>
        </div>
      </div>
      <div
        className='topbar_wrapper'
        style={{ width: '100%' }}
      >
        <div>
          <div>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 0,
              }}
            >
              <li
                className='breadcrumbs__item : breadcrumbs__item--home'
                style={{
                  display: 'inline-flex',
                  paddingLeft: '0px',
                  paddingRight: '5px',
                }}
              >
                <Link
                  className='breadcrumbs__link : text--14'
                  href='/'
                  style={{
                    boxSizing: 'border-box',
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
                  fontWeight: 700,
                }}
              >
                <Link
                  className='breadcrumbs__link : text--14'
                  href='/appointment'
                  target='_self'
                  title='Our Doctors'
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.4,
                    color: 'rgb(20, 77, 146)',
                    letterSpacing: '0.7px',
                    textTransform: 'uppercase',
                  }}
                >
                  {' / '}
                  {t('doctor.Our Doctors')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className='dr_page_selection_container dr_page_container'
          style={{
            paddingRight: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className='dr_page_selection_wrap'>
            <div className='dr_page_selection_block'>
              <select
                className='dr_selectcontrol'
                id='doctorSelect'
                onChange={handleDoctorChange}
              >
                <option>Doctors</option>
                {doctors.nodes?.map(
                  (doctor, index) =>
                    doctor.doctorFields.doctorName && (
                      <option key={index}>
                        {doctor.doctorFields.doctorName}
                      </option>
                    )
                )}
              </select>
            </div>
            <div className='dr_page_selection_block'>
              <select
                className='dr_selectcontrol'
                id='specializationSelect'
                onChange={handleSpecialtyChange}
              >
                <option>Specialization</option>
                {specializations.map((specialization, index) => (
                  <option key={index}>{specialization.title}</option>
                ))}
              </select>
            </div>
            <div className='dr_page_selection_block'>
              <select
                className='dr_selectcontrol'
                id='locationSelect'
                onChange={handleLocationChange}
              >
                <option>Location</option>
                {locations.nodes?.map((location, index) => (
                  <option key={index}>{location.title}</option>
                ))}
              </select>
            </div>
            <div className='dr_page_selection_block'>
              <select
                className='dr_selectcontrol'
                id='languageSelect'
                onChange={handleLanguageChange}
              >
                <option>Language</option>
                <option>Arabic</option>
                <option>English</option>
                <option>Rajasthani</option>
                <option>Hindi</option>
                <option>Kannada</option>
                <option>Telugu</option>
                <option>Tamil</option>
                <option>Bengali</option>
                <option>Malayalam</option>
                <option>Punjabi</option>
                <option>Marathi</option>
                <option>Persian</option>
                <option>Urdu</option>
                <option>Konkani</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <DoctorsTile
        allPosts={doctors}
        filterddoctors={filteredDoctors}
      />
    </>
  );
};

export default DoctorsHeader;
