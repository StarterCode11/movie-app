const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f0a733542804a06b1db8913a1d3f59e4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;