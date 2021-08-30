import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chucknorris.io/jokes/' }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query({
      query: () => `random`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomJokeQuery  } = pokemonApi
