import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenue sur le Dashboard !
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Gérez vos tâches et restez organisé avec notre application.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Commencer
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
