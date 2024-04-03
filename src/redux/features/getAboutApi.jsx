import { baseApi } from "../api/baseApi";

const getAboutApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAbout:builder.query({
            query:()=>`/about`
        })
    })
})

export const {useGetAboutQuery} = getAboutApi;