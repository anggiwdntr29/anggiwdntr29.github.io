import React from "react";
import Image from "./../image/Profile.JPG";
import "./../App.css";

function Profile() {
  return (
    <div className="Container-Profile">
      <div className="Nama">
        <h1>Anggi Widiantara</h1>
      </div>
      <div className="Profile">
        <div className="Img-Container">
          <img className="Profile-Img" src={Image} alt="" />
        </div>
        <div className="Social">
          <a
            className="Social-Icon"
            href="https://github.com/anggiwdntr29"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a
            className="Social-Icon"
            href="https://www.instagram.com/anggiwdntr_/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="Social-Icon" href="/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="Social-Icon" href="/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="Deskripsi">
        <p>
          Mahasiswa{" "}
          <a href="https://undiksha.ac.id/" target="_blank" rel="noreferrer">
            Undiksha
          </a>
          , Prodi{" "}
          <a href="https://is.undiksha.ac.id/" target="_blank" rel="noreferrer">
            Sistem Informasi
          </a>{" "}
          Semester 5. Tertarik dibidang Front End Eginer. Hobi bermain Game.
        </p>
      </div>
    </div>
  );
}
export default Profile;
