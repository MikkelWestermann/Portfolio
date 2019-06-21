import React from 'react'; 
import { Typography } from 'antd';
import Container from '../Container';

import './styles.scss';

const Project = props => {
  return (
    <div className='project'>
      <div className='project-background'>
        <div className='project-icon' />
      </div>
      <div>Project Info</div>
    </div>
  )
}

const Projects = props => {
  const { Title } = Typography;
  return (
    <Container>
      <Title level={1} className='page-header'>Projects</Title>
      <Project />
    </Container>
  )
}

export default Projects