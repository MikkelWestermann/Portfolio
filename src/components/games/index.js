import React from 'react'; 
import { Typography } from 'antd';
import SubPage from '../sub-page';
import { data } from '../../Data/AppData';

// store grapics
import appstore from '../../media/appstore.svg';
import googleplay from '../../media/googleplay.png';

import './styles.scss';



const { Title, Paragraph } = Typography;

const Game = ({ app }) => {
  return (
    <div className='project'>
      <div className='project-background' style={{backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${app.id}/${app.background}?w=300&h=300)`}}>
        <img alt={`${app.name} app icon`} className='project-icon' src={`https://andiscle.sirv.com/Portfolio/${app.id}/${app.icon}?w=100&h=100`} />
      </div>
      <div className='project-info'>
        <Title level={2}>{ app.name }</Title>
        <Paragraph>{ app.description }</Paragraph>
        <Title level={4}>Download</Title>
        <div className="download">
          <a href={ app.appURL }><img src={ appstore } alt='app store' className='storeLinkApple'/></a>
          <a href={ app.playURL }><img src={ googleplay } alt='google play' className='storeLinkGoogle'/></a>
        </div>
      </div>
    </div>
  )
}

const Games = props => {
  return (
    <SubPage 
      title='Games'
    >
      {
        data.map(app => (
          <Game app={app} key={app.id} />
        ))
      }
    </SubPage>
  )
}

export default Games