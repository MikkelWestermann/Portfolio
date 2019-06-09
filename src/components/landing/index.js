import React, { Component } from 'react'; 

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

// import p5 wrapper for background sketch
import P5Wrapper from 'react-p5-wrapper';

class Landing extends Component {

  state = {
    windowSize: {
      x: 0,
      y: 0
    }
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

  sketch = p => {
    // Not my artwork -> https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
    const maxCircleSize = 40, numRows = 10, numCols = 50, numStrands = 2; 
    let colorA, colorB; 
    let phase = 0, speed = 0.015; 
    let canvas;
  
      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();
        colorA = p.color(253, 174, 120);
        colorB = p.color(226, 129, 161);
      }
  
      p.draw = () => {
        p.background(4, 58, 74);
        phase = p.frameCount * speed;
        
        for(let strand = 0; strand < numStrands; strand += 1) {
          let strandPhase = phase + p.map(strand, 0, numStrands, 0, p.TWO_PI);
          
          for(let col = 0; col < numCols; col += 1) {
            const colOffset = p.map(col, 0, numCols, 0, p.TWO_PI);
            const x = p.map(col, 0, numCols, 50, p.width - 50);
            
            for(let row = 0; row < numRows; row += 1) {
              const y = p.height/2 + row * 10 + p.sin(strandPhase + colOffset) * 50;
              const sizeOffset = (p.cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
              const circleSize = sizeOffset * maxCircleSize;
              
              p.fill(p.lerpColor(colorA, colorB, row / numRows));
              p.ellipse(x, y, circleSize, circleSize);
            }
          }
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
  }
  render() {
    return (
      <div>
        <P5Wrapper sketch={this.sketch}></P5Wrapper>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default Landing; 