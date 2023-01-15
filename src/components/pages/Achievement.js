import React from "react";
import DataAchi from "../../data/DataAchi";
import CardAchi from "../CardAchi";
import "./css/Achievement.css";

export default function Portfolio() {
  return (
    <div className="Achievement-Container">
      {DataAchi.map((DataAchi) => (
        <CardAchi
          key={DataAchi.id}
          src={DataAchi.src}
          judul={DataAchi.judul}
          kategori={DataAchi.kategori}
          deskripsi={DataAchi.deskripsi}
          tgl={DataAchi.tgl}
          icon={DataAchi.icon}
        />
      ))}
    </div>
  );
}
