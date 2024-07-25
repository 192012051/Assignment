// src/api.js
const BASE_URL = 'https://hiring.reachinbox.xyz/api/v1/onebox';

const apiRequest = async (url, method = 'GET', body = null) => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('No token found. Please log in.');
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        headers,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, config);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export default apiRequest;
