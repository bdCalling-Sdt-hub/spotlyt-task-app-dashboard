import { baseApi } from "../api/baseApi";

const getAllUserApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUser:builder.query({
            query:({currentPage,startDate})=>`/users?role=client&page=${currentPage}&startDate=${startDate}`
        })
    })
})

export const {useGetAllUserQuery} = getAllUserApi;