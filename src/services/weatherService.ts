const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

if (!API_KEY) {
  throw new Error('API Key bulunamadı! .env dosyasını kontrol edin.');
}

export const weatherService = {
  async getCurrentWeather(city: string) {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
    );
    if (!response.ok) throw new Error('Şehir bulunamadı');
    return response.json();
  },

  async getWeatherByCoords(lat: number, lon: number) {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`
    );
    if (!response.ok) throw new Error('Konum bilgisi alınamadı');
    return response.json();
  },

  async getForecast(city: string) {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
    );
    if (!response.ok) throw new Error('Tahmin verisi alınamadı');
    return response.json();
  },

  async getForecastByCoords(lat: number, lon: number) {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`
    );
    if (!response.ok) throw new Error('Tahmin verisi alınamadı');
    return response.json();
  },
};