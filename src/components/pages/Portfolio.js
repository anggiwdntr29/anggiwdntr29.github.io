import React from "react";
import DataPortfolio from "../../data/DataPortfolio";
import "./../../App.css";
export default function Portfolio() {
  return (
    <div className="Portfolio-Container">
      {DataPortfolio.map(({ src, judul, kategori, deskripsi, link }, id) => (
        <a href={link} className="Link" target="_blank" rel="noreferrer">
          <div key={id} className="Card-Porto">
            <img
              src={require(`../../image/${src}`)}
              alt="Portfolio-Img"
              className="Portfolio-Img"
            />
            <div className="Text-Portfolio">
              <h1 className="Judul-Portfolio">{judul}</h1>
              <h3 className="Kategori-Portfolio">{kategori}</h3>
              <p className="deskripsi-Portfolio">{deskripsi}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
