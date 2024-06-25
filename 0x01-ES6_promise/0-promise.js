function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulated async operation (e.g., fetching from an API)
        setTimeout(() => {
            const success = true; // Simulating success/failure
            if (success) {
                resolve('Response from API');
            } else {
                reject(new Error('Failed to get response from API'));
            }
        }, 1000);
    });
}

export default getResponseFromAPI;
