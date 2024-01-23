import React from "react";
import { Link } from "react-router-dom";
import './../css/Footer.css'
function Footer(){

return(

 
    <footer>
    <div className="footer1">
      <div className="footer_11">
        {" "}
        <h4 data-text="AI" className="tsts1">
          {" "}
          OuiFoto{" "}
        </h4>
      </div>

      <div className="footer_21">
        <div className="footer_content1">
          <p className="Links_1"> Quick Links </p>
          <Link className="link_content1">Home</Link>
          <Link className="link_content">Gallery</Link>
          <Link className="link_content">Prices</Link>
          <Link className="link_content">Login</Link>
          <Link className="link_content">About</Link>
          <Link className="link_content">Career</Link>
        </div>

        <div className="footer_content">
          <p className="Links_">Terms & Conditions</p>
          <Link className="link_content">Terms of Use</Link>
          <Link className="link_content">Refund Policy</Link>
          <Link className="link_content">Privacy Policy</Link>
          <Link className="link_content">Cookie Policy</Link>
        </div>

        <div className="footer_content">
          <p className="Links_"> Blog </p>
          <Link className="link_content">How OutFio Works</Link>
          <Link className="link_content">Pricing</Link>
          <Link className="link_content">BoxBrownie Competitors</Link>
          <Link className="link_content">Interior AI alternative</Link>
        </div>

        <div className="footer_content">
          <p className="Links_"> Contact</p>
          <Link className="link_content">info@virtualstagingai.app</Link>
          <p className="Links_">Works With Us </p>
          <Link className="link_content">Affilate Programes</Link>
          <Link className="link_content">Whitelabel Program</Link>
          <Link className="link_content">API Access</Link>
        </div>

        <div className="footer_content">
          <p className="Links_">Mailing Address</p>
          <Link className="link_content">
            OutFio AI Inc 2810 N Church,
            <br /> St Wilmington, DE 19802
          </Link>
        </div>
      </div>
    </div>
  </footer>


);


}

export default Footer;