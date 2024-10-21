import React from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import DataContext from '../DataContext'
import './component.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Bollywood = () => {


  const[visible,setVisible] = useState(5);

  const data = useContext(DataContext);
  console.log(data);

  const bollywoodData = data.filter((item)=>item.category==="Bollywood");
  console.log(bollywoodData);

  const handleLoad=()=>{
    setVisible((prev)=>prev+5)
  }

  return (
    <>
    <Navbar/>

    {bollywoodData.slice(0,visible).map((item)=>(
      <div>
     <Link to={`/detail/${item.id}`}> <img src={item.img_url} alt={item.title} className='bollywood-image'/>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </Link>
      </div>

    ))}

    <button onClick={handleLoad}>LoadMore</button>

    </>
  )
}

export default Bollywood

