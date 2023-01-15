import React from "react";
import DataBlog from "../../data/DataBlog";
import CardBlog from "../CardBlog";
import "./css/Blog.css";

export default function Portfolio() {
  return (
    <div className="Blog-Container">
      {DataBlog.map((DataBlog) => (
        <CardBlog
          key={DataBlog.id}
          src={DataBlog.src}
          judul={DataBlog.judul}
          deskripsi={DataBlog.deskripsi}
          link={DataBlog.link}
          tgl={DataBlog.tgl}
          kategori={DataBlog.kategori}
        />
      ))}
    </div>
  );
}
