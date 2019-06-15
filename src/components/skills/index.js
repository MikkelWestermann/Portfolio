import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';

import { Divider, Typography } from 'antd';

import './styles.scss'

const Skills = () => {
  const javascriptImage = useLaxElement();
  const cSharpImage = useLaxElement();
  const pythonImage = useLaxElement();
  const { Title, Paragraph, Text } = Typography;
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
      <Typography>
        <Title level={3}>Other Technologies</Title>
        <Paragraph>
          Through my work I have had the opportunity to work with a <strong>lot</strong> of really cool technologies. 
          Because I work at Hairpal I have a lot of different roles, which enables me to explore different tools and technologies, that i wouldn't necessarily have worked with at this stage of my career. 
          During my time at Hairpal, I have worked with: 
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <Text strong>Full-stack web development</Text> Here I have worked with a long list of technologies, including: 
              <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>Redux</li>
                <li>SQL, NoSQL, and GraphQL</li>
              </ul>
            </li>
            <li>
              <Text strong>Dev Ops</Text> We have a really modern setup, with technologies including: 
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Bitbucket Pipelines</li>
              </ul>
            </li>
            <li>
              <Text strong>Task automation</Text> Automating all the boring stuff with: 
              <ul>
                <li>Python / Flask</li>
                <li>Sendgrid</li>
                <li>PDFKit</li>
              </ul>
            </li>
          </ul>
        </Paragraph>

      </Typography>
    </Section>
  );
}

export default Skills