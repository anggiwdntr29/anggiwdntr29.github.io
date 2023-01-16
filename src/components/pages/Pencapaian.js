import React from "react";
import DataPencapaian from "../../data/DataPencapaian";
import "./../../App.css";

export default function Pencapaian() {
  return (
    <div className="Achievement-Container">
      {DataPencapaian.map(
        ({ src, judul, kategori, deskripsi, tgl, icon }, id) => (
          <div key={id} className="Card-Achi">
            <div className="Icon">{icon}</div>
            <img
              src={require(`../../image/${src}`)}
              alt="Achi-Img"
              className="Achi-Img"
            />
            <div className="Text-Achi">
              <p className="Tgl-Achi">{[tgl]}</p>
              <h1 className="Judul-Achi">{judul}</h1>
              <p className="deskripsi-Achi">{deskripsi}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
