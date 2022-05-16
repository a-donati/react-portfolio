import React, { useState } from "react";

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const techs = currentProject.technologies;
    const appLink = currentProject.deployed;
    const gitLink = currentProject.repository;
    const imageAlt = currentProject.imageAlt

    return (

        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-8 mb-3 d-flex align-items-stretch">
                    <div className="card">
                        <img src={require(`../../images/${image}`)} className="card-img-top" className="card-img-top"
                            alt={imageAlt} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {name}<a href={gitLink} target="_blank"><i
                                    className="fab fa-github m-2"> </i></a>
                            </h5>
                            <p className="card-text mb-4">
                                {description}
                            </p>
                            <p>{techs}</p>
                            <a href={appLink} target="_blank"
                                className="btn btn-dark mx-auto btn-outline-light">Deployed site</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Project;