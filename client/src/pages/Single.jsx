import React from "react"
import { Link } from "react-router-dom"
import "./single.scss"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://uploads.toptal.io/profile_photo/image/user/714881/large_45b43ef21e76b273e3e72ffea850f56e.jpg" alt="" />
          <div className="info">
            <span>Moe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default Single