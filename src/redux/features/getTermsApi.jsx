import { baseApi } from "../api/baseApi";

const getTermsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getTerms:builder.query({
            query:()=>`/terms`
        })
    })
})

export const {useGetTermsQuery} = getTermsApi;