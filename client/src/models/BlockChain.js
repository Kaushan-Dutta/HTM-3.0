import React from "react";
import Logo from "../RoadMapImage/blockchain.gif";
import Img from "../HomeImage/roadmap.png";
import { ImLocation } from 'react-icons/im';
import Web from '../HomeImage/WebDev.jpg';

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
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
            <div className="item">
              <img src={Web}/>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default BlockChain;
