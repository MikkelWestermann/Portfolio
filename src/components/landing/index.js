import React, { Component } from 'react'; 

import { Button, Typography, Icon } from 'antd';

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

// Landing page sectional components
import About from '../about';
import Skills from '../skills';
import Contact from '../contact';

// import p5 wrapper for background sketch
import P5Wrapper from 'react-p5-wrapper';

// import styles 
import './styles.scss'

class Landing extends Component {

  state = {
    windowSize: {
      x: 0,
      y: 0
    },
    pauseAnim: parseInt(localStorage.getItem('pauseAnim'))
  }
  
  componentWillMount() {
    watchViewport(this.tornis)
  }

  componentWillUnmount() {
    unwatchViewport(this.tornis)
  }  


  tornis = ({ size, scroll }) => {
    if (size.changed) {
      const windowSize = { ...this.state.windowSize }
      windowSize.x = size.x; 
      windowSize.y = size.y; 
      this.setState({ windowSize })
    }
    
    if (scroll.changed) {
      // console.log('Scroll ->', scroll)
    }
  }

  pauseAnim = () => {
    this.setState(prevState =>  {
      const pauseAnim = prevState.pauseAnim ? 0 : 1
      localStorage.setItem('pauseAnim', pauseAnim)
      return { pauseAnim: pauseAnim } 
    })
  }

  sketch = p => {
    // Not my artwork -> https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
    let maxCircleSize, numRows, numCols, numStrands, heightMultiplier, colorA, colorB; 
    let phase = 0, speed = 0.015;
    const maxWindowWidth = 1200; 

    let isResized = false;

    const drawFrame = () => {
          phase = p.frameCount * speed;
          
          for(let strand = 0; strand < numStrands; strand++) {
            let strandPhase = phase + p.map(strand, 0, numStrands, 0, p.TWO_PI);
            
            for(let col = 0; col < numCols; col++) {
              const colOffset = p.map(col, 0, numCols, 0, p.TWO_PI);
              const x = p.map(col, 0, numCols, 50, p.width - 50);
              
              for(let row = 0; row < numRows; row++) {
                const y = p.height/2 + row * 10 + p.sin(strandPhase + colOffset) * heightMultiplier;
                const sizeOffset = (p.cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
                const circleSize = sizeOffset * maxCircleSize;
                
                p.fill(p.lerpColor(colorA, colorB, row / numRows));
                p.ellipse(x, y, circleSize, circleSize);
              }
            }
          }
    }

    const variables = windowWidth => {
      if (windowWidth < 500) {
        maxCircleSize = 20;
        numRows = 8;
        numCols = 20;
        numStrands = 2;
        heightMultiplier = 25; 
      } else if (windowWidth < 992) {
        maxCircleSize = 40;
        numRows = 10;
        numCols = 25;
        numStrands = 2;
        heightMultiplier = 50; 
      } else {
        maxCircleSize = 50;
        numRows = 10;
        numCols = 30;
        numStrands = 2;
        heightMultiplier = 50; 
      }
    }
  
    p.setup = () => {
      variables(p.windowWidth);
      p.createCanvas(p.windowWidth < maxWindowWidth ? p.windowWidth : maxWindowWidth, p.windowHeight);
      p.noStroke();
      colorA = p.color(238);
      colorB = p.color(0, 150, 136);

      if (this.state.pauseAnim) {
        drawFrame()
      }
    }

    p.draw = () => {
      if (!this.state.pauseAnim || isResized) {
        drawFrame()
        isResized = false;
      }
    }

    p.windowResized = () => {
      variables(p.windowWidth);
      p.resizeCanvas(p.windowWidth < maxWindowWidth ? p.windowWidth : maxWindowWidth, p.windowHeight)
      isResized = true;
    }
  }
  render() {
    const { pauseAnim, windowSize } = this.state;
    const { Title } = Typography;
    return (
      <div>
        <div id='landing-anim'>
          <P5Wrapper sketch={this.sketch}></P5Wrapper>
          <div id='landing-anim-me'>
            <Title>Hi, I'm <span>Mikkel Westermann</span></Title>
            {
              windowSize.x > 400 &&
              <Title level={2}>I'm a full-stack developer</Title>
            }
          </div>
          <div id='landing-anim-actions'>
            <div>
              <Button icon="download" size='large'>Download My Resume</Button>
              <Button type='primary' size='large'>View My Work <Icon type="arrow-right" /></Button>
            </div>
            {
              !pauseAnim ?
              <p>It's a pretty taxing animation running in the background click <span onClick={this.pauseAnim}>Here</span> to pause it</p>:
              <p>It's a pretty awesome animation running in the background click <span onClick={this.pauseAnim}>Here</span> to unpause it</p>
            }
          </div>
        </div>
        <About />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default Landing; 