import React from "react";
import DataPortfolio from "../../data/DataPortfolio";
import CardPorto from "../CardPorto";
import "./css/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio-Container">
      {DataPortfolio.map((DataPortfolio) => (
        <CardPorto
          key={DataPortfolio.id}
          src={DataPortfolio.src}
          judul={DataPortfolio.judul}
          kategori={DataPortfolio.kategori}
          deskripsi={DataPortfolio.deskripsi}
          link={DataPortfolio.link}
        />
      ))}
    </div>
  );
}
