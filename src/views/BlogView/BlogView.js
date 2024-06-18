import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"
import Calender from "./../../components/BlogCard/calendar.png"

function BlogView() {
  const { id } = useParams()

  const selectedBlog = blogs.find((blogObj) => blogObj.id === id)

  return (
    <div className="card">
      <div className="date-section">
        <img src={Calender} className="cal-img" />
        <span className="date">{selectedBlog.date} </span>
      </div>
      <h1 className="title">{selectedBlog.title}</h1>
      <p className="desc">{selectedBlog.description}</p>
      <img src={selectedBlog.preImg} className="img" />
      <p className="content">{selectedBlog.content} </p>

      <h3 className="auth-heading">Author:</h3>
      <div className="auth-sec">
        
        <img src={selectedBlog.author.authImg} className="author-img"/>
        <span className="author-name">{selectedBlog.author.name} </span>
      </div>
    </div>
  )
}

export default BlogView