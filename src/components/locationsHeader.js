import Information from './Locations/Information';
import { useState } from 'react';

const LocationHeader = ({ locations, specializations }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Specialization');
  const [selectedCity, setSelectedCity] = useState('City');
  const [selectedArea, setSelectedArea] = useState('Area');

  const filteredLocations = locations.nodes?.filter((location) => {
    return (
      (selectedSpecialty === 'Specialization' ||
        location.locationFields.specializations === selectedSpecialty) &&
      (selectedCity === 'City' ||
        location.locationFields.city === selectedCity) &&
      (selectedArea === 'Area' || location.locationFields.area === selectedArea)
    );
  });

  const uniqueCitiesSet = new Set();
  const uniqueAreaSet = new Set();

  const filteredCities = locations.nodes
    ?.filter((location) => {
      const city = location.locationFields.city;

      if (!uniqueCitiesSet.has(city) && city !== null) {
        uniqueCitiesSet.add(city);
        return true;
      }

      return false;
    })
    .map((location) => location.locationFields.city);

  const filteredArea = locations.nodes
    ?.filter((location) => {
      const area = location.locationFields.area;

      if (!uniqueAreaSet.has(area) && area !== null) {
        uniqueAreaSet.add(area);
        return true;
      }

      return false;
    })
    .map((location) => location.locationFields.area);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);

    if (selectedCity !== 'City') {
      setSelectedSpecialty('Specialization');
      setSelectedArea('Area');
    } else {
      setSelectedSpecialty('Specialization');
      setSelectedArea('Area');
    }

    const specializationSelect = document.getElementById(
      'specializationSelect'
    );
    const areaSelect = document.getElementById('areaSelect');
    if (specializationSelect && areaSelect) {
      specializationSelect.value = 'Specialization';
      areaSelect.value = 'Area';
    }
  };

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);

    if (selectedSpecialty !== 'Specialization') {
      setSelectedCity('City');
      setSelectedArea('Area');
    } else {
      setSelectedCity('City');
      setSelectedArea('Area');
    }

    const citySelect = document.getElementById('citySelect');
    const areaSelect = document.getElementById('areaSelect');
    if (citySelect && areaSelect) {
      citySelect.value = 'City';
      areaSelect.value = 'Area';
    }
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);

    if (selectedArea !== 'Area') {
      setSelectedCity('City');
      setSelectedSpecialty('Specialization');
    } else {
      setSelectedCity('City');
      setSelectedSpecialty('Specialization');
    }

    const specializationSelect = document.getElementById(
      'specializationSelect'
    );
    const citySelect = document.getElementById('citySelect');
    if (specializationSelect && citySelect) {
      specializationSelect.value = 'Specialization';
      citySelect.value = 'City';
    }
  };

  return (
    <div>
      <div className='dr_page_container'>
        <div className='dr_page_selection_container'>
          <div className='dr_page_selection_wrap'>
            <div className='dr_page_selection_block'>
              <select
                className='dr_selectcontrol'
                id='citySelect'
                onChange={handleCityChange}
              >
                <option>City</option>
                {filteredCities.map((city, index) => (
                  <option key={index}>{city}</option>
                ))}
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
                id='areaSelect'
                onChange={handleAreaChange}
              >
                <option>Area</option>
                {filteredArea.map((area, index) => (
                  <option key={index}>{area}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Information post={filteredLocations} />
    </div>
  );
};

export default LocationHeader;
