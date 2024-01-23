import React, { useEffect } from "react";
//import { useState } from "react";
import NavBar from "./NavBar";
import "./../css/Home.css";
import OnePic from "./../images/OnePic.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import before1 from "./../images/before1.png";
import after1 from "./../images/after1.png";
import before2 from "./../images/before2.png";
import after2 from "./../images/after2.png";
import before3 from "./../images/before3.png";
import after3 from "./../images/after3.png";
import before4 from "./../images/before4.png";
import after4 from "./../images/after4.png";

//import PopUp from "./PopUp";
import "./../css/collapsible.css";
import UploadFolder from "./UploadFolder";

const fadeImages = [
  {
    url: "https://cdn-icons-png.flaticon.com/512/194/194935.png",
    name: "Hamid",
    address: "Texas, Us",
    caption:
      "I highly recommend the virtual home staging service that I recently used to furnish a rental property. The website made it easy to digitally stage the space at a fraction of the cost of traditional home staging services",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    name: "Hidayat",
    address: "Vienna, AT",
    caption: "Phenomenal and easy to use!",
  },

  {
    url: "https://cdn-icons-png.flaticon.com/512/194/194936.png",
    name: "Tabia",
    address: "Iran",
    caption:
      "The website made it easy to digitally stage the space at a fraction of the cost of traditional home staging services, which can cost upwards of $1500 and takes 1-2 weeks to complete. The final result, which i got within minutes, exceeded my expectations and was better",
  },
];

const buttonVariants = {
  hover: {
    scale: [1, 0.9, 1, 0.9, 1],
    transition: {
      duration: 0.9,
    },
  },

  hov: {
    color: "rgb(46, 125, 50, 255)",
  },
};

