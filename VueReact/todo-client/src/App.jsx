// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import TaskList from './components/TaskList';
import { Toaster } from 'sonner';

function App() {


return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                       <Dashboard />
                        {/* <Toaster position="top-right" richColors /> */}
                    </PrivateRoute>
                } />
                <Route path="*" element={<Login />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </Router>

    </>
)
}

export default App
