import axios from 'axios';

export const asCommissions = {
    getAll: async function() {
        try {
            const response = await axios.get(`http://186.12.145.198:4000/course/download-template
            `, { responseType: 'blob' });

            const blob = new Blob([response.data], { type: response.headers['content-type'] });

            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.click();
            return true;
        } catch (error) {
            return false;
        }
    }
};