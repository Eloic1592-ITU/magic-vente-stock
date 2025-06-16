const API_URL = import.meta.env.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const authService = {
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Échec de la connexion');
            }

            // Si la connexion réussit, stocker le token
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user || {}));

            return data;
        } catch (error) {
            console.error('Erreur login:', error);
            throw error;
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