import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { useLocation } from "react-router";

const Projek = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [subProject, setSubProject] = useState(false);

  useEffect(() => {
    console.log(pathname);
    if (pathname !== "/projek" && pathname !== "/projek/") {
      setSubProject(true);
    }
  }, [pathname]);
  return subProject ? (
    <>
      <section className="flex justify-center items-center gap-5 py-3">
        <button
          onClick={() => navigate("/projek/kalkulator")}
          className="basis-2/6 py-2 px-3 bg-stone-300 border rounded-xl cursor-pointer"
        >
          Kalkulator
        </button>
        <button
          onClick={() => navigate("/projek/konverter")}
          className="basis-2/6 py-2 px-3 bg-stone-300 border rounded-xl cursor-pointer"
        >
          Konverter
        </button>
      </section>
      <Outlet />
    </>
  ) : (
    <>
      <section className="px-3">
        <h3 className="h-26 flex justify-center items-center text-2xl font-bold">
          Programming Project
        </h3>
        <article className="bg-white p-3 rounded-2xl grid grid-cols-[auto_1fr_auto]">
          <div className="border row-span-2 col-start-1 size-16 mr-2"></div>
          <h4 className="col-start-2 row-start-1 self-end font-medium">
            Kalkulator
          </h4>
          <h5 className="col-start-2 row-start-2 text-sm italic text-stone-500">
            ReactJs + Tailwind
          </h5>
          <h6 className="col-start-3 row-span-2 self-end text-sm italic text-stone-500">
            01 April 2025
          </h6>
          <p className="col-start-1 col-end-4 row-start-4 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            modi nisi voluptatem soluta rem quis non obcaecati laborum itaque
            eveniet, culpa doloremque, recusandae rerum earum explicabo
            architecto quos nesciunt qui.
          </p>
        </article>
      </section>
    </>
  );
};

export default Projek;
