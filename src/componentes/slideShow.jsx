import React, { useEffect,useState } from 'react'
import '../css/slide.css'

function SlideShow() {
    const imagens = ['Propaganda(menor).png','DL2.png','DL3.png'];
    const [indiceAtual, setindiceAtual] = useState(0);

    const proxSlide = () => {
        setindiceAtual ((previndice) => (previndice + 1) % imagens.length);
    };

        useEffect(() => {
            const intervalID = setInterval(proxSlide,5000);
    
            return () => clearInterval(intervalID);
        }, []);

    
    return (
        <div className='slide'>
        <img src={imagens[indiceAtual]} alt={`Imagem${indiceAtual + 1}`}
          className='imgs' />
      </div>
    )

}

export default SlideShow;