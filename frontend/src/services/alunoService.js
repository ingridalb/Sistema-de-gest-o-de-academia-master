import axios from 'axios';

const API_URL = 'http://localhost:8000/alunos/';

export const getAlunos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching alunos:', error);
        throw error;
    }
};
