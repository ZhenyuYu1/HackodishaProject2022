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
        <Route path='/home' element={<Home/>} />
        <Route path='/afterDisasters' element={<AfterDisasters/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/createPost' element={<CreatePost/>} />
        <Route path='/disastersOdisha' element={<DisastersOdisha/>} />
        <Route path='/location' element={<Location/>} />
        <Route path='/preDisasters' element={<PreDisasters/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/social' element={<Social/>} />
    </Routes>
    </Router>
);
}
  
export default App;
