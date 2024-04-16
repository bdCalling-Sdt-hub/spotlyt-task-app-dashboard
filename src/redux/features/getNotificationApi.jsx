import { baseApi } from "../api/baseApi";

const getNotificationApi = baseApi.injectEndpoints({
     endpoints:(builder)=>({
          getNotification:builder.query({
               query:(currentPage)=>`/notification/admin?page=${currentPage}&limit=10&sortBy=createdAt:desc`
          })
     })
})

export const {useGetNotificationQuery} = getNotificationApi;