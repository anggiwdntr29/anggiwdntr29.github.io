import React from "react";

export default function CardPorto(props) {
  return (
    <a href={props.link} className="Link" target="_blank" rel="noreferrer">
      <div key={props.id} className="Card-Porto">
        <img src={props.src} alt="Portfolio-Img" className="Portfolio-Img" />
        <div className="Text-Portfolio">
          <h1 className="Judul-Portfolio">{props.judul}</h1>
          <h3 className="Kategori-Portfolio">{props.kategori}</h3>
          <p className="deskripsi-Portfolio">{props.deskripsi}</p>
        </div>
      </div>
    </a>
  );
}
