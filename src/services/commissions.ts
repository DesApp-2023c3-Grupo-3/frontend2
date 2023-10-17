import { instance } from "./base.api.url";
import axios from 'axios';
import fs from "fs";

export const asCommissions = {
    getAll: async function() {
      const response = await axios.get(`${instance}/download-template`, { responseType: 'arraybuffer' });
      const fileData = Buffer.from(response.data, 'binary');

      await fs.writeFile(fileData, 'response', () => {
        console.log("Done")
      })//.catch((err: any) => console.log(err))
    }
};