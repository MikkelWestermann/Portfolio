import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';

import { Divider, Typography } from 'antd';

import './styles.scss'

const Skills = () => {
  const javascriptImage = useLaxElement();
  const cSharpImage = useLaxElement();
  const pythonImage = useLaxElement();
  const { Title, Paragraph } = Typography;
  return (
    <Section title='Skills' id='skills-section'>
      <div className='skills-code-wrapper'>
        <div ref={javascriptImage} data-lax-preset='fadeIn' className='skills-code-image' />
      </div>
      <Divider orientation="left">JavaScript</Divider>
      <div className='skills-code-wrapper skills-code-right'>
        <div ref={cSharpImage} data-lax-preset='fadeIn' className='skills-code-image' />
      </div>
      <Divider orientation="right">C#</Divider>
      <div className='skills-code-wrapper'>
        <div ref={pythonImage} data-lax-preset='fadeIn' className='skills-code-image' />
      </div>
      <Divider orientation="left">Python</Divider>
      <Title level={3}>Other Tecknologies</Title>
      <Paragraph>
        Through my work I have had the opportunity to work with a <strong>lot</strong> of really cool tecknologies. 
        Because I work at Hairpal I have a lot of different roles, which enables me to explore different tools and tecknologies, that i wouldn't necessarily have worked with at this stage of my career. 
        At Hairpal I have worked with full-stack web development (obviously): NodeJs, React, MongoDB, Postgres, GraphQL, etc., deployment: Kubernetes, Docker and Bitbucket Pipelines, Task automation: Python Scheduling, Flask, Sendgrid
      </Paragraph>
    </Section>
  );
}

export default Skills