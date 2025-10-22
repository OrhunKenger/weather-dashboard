# 🌤️ Weather Dashboard

A modern, responsive, and interactive weather application built with React, TypeScript, and Vite. Features dynamic weather-based background animations and a sleek dark theme design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.6-purple)

---

## ✨ Features

- 🔍 **City Search** - Get weather information from anywhere in the world
- 📍 **Location Support** - Automatically detect your location via GPS
- 🌡️ **Detailed Information** - Temperature, humidity, wind speed, pressure, and feels-like temperature
- 📅 **5-Day Forecast** - Extended weather forecast for the next 5 days
- 🎨 **Dynamic Background Effects** - Weather-reactive animated backgrounds
  - ☀️ Clear Sky → Glowing sun effect with rays
  - 🌧️ Rain → Realistic falling raindrops
  - ❄️ Snow → Animated snowflakes
  - ⛈️ Thunderstorm → Lightning flash effects
  - ☁️ Cloudy → Moving cloud animations
  - 🌫️ Mist → Fog layers
- 🌙 **Dark Theme** - Modern and eye-friendly dark mode design
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast builds
- 🔒 **Secure** - Environment variables for API key protection

---

## 🚀 Live Demo

[View Live Demo](#) *(Add your deployment link here)*

---

## 📸 Screenshots

### Main Interface
> Add screenshot here

### Rain Effect
> Add screenshot here

### Mobile View
> Add screenshot here

---

## 🛠️ Technologies

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript 5.7.2
- **Build Tool:** Vite 6.0.6
- **HTTP Client:** Axios
- **API:** OpenWeatherMap API
- **Styling:** Custom CSS with advanced animations
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Git

You'll also need:
- OpenWeatherMap API Key (free tier available)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

**How to Get an API Key:**

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Copy your API key
5. Paste it in the `.env` file

**Note:** It may take 10-120 minutes for your API key to become active.

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📦 Build

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Name: `VITE_WEATHER_API_KEY`
   - Value: Your OpenWeatherMap API key
6. Click "Deploy"

Your app will be live in seconds!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Site settings
7. Click "Deploy site"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 📁 Project Structure

```
weather-dashboard/
├── public/                    # Static assets
├── src/
│   ├── assets/               
│   │   └── styles/           # CSS files
│   │       └── WeatherBackground.css
│   ├── components/           # React components
│   │   ├── SearchBar.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── ForecastCard.tsx
│   │   └── WeatherBackground.tsx
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API services
│   │   └── weatherService.ts
│   ├── types/                # TypeScript type definitions
│   │   └── weather.types.ts
│   ├── utils/                # Utility functions
│   │   └── weatherHelpers.ts
│   ├── App.tsx               # Main App component
│   ├── App.css               # Main styles
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables (not committed)
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

---

## 🎨 Customization

### Change Color Theme

Edit gradient colors in `src/App.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #a78bfa 100%);
```

### Change Language

Modify the `lang` parameter in API calls in `src/services/weatherService.ts`:

```typescript
&lang=en  // English
&lang=tr  // Turkish
&lang=es  // Spanish
&lang=fr  // French
// ... and more
```

### Add More Weather Effects

1. Add new condition in `src/utils/weatherHelpers.ts`
2. Create animation in `src/assets/styles/WeatherBackground.css`
3. Add rendering logic in `src/components/WeatherBackground.tsx`

---

## 🎯 Key Features Explained

### Dynamic Background Effects

The app automatically detects the current weather condition and displays corresponding animations:

- **Rain**: Animated raindrops falling from top to bottom
- **Snow**: Gentle falling snowflakes with rotation
- **Thunder**: Periodic lightning flash effects
- **Clear**: Pulsating sun with rays
- **Cloudy**: Slowly moving clouds
- **Mist**: Layered fog effect

### Responsive Design

The interface adapts seamlessly across devices:
- **Desktop**: Full-featured layout with large cards
- **Tablet**: Optimized grid system
- **Mobile**: Single-column layout with touch-friendly buttons

---

## 🐛 Known Issues

- API key activation may take up to 2 hours
- Some small cities might not be available in the API database
- Free tier API limit: 1,000 requests per day

---

## 🔮 Future Enhancements

- [ ] Favorite cities feature with localStorage
- [ ] Hourly forecast with interactive charts
- [ ] Dark/Light mode toggle
- [ ] Air quality index (AQI) display
- [ ] Weather alerts and notifications
- [ ] Multi-language support
- [ ] PWA (Progressive Web App) capabilities
- [ ] Interactive weather map

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR follows the existing code style and includes appropriate tests.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Orhun Sina KENGER**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](#)
- Portfolio: [Your Website](#)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data API
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/weather-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/weather-dashboard?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/weather-dashboard?style=social)

---

## 📞 Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/yourusername/weather-dashboard/issues)
2. Create a new issue with detailed description
3. Join discussions in the [Discussions](https://github.com/yourusername/weather-dashboard/discussions) tab

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>© 2025 Orhun Sina Kenger. All rights reserved.</p>
</div>