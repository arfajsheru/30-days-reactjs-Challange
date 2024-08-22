import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../Data/data'
import Product from './Product'


const SearchItem = () => {
  const {term} = useParams()
  const[filterData,setFilterData] = useState([]);
  
  useEffect(() => {
    const filtersdata = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLocaleLowerCase()));
      setFilterData(data)
    } 

    filtersdata();    
   
  }, [term])
  


  return (
    <div className="search-container-detail">
      <Product items={filterData}/>
    </div>
    
  )
}

export default SearchItem