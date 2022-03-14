import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './axios';

import { ThemeProvider } from './context/ThemeContext'
import { WeatherProvider } from './context/WeatherContext';

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
