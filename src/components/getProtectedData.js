const getProtectedData = async () => {
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch('https://your-api-url.com/protected-endpoint', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
