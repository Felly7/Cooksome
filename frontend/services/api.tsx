import axios from 'axios';

const API_URL = 'http://172.20.10.4:3000';
const SPOONACULAR_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const SPOONACULAR_DETAILS_URL = 'https://api.spoonacular.com/recipes/{id}/information';

//Get Spoonacular API Key from environment variables
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY || 'f57cba535cdb427bae6873cffc117686';

// Register User
export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
       name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


// export const getFoodData = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/recipes/`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching food data:', error);
//     throw error;
//   }
// };

// export const getFoodDetails = async (id: string) => {
//   try {
//     const response = await axios.get(`${API_URL}/recipes/id?id=${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching food details:', error);
//     throw error;
//   }
// };

//Fetch Food Data from Spoonacular
export const getFoodData = async (offset) => {
  try {
    const response = await axios.get(SPOONACULAR_URL, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        number: 30, // Number of recipes to fetch
        offset: offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
};

export const getFoodDetails = async (id) => {
  try {
    const response = await axios.get(SPOONACULAR_DETAILS_URL.replace('{id}', id), {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        includeNutrition: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching food details:', error);
    throw error;
  }
};

export const getSearchResults = async (search) => {
  try {
    const response = await axios.get(SPOONACULAR_URL, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query: search,
        number: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching food details:', error);
    throw error;
  }
};