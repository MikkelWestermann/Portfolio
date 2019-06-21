import React from 'react'; 
import { Typography } from 'antd';
import Container from '../Container';
import { data } from '../../Data/AppData';

import './styles.scss';



const { Title, Paragraph } = Typography;

const Project = ({ app }) => {
  return (
    <div className='project'>
      <div className='project-background' style={{backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${app.id}/${app.background}?w=300&h=300)`}}>
        <img alt={`${app.name} app icon`} className='project-icon' src={`https://andiscle.sirv.com/Portfolio/${app.id}/${app.icon}?w=100&h=100`} />
      </div>
      <div className='project-info'>
        <Title level={2}>{ app.name }</Title>
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
      {
        data.map(app => (
          <Project app={app} />
        ))
      }
    </Container>
  )
}

export default Projects