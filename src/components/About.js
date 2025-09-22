import React, { useState } from 'react';
const About = () => {
  const [count, setCount] = useState(0);
  const [circleList, setCircleList] = useState([]);
  const handleOnClick = () => {
    setCount(count + 1)
    setCircleList([...circleList, { color: null, id: count }])
  }
  const handleCircleOnClick=(index)=>{
    let tempList=circleList
    if(tempList[index]?.color===null){
      tempList[index].color='red';
    }else{
      tempList[index].color=null;
    }
    
    setCircleList([...tempList])
  }
  return (
    <>
      <button onClick={handleOnClick}>click</button>
      <p>{count}</p>
      {circleList?.map((circle, index) => (
        <div className='circle'key={index} style={{backgroundColor:(circle?.color)}} onClick={()=>handleCircleOnClick(index)}>
        </div>
      ))}

    </>
  );
};
export default About;
