import axioss from 'axios';

const axios = axioss.create({
    baseURL: process.env.REACT_APP_URL_BACKEND,
})

export const getProjects = async () => {
    const response = await axios.get('/api/project');
    return response.data;
}