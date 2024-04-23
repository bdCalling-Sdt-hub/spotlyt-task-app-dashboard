import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCategoryServiceQuery } from '../../../redux/features/getCategoryServices';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import baseURL from '../../../config';

const AddCategoryService = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    console.log(id);
    const {data ,isLoading,isSuccess} = useGetCategoryServiceQuery(id);
    console.log(data);
    if(isLoading){
        return <Loading/>
    }

const handleClick = (id,id2) =>{
    console.log(id);
    navigate(`/categoryService/edit/${id}?serviceCategoryId=${id2}`)
}

const handleAddCategory = () =>{
    console.log(id);
    navigate(`/categoryService/add/${id}`)
}

const handleDeleteClick = async (id) =>{
    console.log(id);
    try {
        const response = await baseURL.delete(`service/category/single?id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        console.log(response);
        if(response?.status == 200){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: response?.data?.message,
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                window.location.reload()
            },1600)
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: error?.response?.data?.message,
            footer: '<a href="#">Why do I have this issue?</a>',
        })
    }
}
    return (
        <div className='mt-10'>
            <span onClick={handleAddCategory} className='border-2 py-4 px-4 border-[green] rounded-md ml-[24px] my-10 text-xl font-medium text-[green] mt-10 cursor-pointer'>Add Category Service</span>
            <div className='grid grid-cols-3 gap-4 my-10'>
            {
                data?.data?.attributes?.map((item,index) => (
                    <div key={index} className="ml-[24px] overflow-auto border-2 px-5 py-5 border-[green] rounded-md"> 
                        <ul>
                            <li className='text-xl font-bold'>{`${item?.name} --> ${item?.subTitle} R-${item?.price}`}</li>
                            <li className='text-xl font-medium'>Min quantity Can Buy : {item?.min}</li>
                            <li className='text-xl font-medium'>Max quantity Can Buy : {item?.max}</li>
                            <p onClick={()=> handleClick(item?.serviceCategoryId,item?._id)} className='bg-[green] text-white text-xl text-center mt-5 py-3 rounded-md cursor-pointer'>EDIT SERVICE</p>
                            <p onClick={()=>handleDeleteClick(item?._id)} className='bg-[red] text-white text-xl text-center mt-5 py-3 rounded-md cursor-pointer'>DELETE SERVICE</p>
                        </ul>
                    
                    </div>
                ))
            }
            </div>
            
        </div>
    );
}

export default AddCategoryService;
