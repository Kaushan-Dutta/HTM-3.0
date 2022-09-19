import React,{useState} from 'react';
import { FcSearch } from 'react-icons/fc';
import { MdLightMode } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import { BsFileArrowUpFill } from 'react-icons/md';
import Doubt from '../HomeImage/doubt-solving.png';
import Video from '../HomeImage/online-course.png';
import Course from '../HomeImage/video-tutorials.png';

import './Navigation.css';
import Home from "./Home";


const Navigation = () => {
  const [theme,chngTheme]=useState(0);

  const [data,setData]=useState('');

  const [help,setHelp]=useState(0);
  
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
     <div className='help' onClick={()=>{
      if(help==0){setHelp(1)}
      else{setHelp(0)}
     }}>
            <button><GiHelp/></button>
          </div>
          <div className='content mt-2'>
            Support
          </div>
     </div>
     <div className="pop-up" style={{display:help==1?" ":"none"}}>
        <div className="content">
            <div className="close-btn" onClick={()=>{
      if(help==0){setHelp(1)}
      else{setHelp(0)}
     }} >+</div>
            <h2>Get up skilled right now!</h2>
            <div className="inner-content">
                <div className="item">
                    <img src={Video} alt="Live classes" className="pop-up-vc"/>
                    <p>Live Classes according to convenience.</p>
                </div>
                <div className="item">
                    <img src={Course} alt="Premium Courses" className="pop-up-vc"/>
                    <p>Premium Courses developed by industry experts.</p>
                </div>
                <div className="item">
                    <img src={Doubt} alt="doubt clearance" className="pop-up-vc"/>
                    <p>Live 1-on-1 Doubt Clearing Sessions</p>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Navigation