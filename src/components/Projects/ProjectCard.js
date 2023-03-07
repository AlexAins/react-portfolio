import React from "react";

function ProjectCard(props){
    console.log(props.deployed)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="card-footer text-center d-flex justify-content-evenly">
                    <a href={props.github} target="_blank" className="btn btn-primary">GitHub</a>
                    {props.deployed ? (<a href={props.deployedURL} target="_blank" className="btn btn-primary">Visit App</a>) : ("")}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;