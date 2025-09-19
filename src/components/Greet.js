import React from 'react';
import Hoc from './Hoc';
const Greed = ({ name }) => {
  return <h3>Hello, {name}</h3>;
};
const EnhancedComponent = Hoc(Greed);
export default EnhancedComponent;