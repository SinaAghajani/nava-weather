# Nava Weather

A modern and premium weather application built with Next.js, React, TypeScript, and Tailwind CSS.

Nava Weather provides real-time weather information, hourly and daily forecasts, city search, current-location weather, favorite cities, weather visualizations, and a responsive experience across desktop and mobile devices.

## ✨ Features

- 🌤️ Current weather conditions
- 🌡️ Current temperature and feels-like temperature
- 💧 Humidity information
- 💨 Wind speed
- 👁️ Visibility information
- 🕐 Hourly weather forecast
- 📅 Daily weather forecast
- 📊 Interactive temperature chart
- 🌅 Sunrise and sunset information
- 🔎 City search with geocoding
- 📍 Current location weather
- ❤️ Favorite cities
- 💾 Persistent favorite cities with Zustand
- 🌗 Dynamic day and night weather backgrounds
- 🌧️ Weather-specific icons and backgrounds
- 🔔 Toast notifications
- 📱 Fully responsive design
- ⚡ Optimized Next.js architecture
- 🧩 Reusable and modular components
- 📦 PWA-ready architecture

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand
- TanStack Query
- Framer Motion
- Recharts
- Lucide React
- Zod
- date-fns
- Sonner
- Open-Meteo API

## 🌍 Data Source

Nava Weather uses Open-Meteo for weather and geocoding data.

The application uses:

- Current weather data
- Hourly forecasts
- Daily forecasts
- Sunrise and sunset data
- Geographic coordinates
- City and location search

No API key is required for the current Open-Meteo integration.

## 🌦️ Weather Conditions

The application dynamically adapts its visual presentation based on weather conditions and time of day.

Supported conditions include:

- Clear
- Partly Cloudy
- Cloudy
- Fog
- Rain
- Heavy Rain
- Snow
- Thunderstorm

Each condition has its own weather icon and visual background.

## 📍 Location Support

Nava Weather supports two ways to find a location.

### City Search

Users can search for cities and select a location from the available geocoding results.

### Current Location

The application can request the user's browser location and display weather information based on their geographic coordinates.

Weather pages use latitude and longitude parameters to retrieve accurate weather data for the selected location.

## ❤️ Favorite Cities

Users can save cities to their favorites directly from the weather page.

Favorite cities are stored using Zustand with persistent browser storage, so saved locations remain available after refreshing or reopening the application.

Users can:

- Add a city to favorites
- Remove a city from favorites
- View all favorite cities
- Open weather details for a favorite city

## 📊 Weather Visualization

Nava Weather includes visual weather information to make forecast data easier to understand.

Available visualizations include:

- Hourly temperature chart
- Daily temperature forecast
- Sunrise and sunset information
- Current weather highlights
- Weather summary

---

## 🔄 Data Flow

The application separates API communication, business logic, state management, and UI rendering.

```text
User
 │
 ├── City Search
 │       ↓
 │   Geocoding API
 │       ↓
 │   Coordinates
 │       ↓
 │   Weather Service
 │       ↓
 │   Open-Meteo
 │
 └── Current Location
         ↓
     Browser Geolocation
         ↓
      Coordinates
         ↓
     Weather Service
         ↓
      Weather Data
         ↓
    Weather Components
```

## 🧩 Main Modules

### Weather

Responsible for:

- Current weather
- Hourly forecasts
- Daily forecasts
- Weather conditions
- Weather icons
- Dynamic backgrounds
- Weather summaries
- Weather highlights

### Search

Responsible for:

- City search
- Geocoding
- Search results
- Location selection

### Favorites

Responsible for:

- Adding cities
- Removing cities
- Toggling favorites
- Persistent storage
- Favorite city navigation

### Location

Responsible for:

- Browser geolocation
- Coordinate validation
- Current-location weather

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/SinaAghajani/nava-weather.git
```

### Navigate to the project

```bash
cd nava-weather
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## 🔐 Environment Variables

The current Open-Meteo integration does not require an API key.

If additional environment variables are introduced in future versions, create a `.env.local` file and configure the required values.

## 📱 Responsive Design

Nava Weather is designed to provide a consistent experience across different screen sizes.

- Desktop
- Laptop
- Tablet
- Mobile

The interface uses responsive Tailwind CSS utilities to adapt components and layouts to different devices.

## 🎨 UI Design

The interface focuses on a clean and premium weather experience.

Design principles include:

- Minimal visual hierarchy
- Responsive layouts
- Rounded UI elements
- Dynamic weather visuals
- Clear information grouping
- Accessible interactive elements
- Consistent spacing and typography
- Smooth micro-interactions

## ⚡ Performance

The project uses modern Next.js features to keep the application fast and maintainable.

Performance-oriented techniques include:

- Server-side data fetching
- API route separation
- React Query caching
- Persistent client-side state
- Optimized images
- Reusable components
- Schema validation
- Modular services

## 🧪 Development

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

## 🗺️ Roadmap

- [ ] Weather alerts
- [ ] Advanced weather charts
- [ ] Temperature unit switching
- [ ] Wind speed unit switching
- [ ] Multi-language support
- [ ] Improved reverse geocoding
- [ ] Advanced PWA functionality
- [ ] Offline weather caching
- [ ] Weather notifications
- [ ] More detailed weather metrics
- [ ] Mobile application
- [ ] Home screen installation experience

## 🌐 Future Platform

Nava Weather is designed with a scalable architecture that can later be extended beyond the web application.

```text
Nava Weather
│
├── Web Application
│   └── Next.js
│
└── Mobile Application
    └── Future Implementation
```

The current architecture keeps weather services, data models, and application logic modular so they can be reused and extended in future versions.

## 📄 License

This project is created for learning, experimentation, portfolio development, and educational purposes.

---

Built with ❤️ by Sina Aghajani

```

```
