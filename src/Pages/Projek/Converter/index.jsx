import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

const Converter = () => {
  const navigate = useNavigate();

  const converterList = [
    { path: "mata-uang", name: "Mata Uang" },
    { path: "panjang", name: "Panjang" },
    { path: "massa", name: "Massa" },
    { path: "area", name: "Area" },
    { path: "waktu", name: "Waktu" },
    { path: "data", name: "Data" },
    { path: "diskon", name: "Diskon" },
    { path: "volume", name: "Volume" },
    { path: "sistem-angka", name: "Sistem Angka" },
    { path: "kecepatan", name: "Kecepatan" },
    { path: "suhu", name: "Suhu" },
    { path: "IMT", name: "IMT" },
  ];
  return (
    <>
      <section className="flex flex-wrap justify-center [&_button]:size-30 gap-3 p-2">
        {converterList.map(({ path, name }, index) => {
          return (
            <button
              key={index}
              onClick={() => navigate(path)}
              className="cursor-pointer px-3 py-10 border rounded-2xl"
            >
              {name}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Converter;
