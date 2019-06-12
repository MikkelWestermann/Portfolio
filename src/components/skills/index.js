import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';

import { Divider } from 'antd';

import './styles.scss'

const Skills = () => {
  const javascriptImage = useLaxElement();
  const cSharpImage = useLaxElement();
  const pythonImage = useLaxElement();
  return (
    <Section title='Skills' id='skills-section'>
      <div className='skills-code-wrapper'>
        <div ref={javascriptImage} data-lax-preset='fadeIn leftToRight-.05' className='skills-code-image' />
      </div>
      <Divider orientation="left">JavaScript</Divider>
      <div className='skills-code-wrapper skills-code-right'>
        <div ref={cSharpImage} data-lax-preset='fadeIn rightToLeft-.05' className='skills-code-image' />
      </div>
      <Divider orientation="right">C#</Divider>
      <div className='skills-code-wrapper'>
        <div ref={pythonImage} data-lax-preset='fadeIn leftToRight-.05' className='skills-code-image' />
      </div>
      <Divider orientation="left">Python</Divider>
    </Section>
  );
}

export default Skills