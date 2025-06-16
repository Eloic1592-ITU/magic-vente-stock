import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import PrivateRoute from "./routes/PrivateRoute.jsx";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>

                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<HomePage/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
