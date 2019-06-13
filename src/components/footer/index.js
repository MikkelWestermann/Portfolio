import React from 'react'; 

import Container from '../Container';

import { Typography, Icon } from 'antd'

import './styles.scss';

const Footer = props => {
  const { Title } = Typography;
  return (
    <div id='footer'>
      <div id='footer-bubble' />
      <div id='small-footer-bubble' />
      <Container>
        <Title style={{color: '#eee'}} level={3}>Footer</Title>
        <div id='footer-content'>
          <div>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
            <p>Other content</p>
          </div>
          <div id='footer-social'>
            <Title level={4}>Social</Title>
            <div id='footer-social-buttons'>
              <Icon style={{ fontSize: '2.5em' }} type="github" />
              <Icon style={{ fontSize: '2.5em' }} type="linkedin" theme="filled" />
              <Icon style={{ fontSize: '2.5em' }} type="twitter" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;