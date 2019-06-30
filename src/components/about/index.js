import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';
import Container from '../Container';

import { Typography, Icon } from 'antd';

import './styles.scss'

const About = () => {
  const meArrow = useLaxElement()
  const { Paragraph, Text, Title } = Typography;
  return (
    <Section title='About' id='about-section'>
      <div id='about-me-image'>
        <div id='me-image-group'>
          <div id='me-image-background-bubble' />
          <div id='me-image' />
          <div id='me-image-foreground-bubble' />
        </div>
        <div id='me-arrow' ref={meArrow} data-lax-preset='fadeIn rightToLeft-.2'><Icon type="arrow-left" /> That's me</div>
      </div>
      <Container text>
        <Typography>
          <Paragraph>
            <Text strong>Hi! And welcome to my portfolio / playground.</Text> This is a website for showcasing my work, and for me to try out awesome new (or new to me) technologies like serverless architecture and React Hooks.
          </Paragraph>

          <Title level={3}>Tech Stack</Title>
          

        </Typography>
      </Container>
    </Section>
  );
}

export default About;