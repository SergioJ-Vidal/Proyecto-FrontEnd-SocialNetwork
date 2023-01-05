import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import PostDetail from './components/Home/Posts/PostDetail/PostDetail';
import Search from './components/Search/Search';
import Publish from './components/Home/Publish/Publish';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/search/:postName" element={<Search />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/createPost" element={<Publish />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
