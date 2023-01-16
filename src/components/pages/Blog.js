import React from "react";
import DataBlog from "../../data/DataBlog";
import "./../../App.css";

export default function Blog() {
  return (
    <div className="Blog-Container">
      {DataBlog.map(({ src, judul, deskripsi, link, tgl, kategori }, id) => (
        <a href={link} className="Link">
          <div key={id} className="Card-Blog">
            <img
              src={require(`../../image/${src}`)}
              alt={src}
              className="Img-Blog"
            />
            <div className="Text">
              <div className="Kategori-Container">
                <p className="Kategori">{kategori}</p>
                <p> | </p>
                <p className="Tgl">{tgl}</p>
              </div>
              <h1 className="Judul">{judul}</h1>
              <p className="Isi">{deskripsi}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
