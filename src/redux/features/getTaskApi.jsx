import { baseApi } from "../api/baseApi";

const getSocialApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSocial:builder.query({
            query:(currentPage)=>`/tasks/admin?type=socialMedia&page=${currentPage}`
        })
    })
})

export const {useGetSocialQuery} = getSocialApi;