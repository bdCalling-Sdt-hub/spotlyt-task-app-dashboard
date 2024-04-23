import { baseApi } from "../api/baseApi";

const getCategoryServices = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getCategoryService:builder.query({
            query:(id)=>`/service/category/single?serviceCategoryId=${id}`
        })
    })
})

export const {useGetCategoryServiceQuery} = getCategoryServices;