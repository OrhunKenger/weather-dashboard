import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { WeatherBackground } from './components/WeatherBackground';
import { weatherService } from './services/weatherService';
import { getWeatherCondition } from './utils/weatherHelpers';
import type { WeatherData, ForecastData } from './types/weather.types';
import './App.css';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('clear');

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError('');
      
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city)
      ]);
      
      setWeather(weatherData);
      setForecast(forecastData);
      setWeatherCondition(getWeatherCondition(weatherData.weather[0].main));
    } catch (err) {
      setError('Şehir bulunamadı veya bir hata oluştu');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = () => {
    if (!navigator.geolocation) {
      setError('Tarayıcınız konum servisini desteklemiyor');
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          const [weatherData, forecastData] = await Promise.all([
            weatherService.getWeatherByCoords(latitude, longitude),
            weatherService.getForecastByCoords(latitude, longitude)
          ]);
          
          setWeather(weatherData);
          setForecast(forecastData);
          setWeatherCondition(getWeatherCondition(weatherData.weather[0].main));
        } catch (err) {
          setError('Konum bilgisi alınamadı');
          setWeather(null);
          setForecast(null);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError('Konum izni verilmedi veya konum alınamadı');
      }
    );
  };

  const dailyForecasts = forecast?.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  ).slice(0, 5);

  return (
    <>
      <WeatherBackground condition={weatherCondition} />
      
      <div className="app">
        <header className="app-header">
          <h1>🌤️ Weather Dashboard</h1>
          <p className="subtitle">Dünyanın her yerinden hava durumu</p>
        </header>

        <SearchBar onSearch={handleSearch} onLocationSearch={handleLocationSearch} />

        {error && <div className="error-message">{error}</div>}
        
        {loading && <div className="loading">⏳ Yükleniyor...</div>}

        {weather && (
          <div className="weather-content">
            <WeatherCard data={weather} />
            
            {dailyForecasts && dailyForecasts.length > 0 && (
              <div className="forecast-section">
                <h3>5 Günlük Tahmin</h3>
                <div className="forecast-container">
                  {dailyForecasts.map((item, index) => (
                    <ForecastCard key={index} forecast={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;