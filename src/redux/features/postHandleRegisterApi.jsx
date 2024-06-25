import { baseApi } from "../api/baseApi";

const postHandleRegisterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postHandleRegister: builder.mutation({
        query: ({id,status}) => {
            console.log("aimannnnnnnnnnnnnnnnnn",{id,status});
            return {
              url: `/tasks/register?status=${status}&id=${id}`,
              method: 'PUT',
              body:'',
          } 
        },
        invalidatesTags: ["TaskRegister"],
      }),
    }),
   
  });
  
  export const { usePostHandleRegisterMutation } = postHandleRegisterApi;