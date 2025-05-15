import { useEffect, useRef } from "react";
import { useState } from "react";

const MataUang = () => {
  const [jenisMataUang, setJenisMataUang] = useState([]);
  const [mataUang, setMataUang] = useState([]);
  const [uang, setUang] = useState({ uang1: 1, uang2: 1 });
  const targetSelect1 = useRef(null);
  const targetSelect2 = useRef(null);

  const fetchNamaMataUang = async () => {
    try {
      const fetching = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json"
      );
      const res = await fetching.json();
      return { success: true, message: "Berhasil mendapatkan data", data: res };
    } catch (error) {
      return { success: false, message: "Gagal mengambil data!" };
    }
  };

  const fetchMataUang = async () => {
    try {
      const fetching = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
      );
      const res = await fetching.json();
      return { success: true, message: "Berhasil mendapatkan data", data: res };
    } catch (error) {
      return { success: false, message: "Gagal mengambil data!" };
    }
  };

  const convertMataUang1 = (e) => {
    const euroToUang1 = mataUang[targetSelect1.current.value];
    const euroToUang2 = mataUang[targetSelect2.current.value];
    const calculate = euroToUang2 / euroToUang1;
    const sum = calculate * e.value;
    setUang((prev) => ({ ...prev, uang1: e.value, uang2: sum }));
  };
  
  const convertMataUang2 = (e) => {
    const euroToUang1 = mataUang[targetSelect1.current.value];
    const euroToUang2 = mataUang[targetSelect2.current.value];
    const calculate = euroToUang1 / euroToUang2;
    const sum = calculate * e.value;
    setUang((prev) => ({ ...prev, uang1: sum, uang2: e.value }));
  };

  const handleChange1 = (e) => {
    const value = e.value;
    const tempValue = mataUang[value];
    setUang((prev) => ({ ...prev, uang1: tempValue }));
  };
  const handleChange2 = (e) => {
    const value = e.value;
    const tempValue = mataUang[value];
    setUang((prev) => ({ ...prev, uang2: tempValue }));
  };

  useEffect(() => {
    fetchNamaMataUang()
      .then((res) => {
        if (res.success) {
          for (let data in res.data) {
            setJenisMataUang((prev) => [...prev, data]);
          }
        } else {
          setJenisMataUang([]);
        }
      })
      .catch((err) => setJenisMataUang([]));

    fetchMataUang()
      .then((res) => {
        if (res.success) {
          setMataUang(res.data.eur);
        } else {
          setMataUang({});
        }
      })
      .catch((err) => setJenisMataUang({}));
  }, []);
  return (
    <>
      <section className="grid gap-4 border justify-center p-2">
        <label htmlFor="lbl-mata-uang1 w-full">
          <select
            onChange={({ target }) => handleChange1(target)}
            ref={targetSelect1}
            name="mata-uang1"
            id="mata-uang1"
          >
            {jenisMataUang.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
          <input
            type="tel"
            className="border py-1 px-2 outline-0"
            id="lbl-mata-uang1"
            value={uang.uang1}
            onInput={({ target }) => convertMataUang1(target)}
          />
        </label>
        <label htmlFor="lbl-mata-uang2">
          <select
            onChange={({ target }) => handleChange2(target)}
            ref={targetSelect2}
            name="mata-uang2"
            id="mata-uang2"
          >
            {jenisMataUang.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
          <input
            type="tel"
            className="border py-1 px-2 outline-0"
            id="lbl-mata-uang2"
            value={uang.uang2}
            onInput={({ target }) => convertMataUang2(target)}
          />
        </label>
      </section>
    </>
  );
};

export default MataUang;
