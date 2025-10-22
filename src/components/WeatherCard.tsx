import type { WeatherData } from '../types/weather.types';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{data.name}, {data.sys.country}</h2>
        <p className="date">{new Date().toLocaleDateString('tr-TR')}</p>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(data.main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="weather-icon"
        />
      </div>

      <p className="weather-description">{data.weather[0].description}</p>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">💧 Nem</span>
          <span className="detail-value">{data.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">💨 Rüzgar</span>
          <span className="detail-value">{data.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">🌡️ Hissedilen</span>
          <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">🔽 Basınç</span>
          <span className="detail-value">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};