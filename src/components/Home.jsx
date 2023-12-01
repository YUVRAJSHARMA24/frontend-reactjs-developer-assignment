import React from "react";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Sharpe Labs
        </h1>
        <p className="text-gray-700 text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          ONE PLATFORM. ENDLESS POSSIBILITIES. Simply the best DeFi execution
          environment.
        </p>
        <p className="text-green-500 font-bold text-xl animate__animated animate__fadeIn animate__delay-3s">
          Sharpe is the easiest and safest way to Manage, Track, and Invest your
          DeFi assets in a complete self-custodial environment using any wallet.
        </p>
      </div>
    </div>
  );
};

export default Home;
