import { createContext, ReactNode, useEffect, useState } from 'react';
import { userApi } from '../../../services/users';
import keycloak from '../../../services/keycloak/keycloack';

interface UserContextType {
  username: string;
  iduser: number;
  rol: string;
  roleId: number;
  user?: any;
}

export const UserContext = createContext<UserContextType>({
  username: '',
  iduser: 0,
  rol: '',
  roleId: 0,
  user: null,
});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const sub = keycloak.tokenParsed?.sub || '';

    userApi
      .getBySub(sub)
      .then((r) => {
        setUser(r.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const username = user?.name || 'Usuario';
  const iduser = user?.id || 0;
  const rol = user?.role?.name || '';
  const roleId = user?.role?.id || 0;

  return (
    <UserContext.Provider
      value={{
        username,
        iduser,
        rol,
        roleId,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
