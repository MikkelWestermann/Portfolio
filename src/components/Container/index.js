import React from 'react';

import './styles.scss';

const Container = ({ children, text, className, style }) => (
  <div style={style} className={`container ${text ? 'text-container' : ''} ${className ? className : ''}`}>
    { children }
  </div>
)

export default Container;