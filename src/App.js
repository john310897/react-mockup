import React, { useState,useEffect } from 'react';
import './style.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Parent from './components/Parent';
import GrandGChild from './components/GrandGChild';
import EnhancedGreet from './components/Greet';
import Modal from './components/Modal';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './redux/reducers/userReducer';
import { userDataStore } from './zustand/userStore';


export default function App() {
  const [user] = useState({ name: 'john', age: 30 });
  const [isOpen, setIsOpen] = useState(false);
  // const userData = useSelector((data) => data?.userStore);
  // const dispatch=useDispatch()
  const userData=userDataStore(data=>data?.obj)

  const updateZusStore=userDataStore(data=>data.addData)
  useEffect(() => {
    console.log('redux store data', userData);
    console.log(userData)
  }, []);

  const addAge=()=>{
    // dispatch(addData({age:30,city:'bangalore',country:'india'}))
    updateZusStore({city:'bangalore'})
    console.log(userData)
  }
  return (
    <React.Fragment>
      <button onClick={addAge}>add age</button>
      {/* <Parent />
      <GrandGChild /> */}
      {/* <EnhancedGreet name={'john'} /> */}
      {/* welcome to react
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen}>
        this is a modal
        <button onClick={() => setIsOpen(false)}>close modal</button>
      </Modal> */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
