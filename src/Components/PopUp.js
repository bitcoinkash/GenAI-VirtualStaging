import React, { useEffect } from "react";
import { useState } from "react";
import "./../css/UploadFolder.css";
import Select from "react-select";
import { Link } from "react-router-dom";
import furni from "./../images/furni.jpg";
import { motion } from "framer-motion";

const customStyle = {
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    color: "rgb(46,125,56)",
  }),
};

const options = [
  { value: "Bedroom", label: "Bedroom" },
  { value: "Living room", label: "Living room" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "Bathroom", label: "Bathroom" },
  { value: "Home office", label: "Home office" },
  { value: "Dining room", label: "Dining room" },
];

const optionss = [
  { value: "Standard", label: "Standard" },
  { value: "Modern", label: "Modern room" },
  { value: "Industrial", label: "Industrial" },
  { value: "Luxury", label: "Luxury" },
  { value: "Mid centuary", label: "Mid centuary office" },
];

const PopUs = () => {
  const [imgg, setImg] = useState(null);
  const [checked, setChecked] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const imgo = localStorage.getItem("fileSelected");

    if (imgo !== null && imgo !== undefined) {
      setImg(imgo);
      //localStorage.setItem('fileSelected',null)
    }
  }, []);

  const pushpop = (e) => {
    setChecked(!checked);
  };
  return (
    <div className="popup" style={{ backgroundImage: `url(${furni})` }}>
      <motion.div
        className="display_div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 class="text-4xl  font-bold text-black ml-3 ">Your Photo</h1>
        <Link to="/" id="crossLink">
          {" "}
          <i
            class="fa-solid fa-xmark fa-2xl"
            style={{ color: "#2e7d38" }}
          ></i>{" "}
        </Link>

        <img
          class="w-5/6 h-60 sm:w-3/5  sm:h-1/5 m-auto rounded-lg"
          src={imgg}
          alt="iamge"
        />

        <div className="display">
          <i
            id="plu"
            class="fa-solid fa-plus fa-xl"
            style={{ color: "#2e7d38" }}
          ></i>
          <p class="text-xl font-bold font-sans text-black ">Add Furniture</p>
          <input
            class="bg-green"
            type="checkbox"
            onChange={(e) => pushpop(e)}
          />
        </div>

        {checked ? (
          <p class="font-semibold font-sans text-base  text-center sm:ml-5  text-gray">
            Turning an empty room into a harmonious masterpiece
          </p>
        ) : (
          <div>
            <div className="justoption">
              {" "}
              <div className="display_1">
                <div className="display_1a">
                  <i
                    class="fa-solid fa-house fa-xl"
                    style={{ color: "#2e7d38" }}
                  ></i>
                  <p class="font-semibold font-sans text-black ">Room Type</p>
                </div>

                <div class="w-full   ">
                  <Select
                    menuPlacement="top"
                    minMenuHeight={300}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                    openMenuOnFocus
                    styles={customStyle}
                  />
                </div>
              </div>
              <div className="display_1">
                <div className="display_1a">
                  <i
                    class="fa-solid fa-palette fa-xl"
                    style={{ color: "#2e7d38" }}
                  ></i>
                  <p class="font-semibold font-sans">Furniture Style</p>
                </div>

                <div class="w-full ">
                  <Select
                    minMenuHeight={300}
                    menuPlacement="top"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={optionss}
                    isMulti
                    openMenuOnFocus
                    styles={customStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Link class="process">
          <button class=" w-11/12 h-9 sm:w-11/12 bg-green text-white text-base font-semibold rounded-lg font-sans ">
            Process Photo
          </button>
        </Link>

        {/* here we have to use an API process after process the photo */}

        {/* after process is done route to the main page again and display the pic uploaded and there result images */}

        <Link
          to="/"
          class=" text-white text-base font-semibold rounded-lg font-sans"
        >
          <div className="upload_wrapperr">Try Another</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default PopUs;
