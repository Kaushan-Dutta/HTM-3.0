import React from "react";
import Contents from "./contents";
import Logo from "../HomeImage/WebDev.jpg";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Home.css";
import { BsFileArrowUpFill } from "react-icons/bs";

const Home = (props) => {
  return (
    <>
      

      <div className="Roadmaps mt-5 ">
        {Contents.filter((object)=>{
          if(props.value==""){return object}
          else if(object.value.toLowerCase().includes(props.value.toLowerCase())){
            return object
          }
        }).map((object, index) => {
          return (
            <>
              <div className="container mb-5">

                <div className="image">
                  
                  <img src={object.source} />
                </div>

                <div className="contents">
                  <div className="value ">
                    <b>{object.value}</b>
                  </div>

                  <div className="content mt-2">
                    {object.content}
                  </div>

                  <div className="link mt-2">
                    <NavLink to="/about" style={{ textDecoration: "none" }}>
                      Roadmap&nbsp;
                      <span>
                        <HiOutlineArrowNarrowRight
                          style={{
                            position: "relative",
                            top: "1vh",
                            fontSize: "20px",
                          }}
                        />
                      </span>
                    </NavLink>
                  </div>

                </div>

              </div>
            </>
          );
        })}

      </div>

      
      <div className="goUp">
        <BsFileArrowUpFill />
      </div>
    </>
  );
};

export default Home;
