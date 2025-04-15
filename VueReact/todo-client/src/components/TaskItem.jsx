import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, refreshTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const API_BASE_URL = 'https://laravelreact.test/api/tasks';

  const toggleTask = async () => {
    try {
      await axios.patch(
        `${API_BASE_URL}/${task.id}/toggle`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      refreshTasks();
    } catch (err) {
      console.error("Erreur lors de la modification de l'état de la tâche", err);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/${task.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      refreshTasks();
    } catch (err) {
      console.error('Erreur lors de la suppression de la tâche', err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `${API_BASE_URL}/${task.id}`,
        { title: editedTitle },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsEditing(false);
      refreshTasks();
    } catch (err) {
      console.error('Erreur lors de la mise à jour de la tâche', err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-2 flex justify-between items-center">
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className={`text-lg ${task.completed ? 'text-gray-500' : ''}`}>
            {task.title}
          </p>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={toggleTask}
          className={`px-2 py-1 rounded ${task.completed ? 'bg-gray-500' : 'bg-green-500'} text-black`}
        >
          {task.completed ? 'Non terminé' : 'Terminé'}
        </button>

        <button onClick={deleteTask} className="bg-red-500 text-black px-2 py-1 rounded">
          Supprimer
        </button>

        {isEditing ? (
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 py-1 rounded">
            Enregistrer
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-black px-2 py-1 rounded">
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
