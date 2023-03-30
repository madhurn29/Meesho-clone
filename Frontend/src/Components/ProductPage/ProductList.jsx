import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/ProductRedux/action'
import { Productcard} from './Productcard'
import Styles from "../../Styles/Product.module.css"
import { useLocation, useSearchParams } from 'react-router-dom'

export const ProductList = () => {
    const dispatch=useDispatch()
    const pro=useSelector((store)=>{
        return store.Productreducer.product
    })
    const location=useLocation()
    const [searchparams]=useSearchParams()
    console.log("location:",location)
    
    useEffect(() => {
      const order = searchparams.get("order");
      let paramObj={
        params:{
          category:searchparams.getAll('category'),
          _sort: order && "price",
        _order: order, //acs or desc
        }
      }
    dispatch(getProduct(paramObj))
    }, [location.search])
  return (
    
    <div className={Styles.container}>
      
        {pro.length>0 && pro.map((el)=>{
            return <Productcard key={el.id} {...el}/>
        })}
    </div>
   
  )
}

