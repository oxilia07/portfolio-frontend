import React, { useEffect, useState } from 'react';
import fetchImageBase64 from '../utils/fetchBase64img';

const Home = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const base64 = await fetchImageBase64('images', 'img');
      setImageData(base64);
    };

    fetchData();
  }, []);
  return (
    <section className='home bd-grid' id='home'>
      <div className='home__data'>
        <h1 className='home__title'>
          Hi,
          <br />
          I'm <span className='home__title-color'>Oxilia</span>
          <br />
          IT Graduate
        </h1>
        <a href='#about' className='button'>
          More
        </a>
      </div>
      <div className='home__social'>
        <a
          href='https://www.instagram.com/Oxilia_7/'
          className='home__social-icon'>
          <i className='bx bxl-instagram'></i>
        </a>
      </div>
      <div className='home__img'>
        <img src={imageData} alt='Oxilia Kosegeran' />
      </div>
    </section>
  );
};
export default Home;
