import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import '../css/cards.css'

const Cards = ({ imageURL, title, pre, val, parc }) => {
    return (
        <div className="card">
            <div className="des"><IoMdHeartEmpty className="d"/></div>
            <img src={imageURL} alt="IMG" className='imagemProdutos' />
            <div className="tituloProduto">{title}</div>
            <div className="pre">{pre}</div>
            <div className="val">{val}</div>
            <div className="parc">{parc}</div>
        </div>
    );
}

export default Cards;