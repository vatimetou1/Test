import axios from 'axios';

const API_BASE_URL = 'https://ecash-dev-419121.nw.r.appspot.com/api/bmi/client_digiPay/get-nni/';
const API_KEY = 'Api-Key YaYKQsdd.qqGmsDm7rLYUIJBSqiKYqh5x7i5vOCoU';

// Fonction pour récupérer les données
export const fetchUserData = async (nni, tel) => {
  try {
    const response = await axios.post(API_BASE_URL, { nni, tel }, {
      headers: {
        'Authorization': API_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};
