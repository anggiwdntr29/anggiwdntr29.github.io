import React from "react";
import DataPencapaian from "../../data/DataPencapaian";
import "./../../App.css";

export default function Pencapaian() {
  return (
    <div className="Container-Achi">
      {DataPencapaian.map(({ src, judul, deskripsi, tgl, icon }, id) => (
        <div key={id} className="Card-Achi">
          <div className="Icon-Achi">
            <p>{icon}</p>
          </div>
          <img
            src={require(`../../image/${src}`)}
            alt={src}
            className="Img-Achi"
          />
          <div className="Text">
            <p className="Tgl">{tgl}</p>
            <h1 className="Judul">{judul}</h1>
            <p className="Isi">{deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
