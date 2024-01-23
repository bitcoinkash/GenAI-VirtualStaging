import React from "react";
import NavBar from "./NavBar";
//import loginBck from "./../images/loginBck.png";
import { Link } from "react-router-dom";
import googl from "./../images/googl.png";
import facebook from "./../images/facebook.png";
import twit from "./../images/twit.png";
import UserLogin1 from "./../images/UserLogin1.png";
import "./../css/Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {app} from './../Firebase';
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);

function LoginPage() {

  const navi=useNavigate();




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  // const [emailError, setEmailError] = useState("");
  // const [passError, setPassError] = useState("");

  const SigninUser = (event) => {

      event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)

    .then((value) => {
      navi("/mainpage");
      //localStorage.setItem("user", "true");
    })
    
    .catch((data) => {
      setResult(data.message);
      localStorage.setItem("user", "false");
    });

};

  

  return (

    <div>

      <NavBar />

      <div className="main_div">

        <div className="snd_div" >


          <div className="ist">


            <h2 className="para_1">Welcome&nbsp;<h2 className="ui">Back!</h2></h2>

            <p className="para_2">   To keep connected with us please login with your Personal information and Pick up where you left off</p>


          </div>

          <img className="img" src={UserLogin1} alt="not loaded" />

        </div>


        <div className="third_divv">


          <div className="third_div1">

            <h2 className="head_1">Sign</h2> &nbsp;&nbsp;

            <h2 className="head_2">In</h2>

          </div>

          <p className="login_para">Enter Details to Sign In</p>

          <div className="form">


            <form onSubmit={SigninUser} >


              <div className="inputuu">
                <i id="icon" class="fa-solid fa-user fa-fade"></i>
                <input className="input_1"
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Invalid email address"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              {/* 
              {(emailError.length > 0) ? (
                <small id="smalll">{emailError}</small>
              ) : (<></>)} */}

              <div className="input_">
                <i id="icon" class="fa-solid fa-lock fa-fade"></i>

                <input className="input_1"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"


                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />


              </div>

              {/* 
              {(passError.length > 0) ? (
                <small id="smalll">{passError}</small>
              ) : (<></>)} */}

              <p className="forget">Forgot Password?</p>

              <button className="btnloggg" type="submit" value="Login"> Login </button>

            </form>


          </div>




          <p className="continue">or Continue with</p>



          <div className="gfa">


            <img className="google" src={googl} alt="not loaded" />
            <img className="facebook" src={facebook} alt="not loaded" />
            <img className="twit" src={twit} alt="not loaded" />


          </div>


          <div className="account">

            <p className="dont">Don't Have an Account ?</p>
            <Link className="lin" to="/signup"> <p className="register"> &nbsp; Register</p></Link>
          </div>

           <p className="plo">{result}</p> 

          {/* <Alert color="danger">
{result}
</Alert>  */}




        </div>


      </div>

    </div>

  )

}




export default LoginPage;