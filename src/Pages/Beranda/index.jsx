const Beranda = () => {
  return (
    <>
      <section className="relative">
        <div className="sticky top-14 -z-[1] flex flex-col items-center justify-center h-36 font-extrabold text-5xl">
          <h2>ONLINE</h2>
          <h2>PORTOFOLIO</h2>
          <p className="text-sm font-light mt-1">( Siap Bekerja )</p>
        </div>
        <div className="min-h-[calc(100vh-3.5rem-8rem)] w-full rounded-t-2xl bg-white pt-5">
          <div className="border size-40 rounded-full mx-auto"></div>
          <p className="px-5 text-center pt-4 italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minus
            in illo aliquid hic dolor praesentium sapiente enim autem labore
            sint, velit minima, doloremque repellendus sit rerum laborum
            laboriosam debitis."
          </p>
          <article className="p-3 flex flex-col gap-5">
            <div className="border-b-1 pb-4 w-fit">
              <h3 className="text-xl mb-2 font-bold">Pengalaman</h3>
              <div className="flex gap-3">
                {[
                  { company: "Prima Freshmart", job: "Crew Store" },
                  { company: "Astro Technology", job: "Driver" },
                  { company: "SDIT Al-Hikmah", job: "School Operator" },
                ].map((val, index) => {
                  return (
                    <div key={index}>
                      <div className="border size-32 mb-1"></div>
                      <p className="text-xs">{val.company}</p>
                      <p className="text-xs">{val.job}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-b-1 pb-4 w-fit">
              <h3 className="text-xl mb-2 font-bold">Pendidikan</h3>
              <div className="flex gap-3">
                {[
                  { company: "Univ. Pamulang", job: "S1 Manejemen" },
                  { company: "SMKN 59 Jakarta", job: "Pemasaran" },
                ].map((val, index) => {
                  return (
                    <div key={index}>
                      <div className="border size-32 mb-1"></div>
                      <p className="text-xs">{val.company}</p>
                      <p className="text-xs">{val.job}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-b-1 pb-4 w-fit">
              <h3 className="text-xl mb-2 font-bold">Projek</h3>
              <div className="flex gap-3 overflow-auto">
                {[
                  { company: "ReactJs", job: "Kalkulator" },
                  { company: "ReactJs", job: "Todo List" },
                  { company: "ReactJs", job: "Landing Page" },
                ].map((val, index) => {
                  return (
                    <div key={index}>
                      <div className="border size-32 mb-1"></div>
                      <p className="text-xs">{val.company}</p>
                      <p className="text-xs">{val.job}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Beranda;
