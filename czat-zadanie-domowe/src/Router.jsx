import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/pages/app/App';
import MyProfile from './components/pages/myProfile/MyProfile';
import NotFound from './components/pages/notFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/me" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
