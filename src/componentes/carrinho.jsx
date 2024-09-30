import React from "react";
import { BsCartXFill } from "react-icons/bs";
import "../css/vazio.css";
const Carrinho = ({cliqueSecao}) => (
    
    <div className="sec">
   <BsCartXFill className="icon"/>
    <p>Não existem produtos no carrinho...</p>
    <button className="botao" onClick={cliqueSecao}>Ir às compras</button>
    </div>
   
);
 
export default Carrinho;