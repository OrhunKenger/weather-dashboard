import type { WeatherData } from '../types/weather.types';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{data.name}, {data.sys.country}</h2>
        <p className="date">{new Date().toLocaleDateString('tr-TR')}</p>
      </div>

      <div className="weather-meta">
        <div className="meta-item">
          <span className="meta-icon" role="img" aria-label="Gün doğumu">🌅</span>
          <div className="meta-info">
            <span className="meta-label">Gün doğumu</span>
            <span className="meta-value">{formatTime(data.sys.sunrise)}</span>
          </div>
        </div>
        <div className="meta-divider" aria-hidden="true" />
        <div className="meta-item">
          <span className="meta-icon" role="img" aria-label="Gün batımı">🌇</span>
          <div className="meta-info">
            <span className="meta-label">Gün batımı</span>
            <span className="meta-value">{formatTime(data.sys.sunset)}</span>
          </div>
        </div>
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
          <span className="detail-icon" role="img" aria-hidden="true">💧</span>
          <div className="detail-info">
            <span className="detail-label">Nem</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
        </div>
        <div className="detail-item">
          <span className="detail-icon" role="img" aria-hidden="true">💨</span>
          <div className="detail-info">
            <span className="detail-label">Rüzgar</span>
            <span className="detail-value">{data.wind.speed} m/s</span>
          </div>
        </div>
        <div className="detail-item">
          <span className="detail-icon" role="img" aria-hidden="true">🌡️</span>
          <div className="detail-info">
            <span className="detail-label">Hissedilen</span>
            <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
        </div>
        <div className="detail-item">
          <span className="detail-icon" role="img" aria-hidden="true">🔽</span>
          <div className="detail-info">
            <span className="detail-label">Basınç</span>
            <span className="detail-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};