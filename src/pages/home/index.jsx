import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu/menu';
import LinkItem from '../../components/LinkItem/LinkItem';

import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'

function Home() {

  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

  async function shortLink(){   
    try{
      const response = await api.post('/shorten',{
        long_url: link
      })

        setData(response.data);
        setShowModal(true)

        saveLink('key_links', response.data)

        setLink('')   /* Limpar input apos encurtar url */

    }
    catch{      
      alert('Ops parece que algo deu errado')
      setLink('') /* Limpar input apos erro */
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="logo"/>
        <h1>Encurtador de link</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF'/>
          
          <input placeholder='Cole seu link aqui...'
            value={link}
            onChange={(e)=> setLink(e.target.value)}
          />  
        </div>
          
        <button onClick={shortLink}>Encurtar Link</button>
      </div>

      <Menu/>
      
      {/* Renderização de condição se o showModal estiver true aparece se estiver false não será renderizado */}
      { showModal && (
        <LinkItem
        closeModal={()=> setShowModal(false) } /* propriedade close modal */
        content={data}
        />        
      )}

    </div>
  );
}

export default Home;
