import { useContext } from 'react';
import { TablaContext } from '../context/TableProvider';

export const useTabla = () => {
  const context = useContext(TablaContext);
  if (!context) {
    throw new Error('useTabla debe usarse dentro de un TablaProvider');
  }
  return context;
};
