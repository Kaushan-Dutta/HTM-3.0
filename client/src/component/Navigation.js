import React,{useState} from 'react';
import { FcSearch } from 'react-icons/fc';
import { MdLightMode } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import { BsFileArrowUpFill } from 'react-icons/md';

import './Navigation.css';
import Home from "./Home";


const Navigation = () => {
  const [theme,chngTheme]=useState(0);

  const [data,setData]=useState('');
  
  const Theme=()=>{
    if(theme==0)
    {chngTheme(1)}
    else
    {
      chngTheme(0)
    }
  }
  const setValue=(event)=>{
        setData(event.target.value);
  }
  return (
   <>
     <div className='Heading'>
          <div className='searchBar'>
            <button><FcSearch /></button><span><input type="text" placeholder='Search for topic...' onChange={setValue} value={data}/></span>
          </div>
     </div>
     <Home value={data}/>

     <div className='Theme'>
          <div className='theme'>
            <button onClick={Theme}>{theme==0?<MdDarkMode/>:<MdLightMode />}</button>
          </div>
          <div className='content mt-2'>
            Change Theme
          </div>
     </div>
     <div className='Help'>
     <div className='help'>
            <button><GiHelp/></button>
          </div>
          <div className='content mt-2'>
            Support
          </div>
     </div>
   </>
  )
}

export default Navigation