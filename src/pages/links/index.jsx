import './links.css'
import { useState, useEffect} from 'react'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem/LinkItem'

export default Links =>{
    const [myLinks, setMyLinks] = useState([])
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [emptyList, setEmptyList] = useState(false) // state para quando a lista de link estiver vazia

    useEffect(()=> {
        async function getLinks(){
            const res = await getLinksSave('key_links')

            if(res.length === 0){
             setEmptyList(true)
            }
            setMyLinks(res)
        }
        getLinks()
    }, [])

    function handleOpenLink(link){
        setData(link)
        setShowModal(true)
    }

    async function handleDelete(id){
        const resDel = await deleteLink(myLinks, id)
        
        if(resDel.length === 0){
            setEmptyList(true) // chamando o useState para quando a lista estiver fazia
        }
        setMyLinks(resDel) // Atualizo setMylinks com o resultado do delete
    }

    return(
        <div className='container-links'>
            <div className='Links-header'>
                <Link to='/'>
                    <FiArrowLeft size={38} color='#FFF'/>
                </Link>
                
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div className='links-item'>
                    <h2 className='empty-text'>Nenhum link aqui...</h2>
                </div>
                )
            }

            {myLinks.map(link =>(
                <div key={link.id} className='links-item'>
                    <button className='link' onClick={() => handleOpenLink(link)}>
                        <FiLink size={18} color='#FFF' />
                        {link.long_url}
                    </button>
                    <button className='link-delete' onClick={() => handleDelete(link.id)} >
                        <FiTrash size={24} color='#FF5454'/>
                    </button>
                </div>                
            ))}

            { showModal && (
                <LinkItem 
                    closeModal={ ()=> setShowModal(false)}
                    content={data}
                />
            )}            
        </div>
    )
}