import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const attractionApi = createApi({
    reducerPath: 'attractionApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.mecallapi.com/api/' }),
    endpoints: (builder) => ({
        getAllAttraction: builder.query({
            query: () => `th/attractions`,
        }),
        getAttractionByID: builder.query({
            query: (id) => `th/attractions/${id}`,
        }),
    }),

})

export const { useGetAllAttractionQuery, useGetAttractionByIDQuery } = attractionApi