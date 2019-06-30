import React from 'react'; 
import { Typography } from 'antd';
import Container from '../Container';

import './styles.scss';

const SubPage = ({ children, title }) => (
  <div className='sub-page-wrapper'>
    <div className='page-header'>
      <Typography.Title level={1}>{ title }</Typography.Title>
      <div id='header-large-bubble' />
      <div id='header-small-bubble' />
    </div>
    <Container>
      { children }
    </Container>
  </div>
)

export default SubPage