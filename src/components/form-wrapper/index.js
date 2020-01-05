import React from 'react';
import Container from '../Container';

import { useLaxElement } from 'use-lax';

import './styles.scss';

const FormWrapper = ({ children, style }) => {
  const largeContactBubble = useLaxElement()
  const smallContactBubble = useLaxElement()
  return (
    <Container className='form-wrapper' style={style}>
      <div className='contact-form-bubble-large' ref={largeContactBubble} data-lax-preset="leftToRight-.1" />
      <div className='contact-form-bubble-small' ref={smallContactBubble} data-lax-preset="rightToLeft-.15" />
      { children }
    </Container>
  )
}

export default FormWrapper;