import { createContext, ReactNode, useState } from 'react';

interface TablaContextType {
  datasJSON: any[];
  setDatasJSON: React.Dispatch<React.SetStateAction<any[]>>;
  currentPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

export const TablaContext = createContext<TablaContextType>({
  datasJSON: [],
  setDatasJSON: () => {},
  currentPages: 1,
  setCurrentPage: () => {},
  rowsPerPage: 7,
  setRowsPerPage: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  pages: 0,
  setPages: () => {},
});

function TablaProvider({ children }: { children: ReactNode }) {
  const [datasJSON, setDatasJSON] = useState<any[]>([]);
  const [currentPages, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [totalItems, setTotalItems] = useState(0);
  const [pages, setPages] = useState(0);

  return (
    <TablaContext.Provider
      value={{
        datasJSON,
        setDatasJSON,
        currentPages,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage,
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
