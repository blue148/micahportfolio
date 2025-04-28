import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // 🔥 Notice it's App, not Home
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* 🔥 App is the Router that handles Home + CaseStudy */}
  </StrictMode>
);