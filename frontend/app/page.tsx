'use client';
import { useState } from 'react';

export default function IncentiveCalculator() {
  const [targetAmount, setTargetAmount] = useState('');
  const [salesAmount, setSalesAmount] = useState('');
  const [commission, setCommission] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/calculate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Target_Amount: parseFloat(targetAmount),
          Sales_Amount: parseFloat(salesAmount),
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setCommission(data.commission);
      } else {
        alert(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
      alert('Could not connect to the backend server.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Incentive Calculator</h1>
        
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Target Amount ($)</label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Actual Sales ($)</label>
            <input
              type="number"
              value={salesAmount}
              onChange={(e) => setSalesAmount(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Calculate
          </button>
        </form>

        {commission !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md text-center">
            <h2 className="text-lg font-semibold text-green-800">
              Calculated Commission
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ${commission.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}