 // import React from 'react';
 // import './App.css';
 //  import './signup.css';

 // import bg from './images/img-6.jpg';
 // import Button from '@mui/material/Button'
// import {getDatabase} from "firebase/database";
// import   {useState,setState} from "react";
// import {database} from '../firebase';
// import {ref,push,child,update} from "firebase/database";

import React,{useState} from 'react';
 import './App.css';
  import './signup.css';
  import email from './images/email.png';
  import password from './images/password.png';
  import person from './images/person.png';








//  function Signup() {

//   const [firstName, setFirstName] = useState(null);
//   const [lastName, setLastName] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password,setPassword] = useState(null);
//   const [confirmPassword,setConfirmPassword] = useState(null);

//   const handleInputChange = (e) => {
//       const {id , value} = e.target;
//       if(id === "firstName"){
//           setFirstName(value);
//       }
//       if(id === "lastName"){
//           setLastName(value);
//       }
//       if(id === "email"){
//         setEmail(value);
//     }
//     if(id === "password"){
//         setPassword(value);
//     }
//     if(id === "confirmPassword"){
//         setConfirmPassword(value);
//     }

// }

// const handleSubmit  = () => {
//   console.log(firstName,lastName,email,password,confirmPassword);
// }

// firebase 
// let obj = {
//     firstName : firstName,
//     lastName:lastName,
//     email:email,
//     password:password,
//     confirmPassword:confirmPassword,
// }       
// const newPostKey = push(child(ref(database), 'posts')).key;
// const updates = {};
// updates['/' + newPostKey] = obj
// return update(ref(database), updates);
// }
// {
 // console.log(firstName,lastName,email,password,confirmPassword);

 // }


//     return    ( 
//       <div className='hero-container' style={{ backgroundImage: `url(${bg})`  }}>
//       <div className="form">
//       <div className="form-body">
//           <div className="username">
//               <label className="form__label" for="firstName">First Name </label>
//               <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//           </div>
//           <div className="lastname">
//               <label className="form__label" for="lastName">Last Name </label>
//               <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//           </div>
          
//           <div className="email">
//               <label className="form__label" for="email">Email </label>
//               <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//           </div>
//           <div className="password">
//               <label className="form__label" for="password">Password </label>
//               <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//           </div>
//           <div className="confirm-password">
//               <label className="form__label" for="confirmPassword">Confirm Password </label>
//               <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//           </div>
        
//       </div>
//       <div class="footer">
//           <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
//       </div>
//   </div>
//   </div>
 
// )       
  





   
 // }
//  export const database = getDatabase(app);

 // export default Signup;

// NEW CODE START FROM HERE
const Signup = () => {

    // const [action , setAction ]= useState(" ");
    const [user , setUser] = useState({
         name:"" ,
         email: "",
         password: "",
    });

    let name , value ;
    const getUserData = (event) =>{
      name= event.target.name ;
       value= event.target.value;
       console.log(name,value);
    // ({ name, value } = event.target);
    setUser({...user,[name]:value});
    
    };
const postData =async (e) =>{

    e.preventDefault();
    const {name , email , password}=user;
    if( (name && email && password)){
        const res=await fetch("https://trvl-react-default-rtdb.firebaseio.com/ReactTRVL.json",{
            method: "POST",
            headers: {
               "Content-Type" :"application/json",
            },
            body:JSON.stringify (
                {
                 name,
                 email,
                 password,
                }),
        }
        
        );
    
        if(res){
            setUser({
             name:"" ,
             email: "",
             password: "",
            });
            alert("Data Stored  Sucessfully");
        }

    } else{
         alert("Please fill all the data");
    }
   

   

    // setAction("Sign Up");

};
    return(
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {/* {action} */}
                    Sign Up
                </div>
                <div className='underline'>     
                </div>
                <div className='inputs' method="POST">
                    {/* {action === "Login"?<div></div>:  */}
                    <div className='input'>
                        <img src={person} alt=''></img>
                        <input type='text' placeholder="Name" name="name" value={user.name} onChange={getUserData} 
                        required ></input>
                    </div>
                    {/* <div className='input'>
                        <img src={person} alt=''></img>
                        <input type='text' placeholder="Name"></input>
                    </div> */}
                    <div className='input'>
                        <img src={email} alt=''></img>
                        <input type='email' placeholder="Email Id" name="email" value={user.email} onChange={getUserData}></input>
                    </div>
                    <div className='input'>
                        <img src={password} alt=''></img>
                        <input type='password' placeholder="Password" name="password" value={user.password} onChange={getUserData}></input>
                    </div>
                </div>
                {/* {action === "Sign Up" ? <div></div>:  */}
                <div className='forgot-password'>
                    Lost Password ? <span> Click Here !</span></div>
                {/* <div className='forgot-password'>
                    Lost Password ? <span> Click Here !</span></div> */}
                <div className='submit-container'>
                    <div className='submit' onClick ={postData}> Sign up</div>
                    {/* <div className={action === "Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login </div> */}
                </div>
            </div>

        </div>
    )

}

export default Signup;


