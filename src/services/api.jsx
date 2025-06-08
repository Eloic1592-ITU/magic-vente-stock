
import axios from 'axios';

const BASE_URL = 'https://magic-vente-stock-backend-bxpd.onrender.com';

export const  getProduitDuJour = async() => {
    const res = await axios.get(`${BASE_URL}/produits/du-jour`);
    return res.data;
}