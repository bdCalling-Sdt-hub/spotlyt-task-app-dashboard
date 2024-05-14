import { baseApi } from "../api/baseApi";

const getAllEmployeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployee: builder.query({
            query: ({ currentPage, startDate }) => {
                // Ensure currentPage and startDate are defined
                currentPage = currentPage|| 1; // Set default value for currentPage
                startDate = startDate || ""; // Set default value for startDate
                return `/users?role=employee&page=${currentPage}&startDate=${startDate}`;
            }
        })
    })
});

export const { useGetAllEmployeeQuery } = getAllEmployeeApi;
