import { baseApi } from "../api/baseApi";

const postNidRejectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postNidReject: builder.mutation({
        query: (id) => {
            console.log("aimannnnnnnnnnnnnnnnnn",id);
            return {
              url: `/users/nidVerifyReject?id=${id}`,
              method: 'POST',
              body:'',
          } 
        },
        invalidatesTags: ["Nid"],
      }),
    }),
   
  });
  
  export const { usePostNidRejectMutation } = postNidRejectApi;