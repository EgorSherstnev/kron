import axios from "axios";

export const getCases = async () => {
   const response = await axios.get('https://services.it-cron.ru/api/cases', {
      headers: {
         'Accept': 'text/plain',
         'Accept-Language': 'ru'
      }
   });
   return response.data.Data;
};