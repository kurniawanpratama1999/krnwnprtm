import { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import { KalkulatorButtons } from "./Components/Buttons";
import { useNavigate } from "react-router";

const Kalkulator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const navigate = useNavigate();

  const handleButtons = (value) => {
    if (value === "=") {
      setResult(evaluate(input));
    } else if (value === "C") {
      setInput("");
      setResult(0);
    } else if (value === "D") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "log") {
      setInput((prev) => prev + `${value}(`);
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      if (input.trim() === "") {
        setResult(0);
      }
    }
  }, [input]);

  return (
    <>
      <section className="h-40 border-t p-3">
        <div className="w-full h-full p-2 flex items-end justify-end break-words whitespace-pre-wrap outline-0 border-0 text-2xl text-right">
          {input}
        </div>
      </section>
      <section className="border-b flex justify-center">
        <div className="border-t w-[95%] resize-none outline-0 border-0 text-2xl h-[3ch] text-right p-2">
          {result}
        </div>
      </section>
      <section className="w-[300px] mx-auto p-2 grid grid-cols-4 gap-2">
        {KalkulatorButtons.map((value, index) => {
          return (
            <button
              key={index}
              className="border rounded-2xl py-2"
              onClick={() => handleButtons(value)}
            >
              {value}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Kalkulator;
