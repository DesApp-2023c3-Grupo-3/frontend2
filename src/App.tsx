import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './components/AdminWeb/AdminWeb.sass';
import ScreenClient from './components/ScreenClient/components/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useState } from 'react';

function App() {
  const [currentScreenId, setCurrentScreenId] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginScreen setScreenId={setCurrentScreenId} />}
        />
        <Route
          path="/screen"
          element={<ScreenClient screenId={currentScreenId} />}
        />
        <Route path="/admin" element={<Navigate to="/admin/advertising" />} />
        <Route path="/admin/*" element={<AdminWeb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
