
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import CreatePag from "./../images/CreatePag.png";
import "./../css/CreatePage.css";
//import { app } from './../Firebase'
//import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
//import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { ClimbingBoxLoader } from "react-spinners";







//const auth = getAuth(app);

function SignupPage() {

  // const navigate = useNavigate()



  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [conf, setConf] = useState("");
  const [confError, setConfError] = useState("");

  //const [load, setLoading] = useState(false);
  const [showLoader,setShowLoader]=useState(false);


  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6000)

  // }, [])



  const signupUser = (event) => {

    event.preventDefault();
    setConfError("");
    setShowLoader(true)
    if (password !== conf) {
      setConfError("password dont match");
      

    }
  //   else {
    
  //     createUserWithEmailAndPassword(auth, email, password).then((response) => {
  //       alert("created sucessfully");

  //       // navigate("/");
  //       console.log(response);
  //     });
  //   };
  //   console.log(loading);
  // }
  console.log(showLoader)
  }




  return (


    <div>

      <NavBar />

      <div className="main_div">



        <div className="snd_div">
          <div className="istt">
            <h2 className="para_11">
              Join&nbsp;<span className="piu">Us</span>&nbsp;Today!
            </h2>
            <p className="para_22">
              {" "}
              A room with a view, where every window frames a different facet of the extraordinary
            </p>
          </div>

          <img className="img1" src={CreatePag} alt="not loaded" />
        </div>

        <div className="third_div">
          <div className="third_div1">
            <h2 className="head_1">Sign</h2> &nbsp;&nbsp;
            <h2 className="head_2">Up</h2>
          </div>

          <p className="login_para">Add Your Details to Sign Up</p>

          <div className="formm">

            <form onSubmit={signupUser} >

              <div className="inputop">
                <i id="icons" className="fa-solid fa-user fa-fade"></i>
                <input className="input_1" type="text" placeholder="Name" value={name}
                  pattern="[a-zA-Z0-9]+" minlength="4" maxlength="10"
                  required
                  onChange={(e) => {

                    setName(e.target.value)

                  }}
                />
              </div>
              {/* 
            {(nameError.length > 0) ? (
              <small  id="rt">{nameError}</small>
            ) : (<></>)} */}

              <div className="cinput_">
                <i id="icons" className="fa-solid fa-envelope fa-fade"></i>
                <input
                  className="input_1"
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Invalid email address"

                  onChange={(e) => {

                    setEmail(e.target.value)

                  }}


                />
              </div>
              {/* 
            {(emailError.length > 0) ? (
              <small id="rt">{emailError}</small>
            ) : (<></>)} */}


              <div className="cinput_">
                <i id="icons" className="fa-solid fa-lock fa-fade"></i>
                <input
                  className="input_1"
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"

                  onChange={(e) => {


                    setPassword(e.target.value)

                  }}
                />
              </div>
              {/* 
            {(passError.length > 0) ? (
              <small  id="rt">{passError}</small>
            ) : (<></>)} */}

              <div className="cinput_">
                <i id="icons" className="fa-solid fa-lock fa-fade"></i>
                <input
                  className="input_1"
                  type="password"
                  placeholder="Confirm Password"
                  value={conf}
                  required

                  onChange={(e) => {

                    setConf(e.target.value)

                  }}

                />

              </div>
              {(confError.length > 0) ? (<small>{confError}</small>) : (<></>)}
              {/* 
            {(confError.length > 0) ? (
              <small  id="rt">{confError}</small>
            ) : (<></>)} */}

              <button
                className="btnlogg"
                type="submit"
                value="Sign Up"
              >Sign Up</button>
            </form>


          </div>

          <div className="gfa"></div>

          <div className="accountt">
            <p className="dontt">Already Have an Account? ?</p>
            <Link className="linnn" to="/login">
              {" "}
              <p className="logg"> &nbsp; Login</p>
            </Link>
          </div>
        </div>






      </div>




      {showLoader ? (<ClimbingBoxLoader color="#36d7b7"
        size={30}
        loading={showLoader}
      />

      ) : (<></>)}




    </div>



  );
}

export default SignupPage;