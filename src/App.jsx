/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ThemeProvider from "./context/ThemeProvider";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
    return (
        <ThemeProvider>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <Home />
            </div>
        </ThemeProvider>
    );
};

export default App;
