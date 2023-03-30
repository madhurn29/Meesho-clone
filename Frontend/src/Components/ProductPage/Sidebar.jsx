import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = () => {
  const [searchparams,setSearchparams]=useSearchParams()
  let initialState=searchparams.getAll("category")
  const initialOrder = searchparams.get("order");
  const [category, setCategory] = useState(initialState || []); // [motivational]
  const [order, setOrder] = useState(initialOrder || "");


  const handleFilter=(e)=>{
    let newCategory=[...category];

    if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value,1))
    }else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
  const params={
    category
  }
  order && (params.order = order);
  setSearchparams(params)
  }, [category,order])
  return (
    <div>
      
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" onChange={handleFilter} checked={category.includes("Mens")} value="Mens"/>
        <label>Mens</label>
      </div>
      <div>
      <input type="checkbox" onChange={handleFilter} value="Jewelery" checked={category.includes("Jewelery")}/>
        <label>Jewelery</label>
      </div>
      <div>
      <input type="checkbox" onChange={handleFilter} value="Electronics" checked={category.includes("Electronics")}/>
        <label>Electronics</label>
      </div>
      <div>
      <input type="checkbox" onChange={handleFilter} value="Womens" checked={category.includes("Womens")}/>
        <label>Womens</label>
      </div>
      <h3>Sort By order</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  )
}
