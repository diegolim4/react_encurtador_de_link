import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/'
import Links from './pages/links'

export default RouterApp =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='myLinks' element={<Links/>} />
        </Routes>
        </BrowserRouter>
    )
}

