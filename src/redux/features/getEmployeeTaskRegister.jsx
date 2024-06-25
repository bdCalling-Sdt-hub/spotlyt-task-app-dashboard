import { baseApi } from "../api/baseApi";

const getEmployeeTaskRegisterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     getEmployeeTaskRegister:builder.query({
            query:(currentPage)=>`/tasks/register/admin?status=submitted&limit=10&page=${currentPage}`,
            providesTags:["TaskRegister"],

        })
    
    })
})

export const {useGetEmployeeTaskRegisterQuery} = getEmployeeTaskRegisterApi;