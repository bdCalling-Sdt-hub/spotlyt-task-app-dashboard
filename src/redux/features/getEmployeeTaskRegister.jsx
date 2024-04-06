import { baseApi } from "../api/baseApi";

const getEmployeeTaskRegisterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     getEmployeeTaskRegister:builder.query({
            query:()=>`/tasks/register/admin?status=submitted&page=1&limit=10`
        })
    })
})

export const {useGetEmployeeTaskRegisterQuery} = getEmployeeTaskRegisterApi;