import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/'
import Links from './pages/links'
import Error from './pages/error/Error'

export default RouterApp =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='myLinks' element={<Links/>}/>
            <Route path='*' element={<Error/>}/> {/* quando usamos o * react-router entede com page not found */}
        </Routes>
        </BrowserRouter>
    )
}

