import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// BrowerRouter, HashRouter 2가지 종류가 있는데 HashRouter -> http://localhost:3000/#/movie -> #이 붙는 것이다.
// 컴포넌트 import 까먹지 말기!
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';
import Nav from './components/Nav.js';
import Genre from './routes/Genre.js';
import Footer from './components/Footer.js'
import './App.css';

function App() { 
  const [genres, setGenres] = useState(['animation', 'sci-fi', 'romance']);
  // const listItems = genres.map((genre, index) => { return(console.log(genres[index]))});
  return (
    <div>
    <Nav></Nav>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"}  element={<Home />}> </Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/movie/animation" element={<Genre genre={genres[0]} />}></Route>
        <Route path="/movie/sci-fi" element={<Genre genre={genres[1]} />}></Route>
        <Route path="/movie/romance" element={<Genre genre={genres[2]} />}></Route> 
        <Route path="*" element={ <h1 className='loader'>없는 페이지입니다. </h1> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;