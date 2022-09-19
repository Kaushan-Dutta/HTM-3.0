import React from "react";
import Logo from "../RoadMapImage/blockchain.gif";
import Img from "../HomeImage/roadmap.png";
import { ImLocation } from 'react-icons/im';
import Web from '../HomeImage/WebDev.jpg';
import Thapa from '../HomeImage/Thapa.jpg';
import { FaRegHeart } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';

import "./BlockChain.css";

const BlockChain = () => {
  return (
    <>
      <div className="BlockChain">
        <div className="BlockTheme">
          <div className="Gif">
            <img src={Logo} />
          </div>
          <div className="heading">
            <p>BlockChain Development</p>
          </div>
          <div className="about">
            Blockchain is an emerging field, want to get started? This roadmap
            will get you started with absolute basics to advanced concepts like
            ethereum concepts, how to connect frontend with dapp, sdk's etc.
          </div>
          
        </div>
        <div className="BlockContent ">
          <div className="title mt-5">
                <p><button>Roadmap</button></p>
          </div>
          <div className="roadmap mt-5">
            <img src={Img}/>
          </div>
        </div>
        <div className="BlockVideo mt-5">
          <div className="title mt-5">
          <p><button>Related Video</button></p>
          </div>
          <div className="videos mt-5">
          <div className="block " 
       style={{
        backgroundSize: "cover",

        backgroundImage: `url(${
          Thapa
        })`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }} >
        
        
        <div className="content" >
           <p> API CALL</p>
        {/*    <div className="dialog">
          <i><FaRegHeart/></i>
          <i><BsEyeFill/></i>
        </div> */}
        </div>
        

      </div> <div className="block " 
       style={{
        backgroundSize: "cover",

        backgroundImage: `url(${
          Thapa
        })`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }} >
        
        
        <div className="content" >
           <p> API CALL</p>
        {/*    <div className="dialog">
          <i><FaRegHeart/></i>
          <i><BsEyeFill/></i>
        </div> */}
        </div>
        

      </div> <div className="block " 
       style={{
        backgroundSize: "cover",

        backgroundImage: `url(${
          Thapa
        })`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }} >
        
        
        <div className="content" >
           <p> API CALL</p>
        {/*    <div className="dialog">
          <i><FaRegHeart/></i>
          <i><BsEyeFill/></i>
        </div> */}
        </div>
        

      </div> <div className="block " 
       style={{
        backgroundSize: "cover",

        backgroundImage: `url(${
          Thapa
        })`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }} >
        
        
        <div className="content" >
           <p> API CALL</p>
        {/*    <div className="dialog">
          <i><FaRegHeart/></i>
          <i><BsEyeFill/></i>
        </div> */}
        </div>
        

      </div>
          </div>
        </div>
      </div>
      

      
    </>
  );
};

export default BlockChain;
