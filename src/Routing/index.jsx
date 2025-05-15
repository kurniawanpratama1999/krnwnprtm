import { createBrowserRouter } from "react-router";

import TataLetak from "../Components/TataLetak";
import Tentang from "../Pages/Tentang";
import Beranda from "../Pages/Beranda";
import Pengalaman from "../Pages/Pengalaman";
import Pendidikan from "../Pages/Pendidikan";
import Projek from "../Pages/Projek";
import Kalkulator from "../Pages/Projek/Kalkulator";
import Converter from "../Pages/Projek/Converter";
import MataUang from "../Pages/Projek/Converter/MataUang";

const Routing = [
  {
    path: "/",
    element: <TataLetak />,
    children: [
      { path: "beranda", element: <Beranda /> },
      { path: "tentang", element: <Tentang /> },
      { path: "pengalaman", element: <Pengalaman /> },
      { path: "pendidikan", element: <Pendidikan /> },
      {
        path: "projek",
        element: <Projek />,
        children: [
          { path: "kalkulator", element: <Kalkulator /> },
          { path: "konverter", element: <Converter /> },
          { path: "konverter/mata-uang", element: <MataUang /> },
        ],
      },
      { path: "kontak", element: <Beranda /> },
    ],
  },
  ,
];

const router = createBrowserRouter(Routing);

export default router;
