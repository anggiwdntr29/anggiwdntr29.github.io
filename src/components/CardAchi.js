import React from "react";

export default function CardAchi(props) {
  return (
    <div key={props.id} className="Card-Achi">
      <div className="Icon">{props.icon}</div>
      <img src={props.src} alt="Achi-Img" className="Achi-Img" />
      <div className="Text-Achi">
        <p className="Tgl-Achi">{[props.tgl]}</p>
        <h1 className="Judul-Achi">{props.judul}</h1>
        <p className="deskripsi-Achi">{props.deskripsi}</p>
      </div>
    </div>
  );
}
