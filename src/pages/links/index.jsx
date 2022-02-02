import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default Links =>{
    return(
        <div className='container-links'>
            <div className='Links-header'>
                <Link to='/'>
                    <FiArrowLeft size={38} color='#FFF'/>
                </Link>
                
                <h1>Meus Links</h1>
            </div>

            <div className='links-item'>
                <button className='link'>
                    <FiLink size={18} color='#FFF' />
                    http://pudim.com.br
                </button>
                <button className='link-delete'>
                    <FiTrash size={24} color='#FF5454'/>
                </button>
            </div>

            <div className='links-item'>
                <button className='link'>
                    <FiLink size={18} color='#FFF' />
                    http://pudim.com.br
                </button>
                <button className='link-delete'>
                    <FiTrash size={24} color='#FF5454'/>
                </button>
            </div>  
            
        </div>
    )
}