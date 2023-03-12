import React from "react";
import avatar from "../../assets/peeps-avatar-alpha.png"

function HomeJumbo(){
    return(
        <div className="container-fluid" id="titleScreen">
            <div className="row align-items-center">
                <div className="col-6">
                    <img src={avatar} alt="Avatar of a male" className="w-100"/>
                </div>
                <div className="col-6">
                    <h1>Hi, I'm Alex</h1>
                    <p>Junior Frontend Developer </p>
                    <p>A recent Masters graduate looking to pursue a career in Frontend Development</p>
                </div>
            </div>
        </div>
    )
}

export default HomeJumbo;