import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import googl from "./../images/googl.png";
import facebook from "./../images/facebook.png";
import twit from "./../images/twit.png";
import "./../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "./../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { HashLoader } from "react-spinners";
import Footer from "./../Components/Footer";
import Lottie from "lottie-react";
import LoginAnimation from "./../LoginAnimation.json";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const auth = getAuth(app);

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const SigninUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        if (value.user === undefined) {
          setShowLoader(false);
        } else {
          setShowLoader(true);
          setTimeout(() => {
            console.log("loggef");
            setShowLoader(false);
            navigate("/");
            console.log("hello");
          }, 2000);
        }
      })

      .catch((data) => {
        console.log(data.user);
        setResult("invalid Email or Password");
      });
  };

  return (
    <div>
      <NavBar />

      <div className="main_div">
        <div className="snd_div">
          <div className="ist">
            <h2 data-text="Back!" className="para_1">
              Welcome&nbsp; 
             
            </h2>
           

            <p className="para_2">
              {" "}
              To keep connected with us please login with your Personal
              information and Pick up where you left off
            </p>
          </div>
          <Lottie className="img" loop={true} animationData={LoginAnimation} />
        </div>

        <div className="third_divv">
          <div className="third_div1">
            <h2 className="head_1">Sign</h2> &nbsp;&nbsp;
            <h2 className="head_2">In</h2>
          </div>

          <p className="login_para">Enter Details to Sign In</p>

          <div className="form">
            <form onSubmit={SigninUser}>
              <div className="inputuu">
                <i id="icons" className="fa-solid fa-envelope fa-fade"></i>
                <input
                  className="input_19"
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Invalid email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="input_">
                <i id="icon" className="fa-solid fa-lock fa-fade"></i>

                <input
                  type={type}
                  className="input_19"
                  // type="password"
                  placeholder="Password"
                  required
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  autoComplete="current-password"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <span className="eye" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={22} />
                </span>
              </div>

              <p className="forget">Forgot Password?</p>

              <button className="btnloggg" type="submit" value="Login">
                {" "}
                Login{" "}
              </button>
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
            <Link className="lin" to="/signup">
              {" "}
              <p className="register"> &nbsp; Register</p>
            </Link>
          </div>

          <p className="plo">{result}</p>

          {/* <Alert color="danger">
{result}
</Alert>  */}
        </div>
      </div>

      {showLoader ? (
        <div  className="spinbg">
          <HashLoader color="#36d7b7" size={70} loading={showLoader} />{" "}
        </div>
      ) : (
        <></>
      )}

      <Footer />
    </div>
  );
}

export default LoginPage;
