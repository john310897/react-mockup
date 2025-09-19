import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const GrandGChild = () => {
  const {user,setUser} = useContext(UserContext);
  const showState=()=>{
      console.log(user)
  }
  return (
    <React.Fragment>
      <p>In great grand child</p>
      <p>
        main user id for user {user?.name} is : {user?.id}
      </p>

      <button onClick={showState}>update</button>
    </React.Fragment>
  );
};
export default GrandGChild;
