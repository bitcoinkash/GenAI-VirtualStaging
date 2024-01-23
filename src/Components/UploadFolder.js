import React from "react";
import UploadPic from "./../UploadPic.json";
import Lottie from "lottie-react";
import "./../css/UploadFolder.css";
import { useNavigate } from "react-router-dom";

const UploadFolder = () => {
  const navvv = useNavigate();

  function bett(e) {
    const fileSelected = e.target.files[0];
    const src = URL.createObjectURL(fileSelected);

    if (src !== null) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        localStorage.setItem("fileSelected", reader.result);
        navvv("/popup");
      });

      if (fileSelected) {
        reader.readAsDataURL(fileSelected);
      }
    }
  }
  return (
    <div className="lottie_folder">
      <div>
        <div className="upload_wrapper">
          <Lottie className="lotti" loop={true} animationData={UploadPic} />
          <h6 data-text="empty room" className="h_5a">
            Upload image of an{" "}
          </h6>

          <input type="file" name="photo" id="file" onChange={(e) => bett(e)} />
        </div>
      </div>
    </div>
  );
};

export default UploadFolder;
