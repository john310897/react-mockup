import React, { useContext, useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
const GrandChild = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    // user.id = 1;
    setUser({ ...user, id: 1 });
  }, []);
  return (
    <>
      <p>Grand Child</p>
      <p>Hello, {user?.name}</p>
    </>
  );
};
export default GrandChild;
