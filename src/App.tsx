import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './components/AdminWeb/AdminWeb.sass';
import ScreenClient from './components/ScreenClient/components/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useState } from 'react';
import { setTokens } from './services/validationMiddleware';
import { useScreen } from './components/ScreenClient/store/useScreen';

function App() {
  const screenId = useScreen((state) => state.screenId);
  const setScreenId = useScreen((state) => state.setScreenId);

  const setTokensOnLogin = (
    newAccessToken: string,
    newRefreshToken: string,
  ) => {
    setTokens(newAccessToken, newRefreshToken);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/BulletinBoardClient"
          element={
            <LoginScreen
              setScreenId={setScreenId}
              setTokensOnLogin={setTokensOnLogin}
            />
          }
        />
        <Route path="/screen" element={<ScreenClient screenId={screenId} />} />
        <Route path="/admin/*" element={<AdminWeb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
