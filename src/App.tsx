import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
<<<<<<< HEAD
        <Route path="/" element={<LoginScreen setScreenId={setCurrentScreenId}/>}/>
        <Route path="/screen" element={<ScreenClient screenId={currentScreenId}/>} />
        <Route path="/admin/*" element={<AdminWeb/>} />
=======
        <Route
          path="/"
          element={<LoginScreen setScreenId={setCurrentScreenId} />}
        />
        <Route
          path="/screen"
          element={<ScreenClient screenId={currentScreenId} />}
        />
        <Route path="/admin/*" element={<AdminWeb />} />
>>>>>>> bf0eaf89fe6b36e069738dd71e654d7d788b4230
      </Routes>
    </BrowserRouter>
  );
}

export default App;
