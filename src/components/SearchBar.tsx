import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocationSearch: () => void;
}

export const SearchBar = ({ onSearch, onLocationSearch }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Şehir adı girin (örn: Istanbul)"
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍 Ara
        </button>
      </form>
      <button 
        onClick={onLocationSearch} 
        className="location-button"
        type="button"
      >
        📍 Konumumu Kullan
      </button>
    </div>
  );
};