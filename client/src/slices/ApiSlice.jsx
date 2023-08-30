import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerpath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({})
})

export default apiSlice