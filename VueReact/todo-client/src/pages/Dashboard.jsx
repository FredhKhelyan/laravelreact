import React, { useState } from 'react';
import { FiPlus, FiUsers, FiCheckCircle, FiClock, FiSearch, FiLogOut } from 'react-icons/fi';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLogout = () => {
    // Supprimer le token d'authentification
    localStorage.removeItem('token');

    // Rediriger vers la page de connexion
    navigate('/login');
  };

  const refreshTasks = () => setRefresh(prev => !prev);

  return (
    <div className="min-h-screen flex text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-600 text-white p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">My Plans</h1>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-yellow-300 transition text-bold text-2xl">Dashboard</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition text-bold text-2xl">Tâches</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition text-bold text-2xl">Utilisateurs</a></li>
          </ul>
        </div>
        <button
          className="flex items-center space-x-2 hover:text-yellow-300"
          onClick={handleLogout} // Appel de la fonction handleLogout
        >
          <FiLogOut />
          <span>Déconnexion</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col bg-gradient-to-br from-purple-100 to-indigo-100">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-6 bg-white shadow">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une tâche..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-10 flex-1">
          <h1 className="text-3xl font-bold mb-4 text-green-600">Bienvenue sur votre Dashboard</h1>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:scale-105 transition">
              <FiUsers className="text-purple-600 text-3xl" />
              <div>
                <p className="text-xl font-bold">24</p>
                <p className="text-gray-500">Utilisateurs</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:scale-105 transition">
              <FiCheckCircle className="text-green-600 text-3xl" />
              <div>
                <p className="text-xl font-bold">12</p>
                <p className="text-gray-500">Tâches terminées</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4 hover:scale-105 transition">
              <FiClock className="text-yellow-500 text-3xl" />
              <div>
                <p className="text-xl font-bold"></p>
                <p className="text-gray-500">Tâches en cours</p>
              </div>
            </div>
          </div>

          {/* Add Task Button */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2"
              onClick={() => setShowForm(!showForm)}
            >
              <FiPlus />
              Ajouter une tâche
            </button>
            {showForm && <TaskForm onSuccess={refreshTasks} />}
          </div>

          {/* Task List */}
          <TaskList refresh={refresh} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
