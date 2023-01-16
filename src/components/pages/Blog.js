import React from "react";
import DataBlog from "../../data/DataBlog";
import "./../../App.css";

export default function Blog() {
  return (
    <div className="Blog-Container">
      {DataBlog.map(({ src, judul, deskripsi, link, tgl, kategori }, id) => (
        <a href={link} className="Link">
          <div key={id} className="Blog-Card">
            <img
              src={require(`../../image/${src}`)}
              alt="Blog-Img"
              className="Blog-Img"
            />
            <div className="Text-Blog">
              <div className="Header">
                <p className="Kategori-Blog">{kategori}</p>
                <p> | </p>
                <p className="Tgl-Blog">{tgl}</p>
              </div>
              <h1 className="Judul-Blog">{judul}</h1>
              <p className="Deskripsi-Blog">{deskripsi}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
