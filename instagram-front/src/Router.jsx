import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/pages/home/Home';
import Dashboard from 'components/pages/dashboard/Dashboard';
import NotFound from 'components/pages/notFound/NotFound';
import MainLayout from 'components/layouts/mainLayout/MainLayout';
import Login from 'components/pages/login/Login';
import Register from 'components/pages/register/Register';
import ResetCode from 'components/pages/resetCode/ResetCode';
import ResetPassword from 'components/pages/resetPassword/ResetPassword';
import Profile from 'components/pages/profile/Profile';
import EditProfile from 'components/pages/editProfile/EditProfile';
import { MainContextProvider } from 'contexts/main';
import AddPost from './components/pages/addPost/AddPost';

function Router() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-code" element={<ResetCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/edit-profilie" element={<EditProfile />} />
            <Route path="/create" element={<AddPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default Router;
