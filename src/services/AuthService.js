import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const authService = {
    login: async (pseudo, password) => {
        try {
            const response = await axios.post(
                `${API_URL}/auth/user`,
                {
                    "pseudo": pseudo,
                    "motdepasse": password
                },
                {headers: {'Content-Type': 'application/json'}}
            );

            const data = response.data;

            localStorage.setItem('authToken', data.token);

            const tokenValue = jwtDecode(data.token);

            localStorage.setItem('user', JSON.stringify(tokenValue || {}));

            return data;
        } catch (error) {
            console.error('Erreur login:', error);
            const message = error.response?.data?.message || 'Échec de la connexion';
            throw new Error(message);
        }
    },

    logout: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch (e) {
            return e;
        }
    },

    getToken: () => {
        return localStorage.getItem('authToken');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('authToken');
    }
};

export default authService;