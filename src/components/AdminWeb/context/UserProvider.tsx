import { createContext, ReactNode, useEffect, useState } from 'react';
import { userApi } from '../../../services/users';
import keycloak from '../../../services/keycloak/keycloack';

interface UserContextType {
  user: any[];
  setUser: React.Dispatch<any[]>;
}

export const UserContext = createContext<UserContextType>({
  user: [],
  setUser: () => {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const sub = keycloak.tokenParsed?.sub || '';

    userApi
      .getBySub(sub)
      .then((response) => {
        setUser(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
