import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdSearch, IoMdPerson } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import "../css/topo.css";

export default function Topo({cliqueSecao, mudarParaDesejos, mudarParaCarrinho, mudarParaPerfil}) {
    
    return (
        <>
            <div className="topo">
                <div className="menu">
                    <MdMenu className="Menu" alt="Menu" />
                </div>
                <div className="logo">
                        <img src="DL Modas.png" className="Logo" alt="Logo" onClick={cliqueSecao} />
                </div>

                <div className="pesquisa">
                    <input type="text" name="pes" id="pes" placeholder="Procure roupas ou acessórios"/>
                    <IoMdSearch className="searchIcon" />
                </div>

                <div className="desejo">
                    <FaRegHeart alt="desejo" className="dIcon" onClick={mudarParaDesejos}  />
                    <span onClick={mudarParaDesejos}>Desejos</span>
                </div>

                <div className="carri">
                   <IoCartOutline className="cIcon" onClick={mudarParaCarrinho}/>
                   <span onClick={mudarParaCarrinho}>Carrinho</span>
                </div>

                <div className="per">
                    <IoMdPerson className="pIcon" alt="perfil" onClick={mudarParaPerfil} />
                    <span onClick={mudarParaPerfil}>Conta</span>
                </div>
            </div>
            <div className="topo2">
                <div className="categorias">
                    <div className="cats">Tudo</div>
                    <div className="cats">Feminino</div>
                    <div className="cats">Masculino</div>
                    <div className="cats">Infantil</div>
                    <div className="cats">Sapatos</div>
                    <div className="cats">Bolsas</div>
                    <div className="cats">Beleza</div>
                    <div className="cats">Acessórios</div>
                    <div className="cats">Esportivo</div>
                    <div className="cats">Bebê</div>
                </div>
            </div>
            </>
    );
}
