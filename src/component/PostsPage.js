import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import '../App.css';

export default function PostsPage({postsData, getUsersPosts}) {
    const {userId} = useParams()
    const navigate = useNavigate();
  console.log(postsData, getUsersPosts);
    useEffect(() => {
      getUsersPosts(userId)
    }, [])
  return (
    <>
    <div className="container">
      <button onClick={() => navigate('/')}>&laquo; Back</button>
      <h2>Users Posts Table</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">id</div>
          <div className="col col-3">Title</div>
          <div className="col col-4">body</div>
        </li>
        {postsData && postsData.map((item, index) => {
          return (
            <li className="table-row" key={index}>
              <div className="col col-2">{item.id}</div>
              <div className="col col-3">{item.title}</div>
              <div className="col col-4">{item.body}</div>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  );
}
