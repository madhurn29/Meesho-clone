import React from 'react'
import { ProductList } from './ProductList'
import { Sidebar } from './Sidebar'
import Styles from '../../Styles/Products.module.css'
export const Product = () => {
  return (
    <div className={Styles["pro-filter-container"]}>
        <div className={Styles["filter-component"]}>
            <Sidebar/>
        </div>
        <div className={Styles["pro-list"]}>
            <ProductList/>
        </div>
    </div>
  )
}
