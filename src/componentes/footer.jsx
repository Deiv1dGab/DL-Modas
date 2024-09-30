import {React, useState} from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import '../css/footer.css'

export default function Footer(){
    const [accordion, setAccordion] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false
    });

    const mexerAccordion = (section) => {
        setAccordion(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };
    return(
    <>
    <div className='ori'>
            <div className='Clientes'>
               <h2>Atendimento ao cliente</h2> 

                <div className='linksA'>Central de ajuda</div>
                <div className='linksA'>Como comprar</div>
                <div className='linksA'>Garantia</div>
                <div className='linksA'>Devolução e Reembolso</div>
                <div className='linksA'>Fale conosco</div>
                <div className='linksA'>Ouvidoria</div>

       </div>

        <div className='Sobre'>
            <h2>Sobre nós</h2>

            <div className='linksN'>Políticas de Empresa</div>
            <div className='linksN'>Política de privacidade</div>
            <div className='linksN'>Seja um Entregador</div>
            <div className='linksN'>Ofertas Relâmpagos</div>
            <div className='linksN'>Blog</div>
            <div className='linksN'>Imprensa</div>

        </div>

        <div className='Redes'>
            <h2>Siga nós</h2>

            <div className='linksR'> <CiFacebook className='rIcon'/> Facebook</div>
            <div className='linksR'> <FaInstagram className='rIcon'/>Instagram</div>
            <div className='linksR'> <FaTwitter className='rIcon'/>X/Twitter</div>
            <div className='linksR'> <FaYoutube className='rIcon'/>Youtube</div>
            <div className='linksR'>  <FaLinkedin className='rIcon'/>Linkedin</div>

        </div>
        <div className='Pagamentos'>
            <h2>Pagamentos</h2>
            <div className='pagas'>
            <img src="paga.png" alt="Modos de pagamento" />
            <img src="paga2.png" alt="Modos de pagamento"/>
            <img src="paga3.png" alt="Modos de pagamento"/>
            </div>
        </div>
    </div>
{/*  ACCOOOORDION ABAIXO, AMIGO NÃO SE PERCA  */}
    <div className='accor'>
    <div className={`a-Clientes ${accordion.accordion1 ? 'accordion-open' : ''}`}>
                <div className='ab' onClick={() => mexerAccordion('accordion1')}>
                    <h2>Atendimento ao cliente</h2>
                    <FaArrowDown className={`arrow ${accordion.accordion1 ? 'rotated' : ''}`} />
                </div>
                {accordion.accordion1 && (
                    <>
                        <div className='linksA'>Central de ajuda</div>
                        <div className='linksA'>Como comprar</div>
                        <div className='linksA'>Garantia</div>
                        <div className='linksA'>Devolução e Reembolso</div>
                        <div className='linksA'>Fale conosco</div>
                        <div className='linksA'>Ouvidoria</div>
                    </>
                )}
            </div>

            <div className={`a-Sobre ${accordion.accordion2 ? 'accordion-open' : ''}`}>
                <div className='ab' onClick={() => mexerAccordion('accordion2')}>
                    <h2>Sobre nós</h2>
                    <FaArrowDown className={`arrow ${accordion.accordion2 ? 'rotated' : ''}`} />
                </div>
                {accordion.accordion2 && (
                    <>
                        <div className='linksN'>Políticas de Empresa</div>
                        <div className='linksN'>Política de privacidade</div>
                        <div className='linksN'>Seja um Entregador</div>
                        <div className='linksN'>Ofertas Relâmpagos</div>
                        <div className='linksN'>Blog</div>
                        <div className='linksN'>Imprensa</div>
                    </>
                )}
            </div>

            <div className={`a-Redes ${accordion.accordion3 ? 'accordion-open' : ''}`}>
                <div className='ab' onClick={() => mexerAccordion('accordion3')}>
                    <h2>Siga nós</h2>
                    <FaArrowDown className={`arrow ${accordion.accordion3 ? 'rotated' : ''}`} />
                </div>
                {accordion.accordion3 && (
                    <>
                        <div className='linksR'> <CiFacebook className='rIcon'/> Facebook</div>
                        <div className='linksR'> <FaInstagram className='rIcon'/>Instagram</div>
                        <div className='linksR'> <FaTwitter className='rIcon'/>X/Twitter</div>
                        <div className='linksR'> <FaYoutube className='rIcon'/>Youtube</div>
                        <div className='linksR'>  <FaLinkedin className='rIcon'/>Linkedin</div>
                    </>
                )}
            </div>
        <div className='a-Pagamentos'>
            <h2>Pagamentos</h2>
            <div className='pagas'>
            <img src="paga4.png" alt="Modos de pagamento" />
            <img src="pag.png" alt="Modos de pagamento" />
            </div>
        </div>
        
    </div>
    </>
    )
}