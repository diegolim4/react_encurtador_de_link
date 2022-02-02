import {FiLink} from 'react-icons/fi'

function Home() {
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
        </div>
        <input placeholder='Cole seu link aqui...'/>      
      </div>

      <button>Encurtar Link</button>

    </div>
  );
}

export default Home;
