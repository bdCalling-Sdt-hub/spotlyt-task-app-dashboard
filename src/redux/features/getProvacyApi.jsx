import { baseApi } from "../api/baseApi";

const getPrivacyApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPrivacy:builder.query({
            query:()=>`/privacy`
        })
    })
})

export const {useGetPrivacyQuery} = getPrivacyApi;