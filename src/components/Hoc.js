import React from 'react';
const Hoc = (WrappedComponent) => {
  return function EnhaancedComponent(props) {
    return <WrappedComponent {...props} />;
  };
};
export default Hoc;
