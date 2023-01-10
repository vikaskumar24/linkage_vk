import React from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import axios from 'axios';
import { history } from "react-router-dom";
import { Button } from "../ButtonElements";


const Signin = (e) => {
  axios.defaults.headers.common = {
    "Content-Type": "application/json"
  }
  
  const sendData=async(e)=>{
    console.log('okkk/...........')
    // const dd=await fetch("http://localhost:2000/signIn",{
    //   method:'GET',
    //   body: JSON.stringify({
    //     name: 'viakdu',
    //     email: 'frfrr',
    //     mobileNumber: '435454565',
    //   })

    // })
    // const d=await dd.json()
    
    axios({
      method: "get",
      url: "http://localhost:2000/signIn",
      data: JSON.stringify({
          name: 'viakdu',
          email: 'frfrr',
          mobileNumber: '435454565',
        }),
      headers: { "Content-Type": 'application/json',"Accept":"application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
   }
  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign In to your Account</h3>
          <form >
            <SigninP>Email</SigninP>
            <SigninInput type="text" placeholder="Enter your email..." />
            <SigninP>Password</SigninP>
            <SigninInput type="password" placeholder="Enter your password..." />
            <Button onClick={sendData} type='submit' className="mt-5 mb-3">Continue</Button>
          </form>
          <p className="center-align">
            Forgot your password? <a href="/">Reset here</a>
          </p>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
