import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/AdminWeb/AdminWeb.sass';
import ScreenClient from './components/ScreenClient/components/ScreenClient';
import AdminWeb from './components/AdminWeb/AdminWeb';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { useScreen } from './components/ScreenClient/store/useScreen';
import { NextUIProvider } from '@nextui-org/react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './services/keycloak/keycloack';
import PrivateRoute from './services/keycloak/ProtectedRouted';

function App() {
  const screenId = useScreen((state) => state.screenId);
  const setScreenId = useScreen((state) => state.setScreenId);

  const initOptions = {
    onLoad: 'check-sso',
  };

  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/BulletinBoardClient"
              element={<LoginScreen setScreenId={setScreenId} />}
            />
            <Route
              path="/screen"
              element={<ScreenClient screenId={screenId} />}
            />
            <Route
              path="/BulletinBoardClient/admin/*"
              element={
                <PrivateRoute>
                  <AdminWeb />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </ReactKeycloakProvider>
  );
}

export default App;
