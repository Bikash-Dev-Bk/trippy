import React from 'react';
import 'animate.css';

import './Button.css';

const Button = ({ children }) => {
  return <button className="button animate__animated animate__zoomIn">{children}</button>;
};

export default Button;