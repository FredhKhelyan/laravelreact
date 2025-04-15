import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const createTask = async (e) => {
    e.preventDefault();

    // Validation du champ titre
    if (!title.trim()) {
      setError('Le titre de la tâche ne peut pas être vide.');
      return;
    }

    try {
      await axios.post(
        'https://laravelreact.test/api/tasks', // Assurez-vous que l'URL est correcte
        { title },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Correction des backticks
            'Content-Type': 'application/json',
          },
        }
      );
      setTitle(''); // Réinitialiser le champ titre
      onSuccess(); // Rafraîchir la liste des tâches après l'ajout
      setError(''); // Réinitialiser l'erreur
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la tâche', err);
      setError('Erreur lors de la création de la tâche. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={createTask} className="mb-4">
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded mr-2 w-2/3"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Ajouter
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default TaskForm;
