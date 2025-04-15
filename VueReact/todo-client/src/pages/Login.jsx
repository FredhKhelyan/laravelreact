import React, { useState } from "react";
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", { email, password });

            // Stocker le token
            localStorage.setItem("token", response.data.token);

            // Rediriger vers le dashboard ou autre
            navigate("/Dashboard");
        } catch (error) {
            console.error(error);
            alert("Échec de la connexion");
        }
    };

        return (
            <div className="flex h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500">
                {/* Form Section */}
                <div className="flex items-center justify-center w-full h-full">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Connexion
                        </h2>
                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-100 text-gray-800"
                                    placeholder="Entrez votre email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Mot de Passe
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-100 text-gray-800"
                                    placeholder="Entrez votre mot de passe"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

