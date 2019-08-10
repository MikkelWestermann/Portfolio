import React from 'react';
import { useLaxElement } from 'use-lax';

import { Link } from 'react-router-dom';

import moment from 'moment';

import Section from '../Section';
import Container from '../Container';

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
        <div className='skills-code-text'>
          <Text><strong>JavaScript</strong> is my main langauge and the one I use on a daily basis. I have been programming in JavaScript for about {moment.duration(moment().diff(moment('2018-01-01'))).years()} year and {moment.duration(moment().diff(moment('2018-01-01'))).months()} month(s). I started learning the langauge of the web because of the rapid development and expansion of web technologies, of which JavaScript is core. I use JavaScript for full-stack, meaning I write a lot of React and Node.</Text>
        </div>
      </div>
      <Divider orientation="left">JavaScript</Divider>
      <div className='skills-code-wrapper'>
        <div className='skills-code-text'>
          <Text><strong>C#</strong> was the first language that I wrote full programs in. I have only used C# in conjunction with Unity3D, which all of my <Link to='/games'>games</Link> are written in. I started using it back in 2014-2015ish and have been using it sporadically ever since.</Text>
        </div>
        <div ref={cSharpImage} data-lax-preset='fadeIn' className='skills-code-image' />
      </div>
      <Divider orientation="right">C#</Divider>
      <div className='skills-code-wrapper'>
        <div ref={pythonImage} data-lax-preset='fadeIn' className='skills-code-image' />
        <div className='skills-code-text'>
          <Text><strong>Python</strong> is one of my newest acquisitions of programming languages, but one of my favorites. I initially learned Python because it's the defacto standard in Artificial Intelligence and Machine Learning (well, that and R) and you know, those are pretty interesting topics. I have since then used it for small backends with flask and I continue to use it in my pursuit of knowledge in AI and ML.</Text>
        </div>
      </div>
      <Divider orientation="left">Python</Divider>
      <Container text>
        <Typography>
          <Title level={3}>Other Technologies</Title>
          <Paragraph>
            Through my work I have had the opportunity to work with a <strong>lot</strong> of really cool technologies. 
            Because I work at a smaller startup I have a lot of different roles, which enables me to explore different tools and technologies, that i wouldn't necessarily have worked with at this stage of my career. 
            I have worked with: 
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
                </ul>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Container>
    </Section>
  );
}

export default Skills