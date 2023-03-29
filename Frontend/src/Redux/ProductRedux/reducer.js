import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actiontype";

const initialState={
    product:[],
    isLoading:false,
    isError:false,
}
// console.log("product:",product)
export const reducer=(state=initialState,{type,payload})=>{
    console.log("payload:",payload)
    
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,product:payload}
        case GET_PRODUCT_FAILURE:
            return {...state,isError:true,isLoading:false}
        default:
            return state;
    }
    
};