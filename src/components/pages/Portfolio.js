import React from "react";
import DataPortfolio from "../../data/DataPortfolio";
import "./../../App.css";
export default function Portfolio() {
  return (
    <div className="Container-Portfolio">
      {DataPortfolio.map(
        ({ src, judul, kategori1, kategori2, deskripsi, link }, id) => (
          <a
            key={id}
            href={link}
            className="Link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Card-Portfolio">
              <img
                src={require(`../../image/${src}`)}
                alt={src}
                className="Img-Portfolio"
              />
              <div className="Text">
                <h1 className="Judul">{judul}</h1>
                <p className="Isi">{deskripsi}</p>
                <div className="Kategori-Container">
                  <p>{kategori1}</p>
                  <p>{kategori2}</p>
                </div>
              </div>
            </div>
          </a>
        )
      )}
    </div>
  );
}
