// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.spotlyt.co.za/v1/',
      // baseUrl: 'http://103.145.138.54:3232/v1/',
      headers:{
          "Content-Type": "application/json",
          authorization:`Bearer ${localStorage.getItem("token")}`
      }
     
     }),
     tagTypes:[],
  endpoints: () => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = baseApi