import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Blog {
    id: number
    title: string
    author: string
}

const blogApis = createApi({
    reducerPath: 'blogApis',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query<Blog[],void>({
            query: () => ({url: "blogs", method: "GET"}),
        }),
        createBlog: builder.mutation({
            query: (newPost: Blog) => ({url: "blogs", method: "POST", body: newPost})
        })
    }),
    refetchOnReconnect: true,
    refetchOnFocus: true
})

// Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'
export type { Blog }
export const { useGetBlogsQuery, useCreateBlogMutation } = blogApis
export default blogApis