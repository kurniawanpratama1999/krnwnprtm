const daftarPengalaman = [
  {
    logoPerusahaan: "Logo 1",
    perusahaan: "PT Primafood International",
    sebagai: "Crew Store",
    lamaKerja: "Feb 2025 -- Sekarang",
    detailPerusahaan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit beatae magnam sed voluptatibus aliquam nulla quo repellat asperiores at.",
    bukti: ["Foto 1", "Foto 2", "Foto 3"],
    jobdesk: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
    ],
  },
  {
    logoPerusahaan: "Logo 2",
    perusahaan: "Freelance Website",
    sebagai: "Frontend Developer",
    lamaKerja: "2022 -- Sekarang",
    detailPerusahaan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit beatae magnam sed voluptatibus aliquam nulla quo repellat asperiores at.",
    bukti: ["Foto 1", "Foto 2", "Foto 3"],
    jobdesk: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
    ],
  },
  {
    logoPerusahaan: "Logo 3",
    perusahaan: "PT Astro Technologies",
    sebagai: "Driver",
    lamaKerja: "Jan 2021 -- Feb 2022",
    detailPerusahaan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit beatae magnam sed voluptatibus aliquam nulla quo repellat asperiores at.",
    bukti: ["Foto 1", "Foto 2", "Foto 3"],
    jobdesk: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
    ],
  },
  {
    logoPerusahaan: "Logo 4",
    perusahaan: "SDIT Al-Hikmah Cilandak",
    sebagai: "School Operator/Administrator",
    lamaKerja: "Jun 2019 -- Jul 2020",
    detailPerusahaan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit beatae magnam sed voluptatibus aliquam nulla quo repellat asperiores at.",
    bukti: ["Foto 1", "Foto 2", "Foto 3"],
    jobdesk: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem",
    ],
  },
];

const Pengalaman = () => {
  return (
    <>
      <section className="space-y-5 px-3">
        <h3 className="text-3xl font-bold h-24 flex justify-center items-center mt-5">
          Pengalaman Kerja
        </h3>
        {daftarPengalaman.map(
          (
            {
              logoPerusahaan,
              perusahaan,
              sebagai,
              lamaKerja,
              detailPerusahaan,
              bukti,
              jobdesk,
            },
            indexPengalaman
          ) => {
            return (
              <article
                key={indexPengalaman}
                className="bg-white rounded-2xl p-3 min-h-[calc(100vh-3.5rem)]"
              >
                <div className="grid grid-cols-[auto_1fr] gap-x-4">
                  <div className="border row-start-1 row-end-4 col-start-1 aspect-[1/1] h-20">
                    {logoPerusahaan}
                  </div>
                  <h5 className="row-start-1 col-start-2 font-bold">
                    {perusahaan}
                  </h5>
                  <h6 className="row-start-2 col-start-2 font-medium italic">
                    sebagai {sebagai}
                  </h6>
                  <h4 className="row-start-3 col-start-2 content-center text-sm">
                    {lamaKerja}
                  </h4>
                  <p className="col-span-3 border-t-1 border-stone-500 pt-2 mt-4">{detailPerusahaan}</p>
                  <div className="col-span-3">
                    <div
                      id="image-collection"
                      className="p-3 flex gap-x-4 overflow-x-auto my-2"
                    >
                      {bukti.map((itemBukti, indexBukti) => (
                        <div
                          key={indexBukti}
                          className="size-30 border aspect-square"
                        >
                          {itemBukti}
                        </div>
                      ))}
                    </div>
                    <h6 className="text-lg font-bold">Jobdesk :</h6>
                    <ul className="list-disc list-inside space-y-2">
                      {jobdesk.map((itemJobdesk, indexJobdesk) => (
                        <li key={indexJobdesk}>{itemJobdesk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </section>
    </>
  );
};

export default Pengalaman;
