import { useEffect, useState } from 'react';
import '../assets/styles/WeatherBackground.css';

interface WeatherBackgroundProps {
  condition: string;
}

export const WeatherBackground = ({ condition }: WeatherBackgroundProps) => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Partikül sayısı hava durumuna göre
    const particleCount = condition === 'rain' ? 100 : condition === 'snow' ? 50 : 30;
    setParticles(Array.from({ length: particleCount }, (_, i) => i));
  }, [condition]);

  return (
    <div className={`weather-background ${condition}`}>
      {condition === 'rain' && (
        <div className="rain-container">
          {particles.map((i) => (
            <div
              key={i}
              className="raindrop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}

      {condition === 'snow' && (
        <div className="snow-container">
          {particles.map((i) => (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                fontSize: `${10 + Math.random() * 10}px`
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {condition === 'thunder' && (
        <div className="thunder-container">
          <div className="lightning" />
        </div>
      )}

      {condition === 'clear' && (
        <div className="clear-container">
          <div className="sun" />
          {particles.map((i) => (
            <div
              key={i}
              className="sun-ray"
              style={{
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {condition === 'cloudy' && (
        <div className="cloudy-container">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>
      )}

      {condition === 'mist' && (
        <div className="mist-container">
          <div className="fog fog-1" />
          <div className="fog fog-2" />
          <div className="fog fog-3" />
        </div>
      )}
    </div>
  );
};