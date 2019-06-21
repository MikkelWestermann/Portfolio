import React from 'react'; 
import { Typography } from 'antd';
import Container from '../Container';

import './styles.scss';



const { Title, Paragraph } = Typography;

const Project = props => {
  return (
    <div className='project'>
      <div className='project-background'>
        <div className='project-icon' />
      </div>
      <div className='project-info'>
        <Title level={2}>Project Title</Title>
        <Paragraph>This is short description</Paragraph>
        <Title level={4}>Download</Title>
      </div>
    </div>
  )
}

const Projects = props => {
  return (
    <Container>
      <Title level={1} className='page-header'>Projects</Title>
      <Project />
    </Container>
  )
}

export default Projects