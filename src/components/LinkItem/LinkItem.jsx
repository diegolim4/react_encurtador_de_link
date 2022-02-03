import './linkItem.css'
import {FiX, FiClipboard } from 'react-icons/fi'

export default LinkItem =>{
    return(
        <div className="modal-container">

            <div className="modal-header">
                <h4>Link Encurtado</h4>
                <button> <FiX size={28} color='#000'/> </button>
            </div>            

            <button className='modal-link'>
                https://bit.ly/12900
                <FiClipboard size={20} color='#fff'/>
            </button>

            
        </div>
    )
}