function HomePage({ summary, children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container_1">
        <div className="upper_div">
          <div className="upper_div1">
            <div className="upper_1">
              <h1 data-text="with one click" className="h_1">
                {" "}
                OuiFoto{" "}
              </h1>
              <h5 className="h_5">
                Upload a picture and our AI will add furniture within seconds
              </h5>
            </div>

            <motion.img className="img__1" src={OnePic} alt="not loaded" />
          </div>

          <UploadFolder />

          <h1 className="result">Results</h1>

          <div className="result_slider">
            <Slide
              id="tyy"
              slidesToScroll={2}
              slidesToShow={2}
              indicators={true}
            >
              <div className="result_diver">
                <img className="result_images" src={before1} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={after1} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={before2} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={after2} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={before3} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={after3} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={before4} alt="error" />
              </div>
              <div className="result_diver">
                <img className="result_images" src={after4} alt="error" />
              </div>
            </Slide>
          </div>

          <hr className="line" />

          <div className="choose_box">
            <h1 className="choose">Why choose us?</h1>
            <h5 data-text="to your needs" className="choose_line">
              {" "}
              is dedicated to exceeding your expectations, providing innovative
              solutions tailored{" "}
            </h5>
          </div>

          <div
            className="choosing_options"
            data-aos="zoom-in"
            data-aos-easing="linear"
          >
            <div className="choosing_options1">
              <motion.div
                className="choosing_part1"
                whileHover={{
                  scale: 0.9,
                  originX: 0,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h5
                  variants={buttonVariants}
                  whileHover="hov"
                  className="upper_line"
                >
                  Lowest price
                </motion.h5>
                <h5 className="bottom_line">
                  Starting at only $12/month you can virtually stage 6 images.
                  That’s cheaper than what most agencies charge for a single
                  image.
                </h5>
              </motion.div>

              <motion.div
                className="choosing_part1"
                whileHover={{
                  scale: 0.9,
                  originX: 0,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h5
                  variants={buttonVariants}
                  whileHover="hov"
                  className="upper_line"
                >
                  No effort
                </motion.h5>

                <h5 className="bottom_line">
                  No need to write detailed instructions for designers anymore.
                  Just upload your pictures, choose room type and style and the
                  AI automatically adds beautiful furniture.
                </h5>
              </motion.div>
            </div>

            <div className="choosing_options1">
              <motion.div
                className="choosing_part"
                whileHover={{
                  scale: 0.9,
                  originX: 0,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h5
                  variants={buttonVariants}
                  whileHover="hov"
                  className="upper_line"
                >
                  Fastest turnaround
                </motion.h5>

                <h5 className="bottom_line">
                  Thanks to our advanced artificial intelligence you get your
                  virtually staged pictures within 10 seconds. No more waiting
                  for designers.
                </h5>
              </motion.div>

              <motion.div
                className="choosing_part"
                whileHover={{
                  scale: 0.9,
                  originX: 0,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h5
                  variants={buttonVariants}
                  whileHover="hov"
                  className="upper_line"
                >
                  Unlimited revisions
                </motion.h5>

                <h5 className="bottom_line">
                  Had something different in mind? Instead of having to go back
                  and forth with a designer, get more designs within seconds.
                </h5>
              </motion.div>
            </div>
          </div>

          <Link to="/login" className="link1">
            {" "}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btun"
            >
              Try now for free &nbsp;<i className="fa-solid fa-arrow-right"></i>{" "}
            </motion.button>{" "}
          </Link>

          <div
            className="works_div"
            data-aos="zoom-in-up"
            data-aos-duration="1300"
          >
            <h1 className="works_line">How it works</h1>
            <div className="topic">
              <h5 className="topic1">1 &nbsp; Upload your picture</h5>
              <div className="flexx">
                {" "}
                <div className="vertical"></div>
                <h5 className="topic1a">
                  Upload a picture of an empty room and choose the room type and
                  style. We currently support staging living rooms, bedrooms,
                  kitchens, dining rooms, home offices, and closets.
                </h5>
              </div>
            </div>{" "}
            <br />
            <div className="topic">
              <h5 className="topic1">2 &nbsp; AI Magic</h5>
              <div className="flexx">
                {" "}
                <div className="vertical"></div>
                <h5 className="topic1a">
                  Within 10 seconds our artificial intelligence processes the
                  image to understand its size and style and adds beautiful,
                  realistic-looking furniture.
                </h5>
              </div>
            </div>
            <br />
            <div className="topic">
              <h5 className="topic1">3 &nbsp; Download and use far</h5>
              <div className="flexx">
                {" "}
                <h5 className="topic1a">
                  {" "}
                  &nbsp; &nbsp;Once the processing is completed you instantly
                  get your staged photo. You can use your pictures &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;anywhere you want for as long as
                  you want.
                </h5>
              </div>
            </div>
          </div>

          <h2 className="whyus">Why OutFio?</h2>

          <div className="choosewe">
            <div className="choosing_options11">
              <div
                className="choosing_part17"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <i
                  id="chance"
                  className="fa-solid fa-chart-line fa-xl"
                  style={{ color: "#2e7d38" }}
                ></i>
                <h5 className="upper_line">Increased buyer interest</h5>
                <h5 className="bottom_line">
                  OutFio has a positive impact on 83% of buyers
                </h5>
              </div>

              <div
                className="choosing_part17"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {" "}
                <i
                  id="chance"
                  className="fa-solid fa-hand-holding-dollar fa-xl"
                  style={{ color: "#2e7d38" }}
                ></i>
                <h5 className="upper_line">Get higher offers</h5>
                <h5 className="bottom_line">
                  Homes with OutFio sell on average for 25% more.
                </h5>
              </div>
            </div>

            <div className="choosing_options12">
              <div
                className="choosing_partt"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <i
                  id="chance"
                  className="fa-solid fa-meteor fa-xl"
                  style={{ color: "#2e7d38" }}
                ></i>
                <h5 className="upper_line">Sell faster</h5>

                <h5 className="bottom_line">
                  Staged homes sell 73% faster to non-staged counterparts
                </h5>
              </div>

              <div
                className="choosing_partt"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <i
                  id="chance"
                  className="fa-solid fa-hand-sparkles fa-xl"
                  style={{ color: "#2e7d38" }}
                ></i>
                <h5 className="upper_line">Stand out from the competition</h5>

                <h5 className="bottom_line">
                  Convince more homeowners by using the latest technology
                </h5>
              </div>
            </div>
          </div>

          <h1 className="choose_others">Why others are saying?</h1>
          <div id="slid" className="slide-container">
            <Fade>
              {fadeImages.map((slideImage, index) => (
                <div key={index}>
                  <div className="span_tyle">
                    <div
                      className="div_style"
                      style={{ backgroundImage: `url(${slideImage.url})` }}
                    ></div>
                    <div className="head-div">
                      <div className="naming">{slideImage.name}</div>
                      <div className="texts">{slideImage.address}</div>

                      <div className="textss">{slideImage.caption}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>

          <div className="star">
            <i
              id="ert"
              className="fa-solid fa-star fa-sm"
              style={{ color: " #ffea00" }}
            ></i>
            <i
              id="ert"
              className="fa-solid fa-star fa-sm"
              style={{ color: " #ffea00" }}
            ></i>
            <i
              id="ert"
              className="fa-solid fa-star fa-sm"
              style={{ color: " #ffea00" }}
            ></i>
            <i
              id="ert"
              className="fa-solid fa-star fa-sm"
              style={{ color: " #ffea00" }}
            ></i>
            <i
              id="ert"
              className="fa-solid fa-star-half-stroke fa-sm"
              style={{ color: "#ffea00" }}
            ></i>
            <p id="ert" className="star1">
              {" "}
              &nbsp; 4.95 out of 5 &nbsp;
            </p>
            <div className="vertical_star">&nbsp;</div>
            <i
              id="ert"
              className="fa-solid fa-star fa-sm"
              style={{ color: "#808080" }}
            ></i>
            <p className="star1"> &nbsp; Trustpilot</p>
          </div>

          {/* <img src={img} alt="error"/>                     */}

          <p className="questions">Frequently Asked Questions</p>

          <div className="details_div">
            <details data-aos="zoom-in">
              <summary>What is OutFio?</summary>
              <p>
                OutFio is a cost-effective method for real estate agents to make
                properties more appealing to potential buyers. Rather than using
                traditional home staging techniques, where furniture and decor
                is physically brought in and arranged, digital technology is
                used to add furniture, decor and other design elements to a
                room. This is done through the use of computer software and 3D
                rendering, creating a virtual representation of a fully
                furnished and decorated space.
              </p>
            </details>

            <details data-aos="zoom-in">
              <summary>Why should I pick OutFio over physical staging?</summary>
              <p>
                The advantages of OutFio when it comes to cost savings are quite
                clear. By eliminating the need to purchase furniture, hire
                decorators, move in decorations, and spend time decorating a
                house for staging, virtual staging can significantly reduce the
                costs when compared to traditional staging by up to 97%.
              </p>
            </details>

            <details data-aos="zoom-in">
              <summary>What is AI OutFio?</summary>
              <p>
                AI OutFio is when an artificial intelligence automatically adds
                furniture to a photo instead of a human designer. Through our
                proprietary machine learning models Virtual Staging AI can add
                beautiful, realistic looking furniture with natural lighting to
                any picture of a living or bedroom making AI virtual staging
                indistinguishable from human virtual staging or physical home
                staging.
              </p>
            </details>

            <details data-aos="zoom-in">
              <summary>What kind of photos do you support?</summary>
              <p>
                We currently support living rooms, bedrooms, dining rooms,
                kitchens, home offices and closets and are adding more room
                types in the coming weeks.
              </p>
            </details>

            <details data-aos="zoom-in" data-aos-duration="900">
              <summary>How big is your furniture library?</summary>
              <p>
                Our AI OutFio doesn't work with a predefined furniture library.
                It analyzes every room and based on the style and room types
                generates furniture that best matches the room. Therefore no two
                rooms will ever get the same furniture.
              </p>
            </details>

            <details data-aos="zoom-in" data-aos-duration="1000">
              <summary>
                I purchased a plan but can't access it. What should I do?
              </summary>
              <p>
                Please create an account with the same email as you used during
                checkout. If you don't get access to your plan after that,
                scroll down on the pricing page and click the button to restore
                your plan. If you still don't have your plan, reach out to us
                via chat or email (info@outfio.app).
              </p>
            </details>
          </div>

          <Link to="/login" className="link1">
            {" "}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btunn"
            >
              See Pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>{" "}
            </motion.button>{" "}
          </Link>
        </div>
      </div>

      <footer>
        <div className="footer">
          <div className="footer_1">
            {" "}
            <h4 data-text="AI" className="tsts">
              {" "}
              OuiFoto{" "}
            </h4>
          </div>

          <div className="footer_2">
            <div className="footer_content">
              <p className="Links_"> Quick Links </p>
              <Link className="link_content">Home</Link>
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

      {/* <div><a class="click-btn btn-style508" href="#">hover me</a></div>  */}
    </div>
  );
}

export default HomePage;
