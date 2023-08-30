import { apiSlice } from './ApiSlice'

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder ) => ({

        getAllBlogs: builder.query({
            query: () => ({
                url: '/api/blogs'
            }),
            providesTags: ['Blogs'],
            keepUnusedData: 5
        }),

        getOneBlog: (builder).query({
            query: (id) => ({
                url: '/api/blogs/' + id,
            }),
            providesTags: ['Blogs']
        }),

        postBlog: (builder).mutation({
            query: (blog) => ({
                url: '/api/blogs',
                method: 'POST',
                body: blog,
                headers: {"Content-type": "application/json"}
            }),
            invalidatesTags: ['Blogs']
        }),

        deleteBlog: (builder).mutation({
            query: (id) => ({
                url: '/api/blogs' + id,
                method: 'DELETE'
            }),
            invalidatesTags: ['Blogs']
        }),
    })
})

export const {
    useGetAllBlogsQuery,
    useGetOneBlogQuery,
    usePostBlogMutation,
    useDeleteBlogMutation
} = blogApi