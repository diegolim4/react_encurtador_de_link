import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu/menu';
import LinkItem from '../../components/LinkItem/LinkItem';

function Home() {

  const [link, setLink] = useState('')

  function shortLink(){

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
      <LinkItem/>

    </div>
  );
}

export default Home;
