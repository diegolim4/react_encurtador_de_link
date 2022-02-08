import './links.css'
import { useState, useEffect} from 'react'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave } from '../../services/storeLinks'

export default Links =>{
    const [myLinks, setMyLinks] = useState([])
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    useEffect(()=> {
        async function getLinks(){
            const res = await getLinksSave('key_links')

            if(res.length === 0){

            }
            setMyLinks(res)
        }
        getLinks()
    }, [])

    return(
        <div className='container-links'>
            <div className='Links-header'>
                <Link to='/'>
                    <FiArrowLeft size={38} color='#FFF'/>
                </Link>
                
                <h1>Meus Links</h1>
            </div>

            {myLinks.map(link =>(
                <div key={link.id} className='links-item'>
                    <button className='link'>
                        <FiLink size={18} color='#FFF' />
                        {link.long_url}
                    </button>
                    <button className='link-delete'>
                        <FiTrash size={24} color='#FF5454'/>
                    </button>
                </div>                
            ))}            
        </div>
    )
}