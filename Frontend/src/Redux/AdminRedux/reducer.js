import { ADMIN_PATCH_PRODUCT_SUCCESS, ADMIN_POST_PRODUCT__SUCCESS, ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS } from "../ActionTypes"


const initialState ={
    isLoading:false,
    products :[],
    isError:false
}

export const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ADMIN_PRODUCT_REQUEST:
            return{...state,isLoading:true}
        case ADMIN_PRODUCT_SUCCESS:
            return{...state,isLoading:false,products:payload}
        case ADMIN_POST_PRODUCT__SUCCESS:
            return{...state,isLoading:false}
        case ADMIN_PATCH_PRODUCT_SUCCESS:
            return{...state,isLoading:false}
        case ADMIN_PRODUCT_FAILURE:
            return{...state,isLoading:false,isError:true}
        default:
            return state
    }
}