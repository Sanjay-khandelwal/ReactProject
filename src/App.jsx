import { useState } from 'react';
import InputBox from './component/Input.jsx'
import {useCurrencyInfo} from './Hooks/useCurrencyInfo.js'

export function App() {
    const [amount,setAmount]= useState(0);
    const [from,setFrom]=useState("USD");
    const [to,setTO]=useState("INR");
    const [convertedAmount,setConvertedAmount]=useState(0);

    const currencyInfo=useCurrencyInfo(from)
    const options=Object.keys(currencyInfo);
    console.log(options)

const swap = () => {
    setFrom(to);
    setTO(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
}
const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to]);
}



  let BackgroundImage1='abc.jpg'
  let BackgroundImage2='ab.avif'
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImage1)
  const toggleBackground = () => {
  setBackgroundImage((prev) =>
    prev === BackgroundImage1 ? BackgroundImage2 : BackgroundImage1
  );
};
   return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-xl p-6 backdrop-blur-md bg-white/30 shadow-lg transform transition-all duration-700 ease-in-out animate-slideFadeIn">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                onCurrencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                amountDisable={false}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>

            <div className="relative w-full h-0.5 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1 transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyOptions={options}
                onCurrencyChange={(currency) => setTO(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

            {/* 🌄 New Background Switch Button */}
            <button
              type="button"
              onClick={toggleBackground}
              className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Change Background
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  }


 
