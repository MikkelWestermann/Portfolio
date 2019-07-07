import React from 'react'; 
import { useLaxElement } from 'use-lax';

import Container from '../Container';

import { Typography, Icon } from 'antd'

import './styles.scss';

const Footer = props => {
  const smallBubble = useLaxElement();
  const largeBubble = useLaxElement();
  const { Title } = Typography;
  return (
    <div id='footer'>
      <div ref={largeBubble} id='footer-bubble' data-lax-preset='rightToLeft-.1' />
      <div ref={smallBubble} id='small-footer-bubble' data-lax-preset='leftToRight-.1' />
      <Container>
        <Title style={{color: '#eee'}} level={3}>Contact</Title>
        <div id='footer-content'>
          <div id='footer-contact-info'>
            <p>mikkel.westermann.98@gmail.com</p>
            <p><a href='/#contact'>Contact Section</a></p>
            <p>You can also send me a message on one of the social channels on the right <Icon type="arrow-right" /></p>
          </div>
          <div id='footer-social'>
            <Title level={4}>Social</Title>
            <div id='footer-social-buttons'>
              <a style={{color: '#eee'}} target='_blank' rel="noopener noreferrer" href='https://github.com/MikkelWestermann'><Icon style={{ fontSize: '2.5em' }} type="github" /></a>
              <a style={{color: '#eee'}} target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/mikkel-westermann/'><Icon style={{ fontSize: '2.5em' }} type="linkedin" theme="filled" /></a>
              <a style={{color: '#eee'}} target='_blank' rel="noopener noreferrer" href='https://twitter.com/MTWestermann'><Icon style={{ fontSize: '2.5em' }} type="twitter" /></a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;