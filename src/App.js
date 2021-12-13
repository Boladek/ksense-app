import './App.css';
import {useState, useEffect} from 'react';
import HomePage from './component/HomePage';
import PostsPage from './component/PostsPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [tableData, setTableData] = useState([]);
  const [postsData, setPostsData] = useState([]);

   const getUsersPosts = async (id) => {
    try {
      let usersPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      usersPost = await usersPost.json();
      setPostsData(usersPost);
    } catch (error) {
      console.log(error); 
    }
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setTableData(data));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
            exact
            path="/"
            element={<HomePage tableData={tableData}/>}
          />
        
        <Route
            path="/posts/:userId"
            element={<PostsPage postsData={postsData} getUsersPosts={getUsersPosts}/>}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
