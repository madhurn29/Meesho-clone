
import axios from "axios"
import { ADMIN_DELETE_PRODUCT_SUCCESS, ADMIN_PATCH_PRODUCT_SUCCESS, ADMIN_POST_PRODUCT__SUCCESS, ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS } from "../ActionTypes"



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


export const getProduct=(params)=>(dispatch)=>{
    dispatch(adminProductRequest())
    console.log("request")
    axios.get(`https://long-lime-fly-tux.cyclic.app/products`,params).then((res)=>{
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
        dispatch({type:ADMIN_PATCH_PRODUCT_SUCCESS})
    }).catch(()=>{dispatch(adminProductFailure())})
}
export const DeleteProduct=(id)=>(dispatch)=>{
    dispatch(adminProductRequest())
    axios.delete(`https://long-lime-fly-tux.cyclic.app/products/delete/${id}`,{
        headers:{
            Authorization:`${localStorage.getItem("admintoken")}`
        },
    })
    .then ((res)=>{
        console.log(res.data);
        dispatch({type:ADMIN_DELETE_PRODUCT_SUCCESS})
    }).catch(()=>{dispatch(adminProductFailure())})
}


export const addProduct=(payload)=>(dispatch)=>{
        dispatch(adminProductRequest())
        axios.post(`https://long-lime-fly-tux.cyclic.app/products/add`,payload,{
        headers:{
            Authorization:`${localStorage.getItem("admintoken")}`
        },
    }).then((res)=>{
            console.log(res.data)
            dispatch(postAdminProductSuccess(res.data))
        }).catch((err)=>{
            dispatch(adminProductFailure())
        })
}