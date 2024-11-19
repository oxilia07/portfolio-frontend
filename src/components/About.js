import React from 'react';
import img2 from '../assets/oxilia2.jpg';

const About = () => (
  <section className='about section' id='about'>
    <h2 className='section-title'>About</h2>
    <div className='about__container bd-grid'>
      <div className='about__img'>
        <img src={img2} alt='About Oxilia' />
      </div>
      <div>
        <h2 className='about__subtitle'>I'm Oxilia</h2>
        <p className='about__text'>
          I hail from Minahasa Selatan. I'm passionate about creating web
          systems and design.
        </p>
      </div>
    </div>
  </section>
);

export default About;
