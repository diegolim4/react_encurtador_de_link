import './menu.css'

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a href="https://github.com/diegolim4" className='social'>
                <BsGithub color="#FFF" size={24}/>
            </a>
            
            <a href="https://www.linkedin.com/in/diego-lima-b03b041ba/" className='social'>
                <BsLinkedin color="#FFF" size={24} />             
            </a>
            
                        
            
            <Link to='/mylinks' className='menu-item'>
                Meus Links
            </Link>
            
        </div>
    )
}