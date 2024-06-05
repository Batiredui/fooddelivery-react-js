// frontend/src/services/foodService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAll = async () => {
    const response = await axios.get(`${API_URL}/foods`);
    return response.data;
};

export const search = async searchTerm => {
    const response = await axios.get(`${API_URL}/foods/search/${searchTerm}`);
    return response.data;
};

export const getAllTags = async () => {
    const response = await axios.get(`${API_URL}/foods/tags`);
    return response.data;
};

export const getAllbyTag = async tag => {
    if (tag === 'All' ) return getAll();
    const response = await axios.get(`${API_URL}/foods/tags/${tag}`);
    return response.data;
};

export const getById = async foodId => {
    const response = await axios.get(`${API_URL}/foods/${foodId}`);
    return response.data;
};
