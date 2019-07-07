import React from 'react'; 
import { Typography } from 'antd';
import Container from '../Container';
import { useLaxElement } from 'use-lax';

import './styles.scss';

const SubPage = ({ children, title }) => {
  const smallBubble = useLaxElement()
  const largeBubble = useLaxElement()
  return (
    <div className='sub-page-wrapper'>
      <div className='page-header'>
        <Typography.Title level={1}>{ title }</Typography.Title>
        <div ref={largeBubble} id='header-large-bubble' data-lax-preset="rightToLeft-.25" />
        <div ref={smallBubble} id='header-small-bubble' data-lax-preset="leftToRight-.25" />
      </div>
      <Container>
        { children }
      </Container>
    </div>
  )
}

export default SubPage