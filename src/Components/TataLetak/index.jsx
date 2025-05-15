import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useOutlet } from "react-router";

const daftarMenu = [
  "beranda",
  "projek",
  "pengalaman",
  "pendidikan",
  "tentang",
  "kontak",
];

const ElementDaftarMenu = ({ useSaklarMenu }) => {
  const { setSaklarMenu, saklarMenu } = useSaklarMenu;
  return daftarMenu.map((menuItem, menuIndex) => (
    <li key={menuIndex}>
      <NavLink
        to={`/${menuItem}`}
        onClick={() => setSaklarMenu(!saklarMenu)}
        className="w-full h-full capitalize block py-3 hover:bg-amber-300 transition cursor-pointer border-b-1 border-white"
      >
        {menuItem}
      </NavLink>
    </li>
  ));
};

const TataLetak = () => {
  const bagianHalaman = useOutlet();
  const lokasi = useLocation();
  const navigasi = useNavigate();

  const [saklarMenu, setSaklarMenu] = useState(false);

  useEffect(() => {
    const namaLokasi = lokasi.pathname;
    if (namaLokasi.toString().trim() === "/") return navigasi("/beranda");
  }, [lokasi]);
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-amber-300 flex justify-between items-center py-2 h-14">
        <p className="text-2xl font-extrabold pl-3">Kurniawan Pratama.</p>
        <button
          className="font-extrabold px-3 cursor-pointer"
          onClick={() => setSaklarMenu(!saklarMenu)}
        >
          Menu
        </button>
        <ul
          className={`top-14 absolute flex-col text-center bg-amber-200 w-full gap-1 transition ${
            saklarMenu ? "flex" : "hidden"
          }`}
        >
          <ElementDaftarMenu useSaklarMenu={{ setSaklarMenu, saklarMenu }} />
        </ul>
      </header>

      <main className="w-full bg-transparent min-h-[calc(100vh-3.5rem)]">
        {bagianHalaman}
      </main>

      <footer>
        <p className="text-sm text-center py-2">Copyright 2025</p>
      </footer>
    </>
  );
};

export default TataLetak;
