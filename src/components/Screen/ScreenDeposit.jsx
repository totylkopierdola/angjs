import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { ATMContext } from "../../context/ATMProvider";
import { Undo2 } from "lucide-react";

const ScreenDeposit = () => {
  let navigate = useNavigate();
  const { balance } = useContext(ATMContext);

  return (
    <div className="flex flex-col justify-center relative items-center">
      <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg w-[75%] h-[70%] mx-auto hover:shadow-xl bg-white">
        {/* little screen */}
        <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg flex items-center justify-center">
          <input
            type="number"
            defaultValue={0}
            className="h-3/5 relative bg-white rounded bg-opacity-50 border-b border-slate-800 border-opacity-10 text-slate-700 outline-none text-center text-3xl w-10/12"
            onInput={(e) => {
              // Restrict input to maximum 6 digits
              if (e.target.value.length > 5) {
                e.target.value = e.target.value.slice(0, 6);
              }
            }}
          />

          <span className="absolute right-10 text-slate-800 font-bold text-md">
            PLN
          </span>
        </div>

        <div className="px-5 pt-2 flex flex-col ">
          <h4 className="font-semibold text-center text-slate-800">
            Enter the amount you wish to deposit
          </h4>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 mt-2">
        <Button variant="digital" className="bg-blue-500 w-1/2 text-sm">
          Deposit
        </Button>
        <Link to="/options">
          <Button variant="digital-secondary">
            <Undo2 />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScreenDeposit;