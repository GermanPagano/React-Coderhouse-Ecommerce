import React from 'react';

const ButtonsCard = ({ text , img }) => {
    return (
        <div className="col-lg-3">
        <a href={`/${text}`}  style={{ textDecoration:'none' , color: 'black'}} > 
            <div className="card p-1 ">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename">{text}</div>
                    <div><img src={img} height="100" width="100"  alt={text}/></div>
                </div>
            </div>
            </a>
        </div>
    );
}

export default ButtonsCard;
