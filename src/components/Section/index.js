import React from 'react'; 
import { useLaxElement } from 'use-lax';

import Container from '../Container';

import { Typography } from 'antd'

import './styles.scss';

const Section = ({ children, title, id }) => {
const sectionTitleRef = useLaxElement();
const { Title } = Typography;
 return (
  <section className='section' id={id || ''}>
    <Container>
      <div className='section-title' ref={sectionTitleRef} data-lax-preset="leftToRight-.025 fadeInOut">
        <Title level={2}>{ title }</Title>
      </div>
      { children }
    </Container>
  </section>
 )
}

export default Section; 