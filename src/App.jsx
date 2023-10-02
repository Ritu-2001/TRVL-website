// import logo from './logo.svg';
import Navbar from './components/Navbar';
import { Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './Services';
import Products from './Products';
import Signup from './signup';
// import { getDatabase } from "firebase/database";
// import Signup from './login';
// import React, {useState} from 'react';
 import {Register } from "./register";
import register from "./register";

function App() {
  //  const [currentForm , setcurrentForm]=useState=('login');
 
  

    //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // var userIsRegistered=true;
    return (

      <>
     {/* <div className='App'>
      {
      currentForm==="login" ? <login/> : <register/>
} 
     </div> */}
      <Navbar/> 
      <Routes>
        <Route exact path='/' element=
        {<Home/>}/>
         <Route exact path='/services' element=
        {<Services/>}/>
          <Route exact path='/products' element=
        {<Products/>}/>
        <Route exact path='/signup'element=
         {<Signup/>}/>
  
        

       </Routes>
       {/* <div classname="container">
       < Form isRegistered={userIsRegistered} /> 
       </div>
       */}
     </> 
    
    
    
    
  );
}

export default App;
// export const database = getDatabase(App);
// 
