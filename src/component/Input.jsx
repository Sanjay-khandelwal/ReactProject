import {React,useId} from 'react'
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    onCurrencyOptions=[],
    selectCurrency="USD",
    amountDisable=false,
    currencyDisable=false,
}) {
    const  amountInput=useId();
 return (
  <div className="bg-white p-4 rounded-xl text-sm flex shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
    <div className="w-1/2 transition-all duration-300">
      <label htmlFor={amountInput} className="text-black/40 mb-2 inline-block">
        {label}
      </label>
      <input
        id={amountInput}
        className="outline-none w-full bg-transparent py-2 border-b border-gray-300 focus:border-blue-500 transition-all duration-300 ease-in-out"
        type="number"
        placeholder="Amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        min="0"
        step="any"
      />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right transition-all duration-300">
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
        className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none transition duration-200 ease-in-out hover:bg-blue-100"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {onCurrencyOptions.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  </div>
);


}

export default InputBox;