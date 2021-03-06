import React from 'react'; 
import { useLaxElement } from 'use-lax';

import Container from '../Container';

import { Typography, Icon } from 'antd'

import './styles.scss';

const Footer = props => {
  const smallFooterBubble = useLaxElement();
  const largeFooterBubble = useLaxElement();
  const { Title } = Typography;
  return (
    <div id='footer'>
      <div ref={largeFooterBubble} id='footer-bubble' data-lax-preset='rightToLeft-.1' />
      <div ref={smallFooterBubble} id='small-footer-bubble' data-lax-preset='leftToRight-.1' />
      <Container>
        <Title style={{color: '#eee'}} level={3}>Contact</Title>
        <div id='footer-content'>
          <div id='footer-contact-info'>
            <p><a href='mailto:hi@mikkelwestermann.com'>hi@mikkelwestermann.com</a></p>
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
        <p className='copyright'>Mikkel Theiss Westermann &copy; {new Date().getFullYear()}</p>
      </Container>
    </div>
  )
}

export default Footer;