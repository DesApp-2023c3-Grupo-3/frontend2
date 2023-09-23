import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/AdminWeb/AdminWeb.sass';
import ScreenClient from './components/ScreenClient/components/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>App</h1>
            </div>
          }
        />
        <Route path="/screen" element={<ScreenClient />} />
        <Route path="/admin/*" element={<AdminWeb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
