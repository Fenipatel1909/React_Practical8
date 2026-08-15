import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("+");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("+");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">

      {/* Calculator */}
      <div className="w-full max-w-md rounded-3xl bg-slate-800 p-8 shadow-2xl border border-purple-400/30">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🧮</div>

          <h1 className="text-3xl font-extrabold text-white">
            Basic Calculator
          </h1>

          <p className="mt-2 text-gray-400">
            Perform simple calculations
          </p>
        </div>

        {/* First Number */}
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          First Number
        </label>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="mb-5 w-full rounded-xl bg-slate-700 border border-slate-600 p-4 text-white placeholder-gray-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
        />

        {/* Operator */}
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Select Operation
        </label>

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="mb-5 w-full rounded-xl bg-slate-700 border border-slate-600 p-4 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
        >
          <option value="+">➕ Addition (+)</option>
          <option value="-">➖ Subtraction (-)</option>
          <option value="*">✖️ Multiplication (×)</option>
          <option value="/">➗ Division (÷)</option>
        </select>

        {/* Second Number */}
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Second Number
        </label>

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="mb-6 w-full rounded-xl bg-slate-700 border border-slate-600 p-4 text-white placeholder-gray-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
        />

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={calculate}
            className="flex-1 rounded-xl bg-purple-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-purple-500 hover:scale-105"
          >
            Calculate
          </button>

          <button
            onClick={clearCalculator}
            className="flex-1 rounded-xl bg-slate-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-slate-500 hover:scale-105"
          >
            Clear
          </button>

        </div>

        {/* Result */}
        {result !== "" && (
          <div className="mt-7 rounded-2xl border border-purple-400/30 bg-slate-700 p-5 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Result
            </p>

            <p className="mt-2 text-4xl font-extrabold text-purple-400">
              {result}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Calculator;