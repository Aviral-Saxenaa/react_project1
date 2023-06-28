import React from "react";

function Card(props) {
        return (
                <>
                        <div className="container">
                                <div className="cards">
                                        <div className="card">
                                                <img
                                                        src={props.imgsrc}
                                                        alt="cad"
                                                        className="card_img"
                                                />
                                                <div className="card_info">
                                                        <span className="card_category">
                                                                {props.title}
                                                        </span>
                                                        <h3 className="card_title">
                                                                {props.sname}
                                                        </h3>
                                                        <button>
                                                                <a
                                                                        href={props.slink}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                >
                                                                        WATCH NOW
                                                                </a>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
export default Card;
