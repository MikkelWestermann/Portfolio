import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';

import './styles.scss'

const About = () => {
  const meImage = useLaxElement();
  return (
    <Section title='About Me' id='about-section'>
      <div ref={meImage} className='me-image' />
    </Section>
  );
}

export default About;