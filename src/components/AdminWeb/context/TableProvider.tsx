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
  currentPagesC: number;
  setCurrentPageC: React.Dispatch<React.SetStateAction<number>>;
  currentPagesU: number;
  setCurrentPageU: React.Dispatch<React.SetStateAction<number>>;
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
  pagesC: number;
  setPagesC: React.Dispatch<React.SetStateAction<number>>;
  pagesU: number;
  setPagesU: React.Dispatch<React.SetStateAction<number>>;
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
  currentPagesC: 1,
  setCurrentPageC: () => {},
  currentPagesU: 1,
  setCurrentPageU: () => {},
  rowsPerPage: 7,
  setRowsPerPage: () => {},
  rowsPerPageC: 7,
  setRowsPerPageC: () => {},
  rowsPerPageU: 7,
  setRowsPerPageU: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  pages: 0,
  setPages: () => {},
  pagesC: 0,
  setPagesC: () => {},
  pagesU: 0,
  setPagesU: () => {},
});

function TablaProvider({ children }: { children: ReactNode }) {
  const [advertisingJSON, setAdvertisingJSON] = useState<any[]>([]);
  const [commissionsJSON, setCommissionsJSON] = useState<Commission[]>([]);
  const [usersJSON, setUsersJSON] = useState<any[]>([]);
  const [currentPages, setCurrentPage] = useState(1);
  const [currentPagesC, setCurrentPageC] = useState(1);
  const [currentPagesU, setCurrentPageU] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [rowsPerPageC, setRowsPerPageC] = useState(7);
  const [rowsPerPageU, setRowsPerPageU] = useState(7);
  const [totalItems, setTotalItems] = useState(0);
  const [pages, setPages] = useState(0);
  const [pagesC, setPagesC] = useState(0);
  const [pagesU, setPagesU] = useState(0);

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
        currentPagesC,
        setCurrentPageC,
        currentPagesU,
        setCurrentPageU,
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
        pagesC,
        setPagesC,
        pagesU,
        setPagesU,
      }}
    >
      {children}
    </TablaContext.Provider>
  );
}

export default TablaProvider;
