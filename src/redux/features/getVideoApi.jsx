import { baseApi } from "../api/baseApi";

const getVideoApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getVideo:builder.query({
            query:()=>`/tasks/admin?type=video`
        })
    })
})

export const {useGetVideoQuery} = getVideoApi;