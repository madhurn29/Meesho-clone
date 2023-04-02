
import axios from "axios"
import { ADMIN_PATCH_PRODUCT_SUCCESS, ADMIN_POST_PRODUCT__SUCCESS, ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS } from "../ActionTypes"



export const getAdminProductSuccess=(payload)=>{
    return{type:ADMIN_PRODUCT_SUCCESS,payload}
}

export const postAdminProductSuccess = (payload)=>{
    return{type:ADMIN_POST_PRODUCT__SUCCESS,payload}
};

export const adminProductRequest = ()=>{
    return {type:ADMIN_PRODUCT_REQUEST}
}

export const adminProductFailure=()=>{
    return {type:ADMIN_PRODUCT_FAILURE}
}


export const getProduct=(category)=>(dispatch)=>{
    dispatch(adminProductRequest())
    console.log("request")
    axios.get(`https://long-lime-fly-tux.cyclic.app/products?category=${category}`).then((res)=>{
        // console.log(res.data)
        dispatch(getAdminProductSuccess(res.data));
        console.log("product")
    })
    .catch((err)=>{
        dispatch(adminProductFailure())
    })

}


export const editProduct=(id,newData)=>(dispatch)=>{
    dispatch(adminProductRequest())
    axios.patch(`https://long-lime-fly-tux.cyclic.app/products/update/${id}`,newData,{
        headers:{
            Authorization:`${localStorage.getItem("admintoken")}`
        },
    })
    .then (()=>{
        dispatch({type:ADMIN_PATCH_PRODUCT_SUCCESS}).catch(()=>{dispatch(adminProductFailure())})
    })
}