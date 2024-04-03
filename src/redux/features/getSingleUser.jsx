import { baseApi } from "../api/baseApi";

const getSingleUser = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUser:builder.query({
            query:(id)=>`/users/${id}`
        })
    })
})

export const {useGetUserQuery} = getSingleUser;