import { baseApi } from "../api/baseApi";

const getSingleEmployeeTaskRegisterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     getSingleEmployeeTaskRegister:builder.query({
            query:(id)=>`/tasks/register/single?id=${id}`
        })
    })
})

export const {useGetSingleEmployeeTaskRegisterQuery} = getSingleEmployeeTaskRegisterApi;