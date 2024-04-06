import { baseApi } from "../api/baseApi";

const getVideoApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getVideo:builder.query({
            query:(currentPage)=>`/tasks/admin?type=video&page=${currentPage}`
        })
    })
})

export const {useGetVideoQuery} = getVideoApi;