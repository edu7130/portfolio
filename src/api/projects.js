import axioss from 'axios';

const axios = axioss.create({
    baseURL: process.env.REACT_APP_URL_BACKEND,
    timeout: 10000
})

export const getProjects = async () => {
    const response = await axios.get('/api/project');
    return response.data;
}