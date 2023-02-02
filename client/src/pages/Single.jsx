import React, { useEffect, useState } from "react"
import Menu from "../components/Menu"
import { Link, useLocation } from "react-router-dom"
import "./single.scss"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import axios from "axios"
import moment from "moment"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, [postId])

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {currentUser.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  )
}

export default Single