import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './components/AdminWeb/AdminWeb.sass';
import ScreenClient from './components/ScreenClient/components/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useState } from 'react';
import { setTokens } from './services/validationMiddleware';

function App() {
  const [currentScreenId, setCurrentScreenId] = useState(1);

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
          path="/"
          element={
            <LoginScreen
              setScreenId={setCurrentScreenId}
              setTokensOnLogin={setTokensOnLogin}
            />
          }
        />
        <Route
          path="/screen"
          element={<ScreenClient screenId={currentScreenId} />}
        />
        <Route path="/admin/*" element={<AdminWeb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
