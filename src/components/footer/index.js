import React from 'react'; 

import Container from '../Container';

import { Typography } from 'antd'

import './styles.scss';

const Footer = props => {
  const { Title } = Typography;
  return (
    <Container>
      <Title level={4}>Footer</Title>
    </Container>
  )
}

export default Footer;