export type WeatherCondition = 'Sunny' | 'Partly Cloudy' | 'Cloudy' | 'Rainy' | 'Stormy' | 'Snowy' | 'Clear';

export interface WeatherData {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: WeatherCondition;
      icon: string;
    };
    wind_kph: number;
    wind_mph: number;
    wind_dir: string;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
    is_day: number;
  };
  forecast: {
    hourly: Array<{
      time: string;
      temp_c: number;
      temp_f: number;
      condition: {
        text: WeatherCondition;
        icon: string;
      };
      chance_of_rain: number;
    }>;
    daily: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        condition: {
          text: WeatherCondition;
          icon: string;
        };
        chance_of_rain: number;
      };
    }>;
  };
}

export const defaultLocations = [
  "New York",
  "London",
  "Tokyo",
  "Sydney",
  "Paris",
  "Berlin",
  "Moscow",
  "Dubai",
];

export const mockWeatherData: Record<string, WeatherData> = {
  "New York": {
    location: {
      name: "New York",
      country: "United States",
      lat: 40.71,
      lon: -74.01,
    },
    current: {
      temp_c: 22,
      temp_f: 71.6,
      condition: {
        text: "Sunny",
        icon: "sun",
      },
      wind_kph: 15,
      wind_mph: 9.3,
      wind_dir: "NE",
      humidity: 65,
      feelslike_c: 23,
      feelslike_f: 73.4,
      uv: 6,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 19, temp_f: 66.2, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "09:00", temp_c: 21, temp_f: 69.8, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "12:00", temp_c: 24, temp_f: 75.2, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "15:00", temp_c: 25, temp_f: 77, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "18:00", temp_c: 23, temp_f: 73.4, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "21:00", temp_c: 20, temp_f: 68, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "00:00", temp_c: 18, temp_f: 64.4, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "03:00", temp_c: 17, temp_f: 62.6, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 25, maxtemp_f: 77, mintemp_c: 17, mintemp_f: 62.6, avgtemp_c: 21, avgtemp_f: 69.8, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-17", day: { maxtemp_c: 27, maxtemp_f: 80.6, mintemp_c: 18, mintemp_f: 64.4, avgtemp_c: 22.5, avgtemp_f: 72.5, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-18", day: { maxtemp_c: 24, maxtemp_f: 75.2, mintemp_c: 17, mintemp_f: 62.6, avgtemp_c: 20.5, avgtemp_f: 68.9, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 } },
        { date: "2025-04-19", day: { maxtemp_c: 23, maxtemp_f: 73.4, mintemp_c: 16, mintemp_f: 60.8, avgtemp_c: 19.5, avgtemp_f: 67.1, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 70 } },
        { date: "2025-04-20", day: { maxtemp_c: 22, maxtemp_f: 71.6, mintemp_c: 15, mintemp_f: 59, avgtemp_c: 18.5, avgtemp_f: 65.3, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-21", day: { maxtemp_c: 24, maxtemp_f: 75.2, mintemp_c: 16, mintemp_f: 60.8, avgtemp_c: 20, avgtemp_f: 68, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-22", day: { maxtemp_c: 26, maxtemp_f: 78.8, mintemp_c: 18, mintemp_f: 64.4, avgtemp_c: 22, avgtemp_f: 71.6, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
      ],
    },
  },
  "London": {
    location: {
      name: "London",
      country: "United Kingdom",
      lat: 51.51,
      lon: -0.13,
    },
    current: {
      temp_c: 14,
      temp_f: 57.2,
      condition: {
        text: "Rainy",
        icon: "cloud-rain",
      },
      wind_kph: 20,
      wind_mph: 12.4,
      wind_dir: "SW",
      humidity: 85,
      feelslike_c: 12,
      feelslike_f: 53.6,
      uv: 2,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 11, temp_f: 51.8, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 90 },
        { time: "09:00", temp_c: 13, temp_f: 55.4, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 80 },
        { time: "12:00", temp_c: 15, temp_f: 59, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "15:00", temp_c: 16, temp_f: 60.8, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 },
        { time: "18:00", temp_c: 14, temp_f: 57.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "21:00", temp_c: 12, temp_f: 53.6, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 40 },
        { time: "00:00", temp_c: 10, temp_f: 50, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 },
        { time: "03:00", temp_c: 9, temp_f: 48.2, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 70 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 16, maxtemp_f: 60.8, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 12.5, avgtemp_f: 54.5, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 80 } },
        { date: "2025-04-17", day: { maxtemp_c: 17, maxtemp_f: 62.6, mintemp_c: 10, mintemp_f: 50, avgtemp_c: 13.5, avgtemp_f: 56.3, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-18", day: { maxtemp_c: 18, maxtemp_f: 64.4, mintemp_c: 11, mintemp_f: 51.8, avgtemp_c: 14.5, avgtemp_f: 58.1, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 } },
        { date: "2025-04-19", day: { maxtemp_c: 19, maxtemp_f: 66.2, mintemp_c: 12, mintemp_f: 53.6, avgtemp_c: 15.5, avgtemp_f: 59.9, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-20", day: { maxtemp_c: 17, maxtemp_f: 62.6, mintemp_c: 11, mintemp_f: 51.8, avgtemp_c: 14, avgtemp_f: 57.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 40 } },
        { date: "2025-04-21", day: { maxtemp_c: 15, maxtemp_f: 59, mintemp_c: 10, mintemp_f: 50, avgtemp_c: 12.5, avgtemp_f: 54.5, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 } },
        { date: "2025-04-22", day: { maxtemp_c: 16, maxtemp_f: 60.8, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 12.5, avgtemp_f: 54.5, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 30 } },
      ],
    },
  },
  "Tokyo": {
    location: {
      name: "Tokyo",
      country: "Japan",
      lat: 35.69,
      lon: 139.69,
    },
    current: {
      temp_c: 18,
      temp_f: 64.4,
      condition: {
        text: "Cloudy",
        icon: "cloud",
      },
      wind_kph: 10,
      wind_mph: 6.2,
      wind_dir: "E",
      humidity: 70,
      feelslike_c: 18,
      feelslike_f: 64.4,
      uv: 4,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 16, temp_f: 60.8, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "09:00", temp_c: 18, temp_f: 64.4, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "12:00", temp_c: 20, temp_f: 68, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "15:00", temp_c: 21, temp_f: 69.8, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "18:00", temp_c: 19, temp_f: 66.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "21:00", temp_c: 17, temp_f: 62.6, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "00:00", temp_c: 16, temp_f: 60.8, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "03:00", temp_c: 15, temp_f: 59, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 21, maxtemp_f: 69.8, mintemp_c: 15, mintemp_f: 59, avgtemp_c: 18, avgtemp_f: 64.4, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 } },
        { date: "2025-04-17", day: { maxtemp_c: 22, maxtemp_f: 71.6, mintemp_c: 16, mintemp_f: 60.8, avgtemp_c: 19, avgtemp_f: 66.2, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-18", day: { maxtemp_c: 24, maxtemp_f: 75.2, mintemp_c: 17, mintemp_f: 62.6, avgtemp_c: 20.5, avgtemp_f: 68.9, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-19", day: { maxtemp_c: 25, maxtemp_f: 77, mintemp_c: 18, mintemp_f: 64.4, avgtemp_c: 21.5, avgtemp_f: 70.7, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-20", day: { maxtemp_c: 23, maxtemp_f: 73.4, mintemp_c: 17, mintemp_f: 62.6, avgtemp_c: 20, avgtemp_f: 68, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-21", day: { maxtemp_c: 21, maxtemp_f: 69.8, mintemp_c: 16, mintemp_f: 60.8, avgtemp_c: 18.5, avgtemp_f: 65.3, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-22", day: { maxtemp_c: 20, maxtemp_f: 68, mintemp_c: 15, mintemp_f: 59, avgtemp_c: 17.5, avgtemp_f: 63.5, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 } },
      ],
    },
  },
  "Sydney": {
    location: {
      name: "Sydney",
      country: "Australia",
      lat: -33.87,
      lon: 151.21,
    },
    current: {
      temp_c: 26,
      temp_f: 78.8,
      condition: {
        text: "Sunny",
        icon: "sun",
      },
      wind_kph: 15,
      wind_mph: 9.3,
      wind_dir: "SE",
      humidity: 55,
      feelslike_c: 27,
      feelslike_f: 80.6,
      uv: 8,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 23, temp_f: 73.4, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "09:00", temp_c: 25, temp_f: 77, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "12:00", temp_c: 27, temp_f: 80.6, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "15:00", temp_c: 28, temp_f: 82.4, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "18:00", temp_c: 25, temp_f: 77, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "21:00", temp_c: 23, temp_f: 73.4, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "00:00", temp_c: 22, temp_f: 71.6, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "03:00", temp_c: 21, temp_f: 69.8, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 28, maxtemp_f: 82.4, mintemp_c: 21, mintemp_f: 69.8, avgtemp_c: 24.5, avgtemp_f: 76.1, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-17", day: { maxtemp_c: 29, maxtemp_f: 84.2, mintemp_c: 22, mintemp_f: 71.6, avgtemp_c: 25.5, avgtemp_f: 77.9, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-18", day: { maxtemp_c: 27, maxtemp_f: 80.6, mintemp_c: 21, mintemp_f: 69.8, avgtemp_c: 24, avgtemp_f: 75.2, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-19", day: { maxtemp_c: 25, maxtemp_f: 77, mintemp_c: 20, mintemp_f: 68, avgtemp_c: 22.5, avgtemp_f: 72.5, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 } },
        { date: "2025-04-20", day: { maxtemp_c: 24, maxtemp_f: 75.2, mintemp_c: 19, mintemp_f: 66.2, avgtemp_c: 21.5, avgtemp_f: 70.7, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 } },
        { date: "2025-04-21", day: { maxtemp_c: 23, maxtemp_f: 73.4, mintemp_c: 18, mintemp_f: 64.4, avgtemp_c: 20.5, avgtemp_f: 68.9, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 70 } },
        { date: "2025-04-22", day: { maxtemp_c: 25, maxtemp_f: 77, mintemp_c: 19, mintemp_f: 66.2, avgtemp_c: 22, avgtemp_f: 71.6, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 30 } },
      ],
    },
  },
  "Paris": {
    location: {
      name: "Paris",
      country: "France",
      lat: 48.86,
      lon: 2.35,
    },
    current: {
      temp_c: 16,
      temp_f: 60.8,
      condition: {
        text: "Partly Cloudy",
        icon: "cloud-sun",
      },
      wind_kph: 12,
      wind_mph: 7.5,
      wind_dir: "W",
      humidity: 65,
      feelslike_c: 15,
      feelslike_f: 59,
      uv: 4,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 12, temp_f: 53.6, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "09:00", temp_c: 14, temp_f: 57.2, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "12:00", temp_c: 17, temp_f: 62.6, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "15:00", temp_c: 18, temp_f: 64.4, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "18:00", temp_c: 16, temp_f: 60.8, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 },
        { time: "21:00", temp_c: 14, temp_f: 57.2, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "00:00", temp_c: 12, temp_f: 53.6, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "03:00", temp_c: 11, temp_f: 51.8, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 18, maxtemp_f: 64.4, mintemp_c: 11, mintemp_f: 51.8, avgtemp_c: 14.5, avgtemp_f: 58.1, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-17", day: { maxtemp_c: 20, maxtemp_f: 68, mintemp_c: 12, mintemp_f: 53.6, avgtemp_c: 16, avgtemp_f: 60.8, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-18", day: { maxtemp_c: 21, maxtemp_f: 69.8, mintemp_c: 13, mintemp_f: 55.4, avgtemp_c: 17, avgtemp_f: 62.6, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-19", day: { maxtemp_c: 19, maxtemp_f: 66.2, mintemp_c: 12, mintemp_f: 53.6, avgtemp_c: 15.5, avgtemp_f: 59.9, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-20", day: { maxtemp_c: 18, maxtemp_f: 64.4, mintemp_c: 11, mintemp_f: 51.8, avgtemp_c: 14.5, avgtemp_f: 58.1, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-21", day: { maxtemp_c: 17, maxtemp_f: 62.6, mintemp_c: 10, mintemp_f: 50, avgtemp_c: 13.5, avgtemp_f: 56.3, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 50 } },
        { date: "2025-04-22", day: { maxtemp_c: 16, maxtemp_f: 60.8, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 12.5, avgtemp_f: 54.5, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 } },
      ],
    },
  },
  "Berlin": {
    location: {
      name: "Berlin",
      country: "Germany",
      lat: 52.52,
      lon: 13.4,
    },
    current: {
      temp_c: 13,
      temp_f: 55.4,
      condition: {
        text: "Cloudy",
        icon: "cloud",
      },
      wind_kph: 18,
      wind_mph: 11.2,
      wind_dir: "NW",
      humidity: 75,
      feelslike_c: 11,
      feelslike_f: 51.8,
      uv: 3,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 10, temp_f: 50, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "09:00", temp_c: 12, temp_f: 53.6, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "12:00", temp_c: 15, temp_f: 59, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "15:00", temp_c: 16, temp_f: 60.8, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 },
        { time: "18:00", temp_c: 14, temp_f: 57.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 },
        { time: "21:00", temp_c: 12, temp_f: 53.6, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 30 },
        { time: "00:00", temp_c: 10, temp_f: 50, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 30 },
        { time: "03:00", temp_c: 9, temp_f: 48.2, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 30 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 16, maxtemp_f: 60.8, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 12.5, avgtemp_f: 54.5, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-17", day: { maxtemp_c: 17, maxtemp_f: 62.6, mintemp_c: 10, mintemp_f: 50, avgtemp_c: 13.5, avgtemp_f: 56.3, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 } },
        { date: "2025-04-18", day: { maxtemp_c: 18, maxtemp_f: 64.4, mintemp_c: 11, mintemp_f: 51.8, avgtemp_c: 14.5, avgtemp_f: 58.1, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 } },
        { date: "2025-04-19", day: { maxtemp_c: 16, maxtemp_f: 60.8, mintemp_c: 10, mintemp_f: 50, avgtemp_c: 13, avgtemp_f: 55.4, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 60 } },
        { date: "2025-04-20", day: { maxtemp_c: 14, maxtemp_f: 57.2, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 11.5, avgtemp_f: 52.7, condition: { text: "Rainy", icon: "cloud-rain" }, chance_of_rain: 70 } },
        { date: "2025-04-21", day: { maxtemp_c: 15, maxtemp_f: 59, mintemp_c: 8, mintemp_f: 46.4, avgtemp_c: 11.5, avgtemp_f: 52.7, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-22", day: { maxtemp_c: 17, maxtemp_f: 62.6, mintemp_c: 9, mintemp_f: 48.2, avgtemp_c: 13, avgtemp_f: 55.4, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 20 } },
      ],
    },
  },
  "Moscow": {
    location: {
      name: "Moscow",
      country: "Russia",
      lat: 55.75,
      lon: 37.62,
    },
    current: {
      temp_c: 5,
      temp_f: 41,
      condition: {
        text: "Snowy",
        icon: "cloud-snow",
      },
      wind_kph: 25,
      wind_mph: 15.5,
      wind_dir: "N",
      humidity: 90,
      feelslike_c: 1,
      feelslike_f: 33.8,
      uv: 1,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 1, temp_f: 33.8, condition: { text: "Snowy", icon: "cloud-snow" }, chance_of_rain: 0 },
        { time: "09:00", temp_c: 3, temp_f: 37.4, condition: { text: "Snowy", icon: "cloud-snow" }, chance_of_rain: 0 },
        { time: "12:00", temp_c: 6, temp_f: 42.8, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "15:00", temp_c: 7, temp_f: 44.6, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "18:00", temp_c: 5, temp_f: 41, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 },
        { time: "21:00", temp_c: 2, temp_f: 35.6, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "00:00", temp_c: 0, temp_f: 32, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
        { time: "03:00", temp_c: -1, temp_f: 30.2, condition: { text: "Cloudy", icon: "cloud-moon" }, chance_of_rain: 20 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 7, maxtemp_f: 44.6, mintemp_c: -1, mintemp_f: 30.2, avgtemp_c: 3, avgtemp_f: 37.4, condition: { text: "Snowy", icon: "cloud-snow" }, chance_of_rain: 0 } },
        { date: "2025-04-17", day: { maxtemp_c: 8, maxtemp_f: 46.4, mintemp_c: 0, mintemp_f: 32, avgtemp_c: 4, avgtemp_f: 39.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 } },
        { date: "2025-04-18", day: { maxtemp_c: 10, maxtemp_f: 50, mintemp_c: 2, mintemp_f: 35.6, avgtemp_c: 6, avgtemp_f: 42.8, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-19", day: { maxtemp_c: 12, maxtemp_f: 53.6, mintemp_c: 4, mintemp_f: 39.2, avgtemp_c: 8, avgtemp_f: 46.4, condition: { text: "Partly Cloudy", icon: "cloud-sun" }, chance_of_rain: 10 } },
        { date: "2025-04-20", day: { maxtemp_c: 11, maxtemp_f: 51.8, mintemp_c: 3, mintemp_f: 37.4, avgtemp_c: 7, avgtemp_f: 44.6, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 30 } },
        { date: "2025-04-21", day: { maxtemp_c: 9, maxtemp_f: 48.2, mintemp_c: 1, mintemp_f: 33.8, avgtemp_c: 5, avgtemp_f: 41, condition: { text: "Snowy", icon: "cloud-snow" }, chance_of_rain: 0 } },
        { date: "2025-04-22", day: { maxtemp_c: 8, maxtemp_f: 46.4, mintemp_c: 0, mintemp_f: 32, avgtemp_c: 4, avgtemp_f: 39.2, condition: { text: "Cloudy", icon: "cloud" }, chance_of_rain: 20 } },
      ],
    },
  },
  "Dubai": {
    location: {
      name: "Dubai",
      country: "United Arab Emirates",
      lat: 25.2,
      lon: 55.27,
    },
    current: {
      temp_c: 32,
      temp_f: 89.6,
      condition: {
        text: "Sunny",
        icon: "sun",
      },
      wind_kph: 10,
      wind_mph: 6.2,
      wind_dir: "SE",
      humidity: 45,
      feelslike_c: 34,
      feelslike_f: 93.2,
      uv: 9,
      is_day: 1,
    },
    forecast: {
      hourly: [
        { time: "06:00", temp_c: 27, temp_f: 80.6, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "09:00", temp_c: 30, temp_f: 86, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "12:00", temp_c: 33, temp_f: 91.4, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "15:00", temp_c: 34, temp_f: 93.2, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 },
        { time: "18:00", temp_c: 31, temp_f: 87.8, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "21:00", temp_c: 29, temp_f: 84.2, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "00:00", temp_c: 28, temp_f: 82.4, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
        { time: "03:00", temp_c: 27, temp_f: 80.6, condition: { text: "Clear", icon: "moon" }, chance_of_rain: 0 },
      ],
      daily: [
        { date: "2025-04-16", day: { maxtemp_c: 34, maxtemp_f: 93.2, mintemp_c: 27, mintemp_f: 80.6, avgtemp_c: 30.5, avgtemp_f: 86.9, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-17", day: { maxtemp_c: 35, maxtemp_f: 95, mintemp_c: 28, mintemp_f: 82.4, avgtemp_c: 31.5, avgtemp_f: 88.7, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-18", day: { maxtemp_c: 36, maxtemp_f: 96.8, mintemp_c: 28, mintemp_f: 82.4, avgtemp_c: 32, avgtemp_f: 89.6, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-19", day: { maxtemp_c: 37, maxtemp_f: 98.6, mintemp_c: 29, mintemp_f: 84.2, avgtemp_c: 33, avgtemp_f: 91.4, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-20", day: { maxtemp_c: 38, maxtemp_f: 100.4, mintemp_c: 30, mintemp_f: 86, avgtemp_c: 34, avgtemp_f: 93.2, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-21", day: { maxtemp_c: 38, maxtemp_f: 100.4, mintemp_c: 30, mintemp_f: 86, avgtemp_c: 34, avgtemp_f: 93.2, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
        { date: "2025-04-22", day: { maxtemp_c: 37, maxtemp_f: 98.6, mintemp_c: 29, mintemp_f: 84.2, avgtemp_c: 33, avgtemp_f: 91.4, condition: { text: "Sunny", icon: "sun" }, chance_of_rain: 0 } },
      ],
    },
  },
};

export const clothingRecommendations: Record<WeatherCondition, string> = {
  "Sunny": "Light, breathable clothing. Don't forget sunscreen and a hat!",
  "Partly Cloudy": "Light layers that you can adjust as the day goes on.",
  "Cloudy": "A light jacket or long sleeves would be comfortable today.",
  "Rainy": "Grab your umbrella and a waterproof jacket!",
  "Stormy": "Best to stay inside, but if you must go out, take a sturdy umbrella and waterproof clothing.",
  "Snowy": "Bundle up with a warm coat, hat, gloves, and waterproof boots!",
  "Clear": "Perfect evening for light layers, maybe bring a light jacket if it gets cooler."
};

export const weatherQuotes: Record<WeatherCondition, string[]> = {
  "Sunny": [
    "A day without sunshine is like, you know, night.",
    "Wherever you go, no matter what the weather, always bring your own sunshine.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "A sunny day is a smiley day.",
    "The sun always shines above the clouds."
  ],
  "Partly Cloudy": [
    "Even the darkest clouds will eventually part to reveal the sun.",
    "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
    "Behind every cloud is another cloud.",
    "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    "Clouds are the sky's imagination."
  ],
  "Cloudy": [
    "There's beauty in the silver singing river, there's beauty in the sunrise in the sky, but none of these and nothing else can match the beauty of a soul in the serenity of a cloudy day.",
    "Clouds are like thoughts. They appear out of nowhere, give a bit of shade or a bit of rain, and then disappear.",
    "The sky and the strong wind have moved the tree to talk, not the cloud.",
    "A cloudy day is no match for a sunny disposition.",
    "Don't let one cloud obliterate the whole sky."
  ],
  "Rainy": [
    "Some people feel the rain, others just get wet.",
    "The best thing one can do when it's raining is to let it rain.",
    "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.",
    "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
    "Let the rain kiss you. Let the rain beat upon your head with silver liquid drops."
  ],
  "Stormy": [
    "The storm starts when the drops start dropping. When the drops stop dropping, the storm starts stopping.",
    "After a storm comes a calm.",
    "It is only in sorrow bad weather masters us; in joy we face the storm and defy it.",
    "Storms make trees take deeper roots.",
    "You can't calm the storm, so stop trying. What you can do is calm yourself. The storm will pass."
  ],
  "Snowy": [
    "To appreciate the beauty of a snowflake it is necessary to stand out in the cold.",
    "When snow falls, nature listens.",
    "The snow doesn't give a soft white damn whom it touches.",
    "A lot of people like snow. I find it to be an unnecessary freezing of water.",
    "Snow provokes responses that reach right back to childhood."
  ],
  "Clear": [
    "The sky grew darker, painted blue on blue, one stroke at a time, into deeper and deeper shades of night.",
    "I've never seen a moon in the sky that, if it didn't take my breath away, at least misplaced it for a moment.",
    "The sky is the daily bread of the eyes.",
    "Look at the stars, see their beauty. And in that beauty, see yourself.",
    "I like the night. Without the dark, we'd never see the stars."
  ]
};

export const getRandomQuote = (condition: WeatherCondition): string => {
  const quotes = weatherQuotes[condition];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const getWeatherBackgroundClass = (condition: WeatherCondition, isDay: boolean): string => {
  if (!isDay && condition !== 'Stormy' && condition !== 'Rainy' && condition !== 'Snowy') {
    return 'bg-night-gradient';
  }
  
  switch (condition) {
    case 'Sunny':
      return 'bg-sunny-gradient';
    case 'Partly Cloudy':
      return 'bg-cloudy-gradient';
    case 'Cloudy':
      return 'bg-cloudy-gradient';
    case 'Rainy':
      return 'bg-rainy-gradient';
    case 'Stormy':
      return 'bg-stormy-gradient';
    case 'Snowy':
      return 'bg-snowy-gradient';
    case 'Clear':
      return 'bg-night-gradient';
    default:
      return 'bg-sunny-gradient';
  }
};

export const shouldShowWeatherParticles = (condition: WeatherCondition): boolean => {
  return true; // Show particles for all weather conditions
};
