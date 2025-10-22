import type { ForecastItem } from '../types/weather.types';

interface ForecastCardProps {
  forecast: ForecastItem;
}

export const ForecastCard = ({ forecast }: ForecastCardProps) => {
  const date = new Date(forecast.dt * 1000);
  const dayName = date.toLocaleDateString('tr-TR', { weekday: 'short' });

  return (
    <div className="forecast-card">
      <div className="forecast-date">{dayName}</div>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].description}
        className="forecast-icon"
      />
      <div className="forecast-temp">{Math.round(forecast.main.temp)}°C</div>
      <div className="forecast-desc">{forecast.weather[0].description}</div>
    </div>
  );
};