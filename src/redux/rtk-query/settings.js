import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com/",
});



const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });


// создаем api const потом от нее запрос сделаем настройка
export const api = createApi({
  // называния любого 
  reducerPath: "productApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
