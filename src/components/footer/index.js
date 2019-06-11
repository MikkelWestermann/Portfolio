import React from 'react'; 

import Container from '../Container';

import { Typography } from 'antd'

import './styles.scss';

const Footer = props => {
  const { Title } = Typography;
  return (
    <div id='footer'>
      <div id='footer-bubble' />
      <div id='small-footer-bubble' />
      <Container>
        <Title style={{color: '#eee'}} level={4}>Footer</Title>
      </Container>
    </div>
  )
}

export default Footer;