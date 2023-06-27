import { Route, Routes } from 'react-router-dom';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from 'Pages/Home/Home';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import NotFound from 'Pages/NotFound/NotFound';


import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../Services/hooks';
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';

export function App() {

 const dispatch = useDispatch();
const { isRefreshing } = useAuth();
  
  AOS.init({
    once: true,
  });
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>
      Refreshing user<Loader />
    </b>
  ) : (
    <Routes>
      <Route path="/">
        <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />} />
        <Route path="/" element={<PrivateRoute redirectTo="/login" component={<Home />} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}