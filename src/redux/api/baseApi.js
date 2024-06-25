// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.spotlyt.co.za/v1/',
      // baseUrl: 'http://103.145.138.54:3232/v1/',
      prepareHeaders: (headers, { getState }) => {
              const token = localStorage.getItem("token");
              console.log("token----=-=-=-==-=-=",token);
              if (token) {
                headers.set("Authorization", `Bearer ${token}`);
              }
              headers.set("X-Custom-Header", "foobar");
              return headers;
            },
     
     }),
     tagTypes:["TaskRegister","Nid"],
  endpoints: () => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = baseApi


// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://192.168.10.46:3032/api/v1",
//     prepareHeaders: (headers, { getState }) => {
//       const token = localStorage.getItem("token");
//       console.log("token----=-=-=-==-=-=",token);
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       headers.set("X-Custom-Header", "foobar");
//       return headers;
//     },
//   }),
//   tagTypes: ["User", "Groups", "Portfolio", "Chats", "Subscriptions"],
//   endpoints: () => ({}),
// });