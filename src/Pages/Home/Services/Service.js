import React from 'react';

const Service = ({service}) => {
    const {name, description , img} = service;
    return (
        <div className="shadow-xl card bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;