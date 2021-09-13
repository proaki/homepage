import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <a href={props.link} className="card__link">
            <div className="card">     

                <div className="kari">
                    <img 
                        className="card__img" 
                        src={props.img} 
                        alt="" 
                        />
                </div>           
                <div className="card__content">
                    <div className="card__title">
                        {props.title}
                    </div>
                    <div className="card__lead">
                        {props.lead}
                    </div>
                </div>
            </div>
        </a>

    );
}

export default Card