import { baseApi } from "../api/baseApi";

const getSocialApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSocial:builder.query({
            query:()=>`/tasks/admin?type=socialMedia`
        })
    })
})

export const {useGetSocialQuery} = getSocialApi;