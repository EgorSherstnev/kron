import { createStore, createEffect } from 'effector';
import { getCases } from '../api/casesApi';

export const fetchCasesFx = createEffect(async () => {
   const data = await getCases();
   if (!Array.isArray(data)) {
      throw new Error('API returned data is not an array');
   }
   return data;
});

export const $cases = createStore([])
   .on(fetchCasesFx.doneData, (_, cases) => cases);