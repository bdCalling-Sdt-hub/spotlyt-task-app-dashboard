import { baseApi } from "../api/baseApi";

const getAllEmployeeApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllEmployee:builder.query({
            query:({currentPage,startDate})=>`/users?role=employee&page=${currentPage}&startDate=${startDate}`
        })
    })
})

export const {useGetAllEmployeeQuery} = getAllEmployeeApi;