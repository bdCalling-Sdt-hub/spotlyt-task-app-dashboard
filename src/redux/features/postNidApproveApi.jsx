import { baseApi } from "../api/baseApi";

const postNidApproveApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postNidApprove: builder.mutation({
        query: (id) => {
            console.log("aimannnnnnnnnnnnnnnnnn",id);
            return {
              url: `/users/nidVerifyApproval?id=${id}`,
              method: 'POST',
              body:'',
          } 
        },
        invalidatesTags: ["Nid"],
      }),
    }),
   
  });
  
  export const { usePostNidApproveMutation } = postNidApproveApi;