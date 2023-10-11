import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers/locales';

//Acá se configura el theme de la libreria material ui

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#2C9CBF',
      },
      secondary: {
        main: '#484848',
      },
    },
  },
  esES,
);

export default theme;
