import React, { useState } from "react";

const Transaction = () => {
  const [formData, setFormData] = useState({
    walletAddress: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    walletAddress: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (
      !formData.walletAddress.trim() ||
      !walletAddressRegex.test(formData.walletAddress)
    ) {
      setErrors({
        ...errors,
        walletAddress: "Please enter a valid Ethereum wallet address.",
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount < 0 || amount > 10000) {
      setErrors({
        ...errors,
        amount: "Please enter a valid amount between 0 and 10,000.",
      });
      return;
    }

    setFormData({
      walletAddress: "",
      amount: "",
    });
    setErrors({
      walletAddress: "",
      amount: "",
    });
  };

  return (
    <div className="h-screen bg-gray-200 w-full flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-4">Transaction Page</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="walletAddress"
                className="block text-sm font-medium text-gray-600"
              >
                Wallet Address
              </label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleInputChange}
                className={`mt-1 p-2 border ${
                  errors.walletAddress ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring focus:border-blue-300 block w-full rounded-md`}
              />
              {errors.walletAddress && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.walletAddress}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className={`mt-1 p-2 border ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }
              focus:outline-none focus:ring focus:border-blue-300 block w-full rounded-md`}
              />
              {errors.amount && (
                <p className="mt-2 text-sm text-red-500">{errors.amount}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
