import React from 'react';
import { useLaxElement } from 'use-lax';

import Section from '../Section';
import Container from '../Container';

import { Typography } from 'antd';

import './styles.scss'

const About = () => {
  const meBackgroundBubble = useLaxElement()
  const meSmallBubble = useLaxElement()
  const { Paragraph, Text, Title } = Typography;
  return (
    <Section title='About' id='about-section'>
      <div id='about-me-image'>
        <div id='me-image-group'>
          <div ref={meBackgroundBubble} id='me-image-background-bubble' data-lax-preset="leftToRight-.02" />
          <img id='me-image' src="https://andiscle.sirv.com/Portfolio/Profile/profile.jpg?cy=15%25&cw=200&ch=200&w=200" width="200" height="200" srcset="https://andiscle.sirv.com/Portfolio/Profile/profile.jpg?cy=15%25&cw=200&ch=200&w=200 1x, https://andiscle.sirv.com/Portfolio/Profile/profile.jpg?cy=15%25&cw=400&ch=400&w=400 2x" alt="me" />
          <div ref={meSmallBubble} id='me-image-foreground-bubble' data-lax-preset="rightToLeft-.05" />
        </div>
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