import axios from 'axios';
import { ROUTES_RELATIVE } from '../routes/route.relatives';
import Commission from '../components/AdminWeb/Pages/Comisiones/Comisiones'

export const asCommissions = {
    getAll: async function() {
        try {
            const response = await axios.get(ROUTES_RELATIVE.downloadCommission, { responseType: 'blob' });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.click();
            return true;
        } catch (error) {
            return false;
        }
    },
    create: async function() {
        try {
            const response = await axios.post(ROUTES_RELATIVE.excelPreview, Commission);
            if (response.status === 200) {
                console.log('Solicitud POST exitosa');
            } else {
                console.log('Error en la solicitud POST');
            }
        } catch (error) {
            console.log('Error en la solicitud POST', error);
        }
    }
};