import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute.jsx";

import PageAccueil from "./pages/PageAccueil";
import PageAccueilPerso from "./pages/PageAccueilPerso.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<PageAccueil />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<PageAccueilPerso />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
