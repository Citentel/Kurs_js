import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'components/pages/app/App';
import NotFound from 'components/pages/notFound/NotFound';
import MainLayout from 'components/layouts/mainLayout/MainLayout';
import Login from 'components/pages/login/Login';
import Register from 'components/pages/register/Register';
import Logout from 'components/pages/logout/Logout';
import ResetCode from 'components/pages/resetCode/ResetCode';
import ResetPassword from 'components/pages/resetPassword/ResetPassword';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-code" element={<ResetCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
