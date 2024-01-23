import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./../css/CreatePage.css";
import { app } from "./../Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import CreateAnimation from "./../CreateAnimation.json";
import { HashLoader } from "react-spinners";
import Footer from "./Footer";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const auth = getAuth(app);
function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [conf, setConf] = useState("");
  const [confError, setConfError] = useState("");
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

  const signupUser = (event) => {
    event.preventDefault();
    setConfError("");
    setShowLoader(false);

    if (password !== conf) {
      setConfError("password dont match");
    } else {
      setShowLoader(true);
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        setTimeout(() => {
          setShowLoader(false);
          navigate("/login");
          console.log("hello");
        }, 4000);
      });
    }
  };

  return (
    <div>
      <div>
        <NavBar />

        <div className="di_v">
          <div className="snd_1">
            <div className="is_1">
              <h2 className="par_1">
                Join&nbsp;<span className="pi_1">Us</span>&nbsp;Today!
              </h2>
              <p className="pi_2">
                {" "}
                A room with a view, where every window frames a different facet
                of the extraordinary
              </p>
            </div>
            <Lottie
              className="im_1"
              loop={true}
              animationData={CreateAnimation}
            />
          </div>

          <div className="thir_1">
            <div className="thir_2">
              <h2 className="he_1">Sign</h2> &nbsp;&nbsp;
              <h2 className="he_2">Up</h2>
            </div>

            <p className="lo_1">Add Your Details to Sign Up</p>

            <div className="f_1">
              <form onSubmit={(e) => signupUser(e)}>
                <div className="inp__1">
                  <i id="icons" className="fa-solid fa-user fa-fade"></i>
                  <input
                    className="input_1"
                    type="text"
                    placeholder="Name"
                    value={name}
                    pattern="[a-zA-Z0-9]+"
                    // minlength="4"
                    // maxlength="10"
                    maxLength="10"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="inp__2">
                  <i id="icons" className="fa-solid fa-envelope fa-fade"></i>
                  <input
                    className="input_1"
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    title="Invalid email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="inp__2">
                  <i id="icons" className="fa-solid fa-lock fa-fade"></i>
                  <input
                    className="input_1"
                    type={type}
                    placeholder="Password"
                    value={password}
                    autoComplete="current-password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <span className="eye" onClick={handleToggle}>
                    <Icon className="absolute mr-10" icon={icon} size={22} />
                  </span>
                </div>

                <div className="inp__2">
                  <i id="icons" className="fa-solid fa-lock fa-fade"></i>
                  <input
                    className="input_1"
                    type={type}
                    placeholder="Confirm Password"
                    value={conf}
                    autoComplete="current-password"
                    required
                    onChange={(e) => {
                      setConf(e.target.value);
                    }}
                  />
                </div>
                {confError.length > 0 ? (
                  <small className="bacha">{confError}</small>
                ) : (
                  <></>
                )}

                <button className="b_1" type="submit" value="Sign Up">
                  Sign Up
                </button>
              </form>
            </div>

            <div className="accountt">
              <p className="dontt">Already Have an Account ?</p>
              <Link className="linnn" to="/login">
                {" "}
                <p className="logg"> &nbsp; Login</p>
              </Link>
            </div>
          </div>
        </div>

        {showLoader ? (
          <div className="spinbg">
            <HashLoader color="#36d7b7" size={70} loading={showLoader} />{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SignupPage;
