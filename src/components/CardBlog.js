import React from "react";

export default function CardBlog(props) {
  return (
    <a href={props.link} className="Link">
      <div key={props.id} className="Blog-Card">
        <img src={props.src} alt="Portfolio-Img" className="Blog-Img" />
        <div className="Text-Blog">
          <div className="Header">
            <p className="Kategori-Blog">{props.kategori}</p>
            <p> | </p>
            <p className="Tgl-Blog">{props.tgl}</p>
          </div>
          <h1 className="Judul-Blog">{props.judul}</h1>
          <p className="Deskripsi-Blog">{props.deskripsi}</p>
        </div>
      </div>
    </a>
  );
}
