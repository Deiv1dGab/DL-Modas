import React from "react";
import SlideShow from "./slideShow.jsx";
import Cards from "./cards.jsx";
import "../css/casa.css"
export default function Casa(){
    return(
    <div className="mCasa">
    <div className="propaganda">
        <SlideShow/>
    </div>
    <div className="amostra"> 
    <h2>Outono Inverno</h2>
     <div className="exib">
    <div className="carrosel">
        <Cards
        imageURL={"card1.png"}
        title={"Conjunto Feminino Blazer e Short Saia Xadrez"}
        pre={"R$ 300,00"}
        val={"R$ 189,00"}
        parc={"Ou em 12x de R$ 18,98"}
        />
        <Cards
        imageURL={"card2.png"}
        title={"Sobretudo Masculino de Lã Elegante"}
        pre={"R$ 479,00"}
        val={"R$ 239,90"}
        parc={"Ou em 12x de R$ 24,09"}
        />
        <Cards
        imageURL={"card3.png"}
        title={"Jaqueta Infantil Peluciado Com Capuz Unissex"}
        pre={"R$ 249,49"}
        val={"R$ 189,89"}
        parc={"Ou em 12x de R$ 18,89"}
        />
    </div>
    </div>
    </div>
    <div className="amostra"> 
    <h2>Acessórios</h2>
     <div className="exib">
    <div className="carrosel">
        <Cards
        imageURL={"card4.png"}
        title={"Anel da akatsuki para festas Cosplays"}
        val={"R$ 11,19"}
        parc={"Ou em 3x de R$ 03,99"}
        
        />
        <Cards
        imageURL={"card5.png"}
        title={"Colar de pendente em cruz de aço titânio"}
        val={"R$ 7,00"}
        parc={"Ou em 2x de R$ 4,00"}
        />
        <Cards
        imageURL={"card6.png"}
        title={"Relogio Smartwatch X7 - Rosa"}
        val={"R$ 120,89"}
        parc={"Ou em 12x de R$ 12,89"}
        />
    </div>
    </div>
    </div>
</div>
)
}