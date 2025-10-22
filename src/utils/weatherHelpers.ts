export const getWeatherCondition = (weatherMain: string): string => {
  const condition = weatherMain.toLowerCase();
  
  if (condition.includes('rain') || condition.includes('drizzle')) return 'rain';
  if (condition.includes('thunder') || condition.includes('storm')) return 'thunder';
  if (condition.includes('snow')) return 'snow';
  if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) return 'mist';
  if (condition.includes('cloud')) return 'cloudy';
  if (condition.includes('clear')) return 'clear';
  
  return 'clear';
};