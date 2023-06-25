import Home from 'Pages/Home/Home';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from 'Pages/NotFound/NotFound';

export function App() {
  AOS.init({
    once: true,
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}