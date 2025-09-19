import React from 'react';
import GrandChild from './GrandChild';
const Child = ({ user }) => {
  return (
    <>
      <h3>child component</h3>
      <GrandChild user={user} />
    </>
  );
};
export default Child;
