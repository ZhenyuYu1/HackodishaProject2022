import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import AfterDisasters from './pages/afterDisasters';
import CreatePost from './pages/createPost';
import DisastersOdisha from './pages/disastersOdisha';
import Location from './pages/index';
import PreDisasters from './pages/preDisasters';
import SignUp from './pages/sign-up';
import Social from './pages/social';
import Home from './pages/home';
import Contacts from './pages/contacts';
  
function App() {
return (
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path="/" element ={<Home/>} />
        <Route path='/HackodishaProject2022/home' element={<Home/>} />
        <Route path='/HackodishaProject2022/afterDisasters' element={<AfterDisasters/>} />
        <Route path='/HackodishaProject2022/contacts' element={<Contacts/>} />
        <Route path='/HackodishaProject2022/createPost' element={<CreatePost/>} />
        <Route path='/HackodishaProject2022/disastersOdisha' element={<DisastersOdisha/>} />
        <Route path='/HackodishaProject2022/location' element={<Location/>} />
        <Route path='/HackodishaProject2022/preDisasters' element={<PreDisasters/>} />
        <Route path='/HackodishaProject2022/sign-up' element={<SignUp/>} />
        <Route path='/HackodishaProject2022/social' element={<Social/>} />
    </Routes>
    </Router>
);
}
  
export default App;
