import React from "react"
import { IoIosHeartDislike } from "react-icons/io";
import "../css/vazio.css";

const Desejo = ({cliqueSecao}) => (

    <div className="sec">
    <IoIosHeartDislike className="icon"/>
    <p>Nada foi adicionado a lista de desejos</p>
    <button className="botao" onClick={cliqueSecao}>Ir às compras</button>
    </div>
)

export default Desejo;