 import './linkItem.css'
import {FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem ({closeModal, content}){ //Chamando a propriedade close modal
    
    // Função para copiar a url encurtado
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
    }    
    
    return(
        <div className="modal-container">

            <div className="modal-header">
                <h4>Link Encurtado</h4>
                <button onClick={closeModal}><FiX size={28} color='#000'/></button> {/*Associando closeModal no btn */}
            </div>              

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#fff'/>
            </button>

            
        </div>
    )
}
