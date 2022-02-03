import './error.css'
import { Link } from "react-router-dom"

export default error =>{
    return(
        <div className="container-error">
            <img src="notfound.png" alt="notFound" />
            <h1>Página não encontrada</h1>
            <Link to='/'>
                Voltar para home
            </Link>
        </div>
    )
}