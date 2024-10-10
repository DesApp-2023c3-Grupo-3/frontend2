import { createContext, ReactNode, useState } from 'react';
import { Commission } from '../types/customTypes';

interface TablaContextType {
  advertisingJSON: any[];
  setAdvertisingJSON: React.Dispatch<React.SetStateAction<any[]>>;
  commissionsJSON: Commission[];
  setCommissionsJSON: React.Dispatch<React.SetStateAction<Commission[]>>;
  usersJSON: any[];
  setUsersJSON: React.Dispatch<React.SetStateAction<any[]>>;
  currentPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPageC: number;
  setRowsPerPageC: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPageU: number;
  setRowsPerPageU: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

export const TablaContext = createContext<TablaContextType>({
  advertisingJSON: [],
  setAdvertisingJSON: () => {},
  commissionsJSON: [],
  setCommissionsJSON: () => {},
  usersJSON: [],
  setUsersJSON: () => {},
  currentPages: 1,
  setCurrentPage: () => {},
  rowsPerPage: 7,
  setRowsPerPage: () => {},
  rowsPerPageC: 12,
  setRowsPerPageC: () => {},
  rowsPerPageU: 3,
  setRowsPerPageU: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  pages: 0,
  setPages: () => {},
});

function TablaProvider({ children }: { children: ReactNode }) {
  const [advertisingJSON, setAdvertisingJSON] = useState<any[]>([]);
  const [commissionsJSON, setCommissionsJSON] = useState<Commission[]>([]);
  const [usersJSON, setUsersJSON] = useState<any[]>([]);
  const [currentPages, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [rowsPerPageC, setRowsPerPageC] = useState(12);
  const [rowsPerPageU, setRowsPerPageU] = useState(3);
  const [totalItems, setTotalItems] = useState(0);
  const [pages, setPages] = useState(0);

  return (
    <TablaContext.Provider
      value={{
        advertisingJSON,
        setAdvertisingJSON,
        commissionsJSON,
        setCommissionsJSON,
        usersJSON,
        setUsersJSON,
        currentPages,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage,
        rowsPerPageC,
        setRowsPerPageC,
        rowsPerPageU,
        setRowsPerPageU,
        totalItems,
        setTotalItems,
        pages,
        setPages,
      }}
    >
      {children}
    </TablaContext.Provider>
  );
}

export default TablaProvider;
