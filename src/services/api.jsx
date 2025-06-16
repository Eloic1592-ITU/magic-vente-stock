
import axios from 'axios';

//const BASE_URL = 'https://magic-vente-stock-backend-bxpd.onrender.com';
const API_URL = import.meta.env.VITE_API_URL;

export const  getProduitDuJour = async() => {
    const res = await axios.get(`${API_URL}/produits/du-jour`);
    return res.data;
}