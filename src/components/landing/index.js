import React, { Component } from 'react'; 

import Button from 'antd/lib/button';

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

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
    pauseAnim: localStorage.getItem('pauseAnim') || false
  }

  componentWillMount() {
    watchViewport(this.tornis)
  }

  componentWillUnmount() {
    unwatchViewport(this.tornis)
  }  


  tornis = ({ size, scroll }) => {
    if (size.changed) {
      console.log('Size ->', size)
      const windowSize = { ...this.state.windowSize }
      windowSize.x = size.x; 
      windowSize.y = size.y; 
      this.setState({ windowSize })
    }
    
    if (scroll.changed) {
      console.log('Scroll ->', scroll)
    }
  }

  pauseAnim = () => {
    this.setState(prevState =>  {
      localStorage.setItem('pauseAnim', !prevState.pauseAnim)
      return { pauseAnim: !prevState.pauseAnim } 
    })
  }

  sketch = p => {
    // Not my artwork -> https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
    const maxCircleSize = 40, numRows = 10, numCols = 50, numStrands = 2; 
    let colorA, colorB; 
    let phase = 0, speed = 0.015;
    const maxWindowWidth = 1200; 

    const drawFrame = () => {
      p.background(24, 40, 54);
          phase = p.frameCount * speed;
          
          for(let strand = 0; strand < numStrands; strand++) {
            let strandPhase = phase + p.map(strand, 0, numStrands, 0, p.TWO_PI);
            
            for(let col = 0; col < numCols; col++) {
              const colOffset = p.map(col, 0, numCols, 0, p.TWO_PI);
              const x = p.map(col, 0, numCols, 50, p.width - 50);
              
              for(let row = 0; row < numRows; row++) {
                const y = p.height/2 + row * 10 + p.sin(strandPhase + colOffset) * 50;
                const sizeOffset = (p.cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
                const circleSize = sizeOffset * maxCircleSize;
                
                p.fill(p.lerpColor(colorA, colorB, row / numRows));
                p.ellipse(x, y, circleSize, circleSize);
              }
            }
          }
    }
  
      p.setup = () => {
        p.createCanvas(p.windowWidth < maxWindowWidth ? p.windowWidth : maxWindowWidth, p.windowHeight);
        p.noStroke();
        colorA = p.color(238);
        colorB = p.color(0, 150, 136);
      }
  
      p.draw = () => {
        if (!this.state.pauseAnim) {
          drawFrame()
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth < maxWindowWidth ? p.windowWidth : maxWindowWidth, p.windowHeight)
      }
  }
  render() {
    const { pauseAnim } = this.state;
    return (
      <div id='landing-anim'>
        <P5Wrapper sketch={this.sketch}></P5Wrapper>
        <div id='landing-anim-me'>
          <h1>Hi, I'm <span>Mikkel Westermann</span></h1>
          <h2>I'm a full-stack developer</h2>
        </div>
        <div id='landing-anim-actions'>
          <div>
            <Button>Download My Resume</Button>
            <Button>View My Work -></Button>
          </div>
          {
            !pauseAnim ?
            <p>It's a pretty taxing animation running in the background click <span onClick={this.pauseAnim}>Here</span> to pause it</p>:
            <p>It's a pretty awesome animation running in the background click <span onClick={this.pauseAnim}>Here</span> to unpause it</p>
          }
        </div>
      </div>
    )
  }
}

export default Landing; 