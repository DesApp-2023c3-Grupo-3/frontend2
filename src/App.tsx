import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import ScreenClient from './components/ScreenClient/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';

function App() {
  return (
    <BrowserRouter>
      <h1>App</h1>
      <Routes>
        <Route path='/screen' element={<ScreenClient/>}/>
        <Route path='/admin' element={<AdminWeb/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
