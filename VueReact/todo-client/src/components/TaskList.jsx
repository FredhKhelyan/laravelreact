import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('https://laravelreact.test/api/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Correction des backticks
          'Content-Type': 'application/json',
        },
      });
      if (Array.isArray(res.data)) {
        setTasks(res.data); // Assurez-vous que res.data est un tableau
        setError(''); // Réinitialiser l'erreur
      } else {
        throw new Error('Données inattendues reçues du serveur');
      }
    } catch (err) {
      console.error('Erreur lors du chargement des tâches', err);
      setError('Erreur lors du chargement des tâches. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]); // Recharger les tâches à chaque changement de refresh

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Liste des tâches</h2>
      {error && <p className="text-red-500">{error}</p>}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
        ))
      ) : (
        !error && <p className="text-gray-500">Aucune tâche disponible.</p>
      )}
    </div>
  );
};

export default TaskList;
