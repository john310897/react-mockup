import React from 'react';
import Child from './Child';
const Parent = ({ user }) => {
  return (
    <>
      <h3>parent component</h3>
      <Child user={user} />
    </>
  );
};
export default Parent;
