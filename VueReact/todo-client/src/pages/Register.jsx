import React from "react";

const Register = () => {
  return (
   <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Welcome Section */}
            <div className="flex-1 flex items-center justify-center relative">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white animate-pulse">
                        Bienvenue!
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Rejoignez-nous et commencez votre aventure.
                    </p>
                </div>
                {/* Bubbles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-20 h-20 bg-white opacity-20 rounded-full top-10 left-10 animate-bounce"></div>
                    <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-20 right-20 animate-bounce"></div>
                    <div className="absolute w-16 h-16 bg-white opacity-15 rounded-full top-1/2 left-1/4 animate-bounce"></div>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Inscription
                    </h2>
                    <form>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="fullName"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Nom Complet
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Entrez votre nom complet"
                                style={{ backgroundColor: '#FFF8E1' }}
                            />
                        </div>

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
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Entrez votre email"
                                style={{ backgroundColor: '#FFF8E1' }}
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
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Entrez votre mot de passe"
                                style={{ backgroundColor: '#FFF8E1' }}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Register;
