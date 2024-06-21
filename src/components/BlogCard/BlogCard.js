import "./BlogCard.css"
import Calender from "./calendar.png"
import { Link } from "react-router-dom"

function BlogCard({id, title, preImg, description, content, author, date, categories }) {
    return (
        <Link className="blog-card" to={`/blog/${id}`}>
            <div className="calender">
                <img src={Calender} className="calender-img" alt="img"/>
                <span className="date">{date}</span>
            </div>
            <img src={preImg} className="pre-img" alt="img" />
            <h2>{title}</h2>
            <p className="desc">{description}..</p>

            <div className="author">
                <img src={author.authImg} className="auth-img" alt="img"/>
                <span className="auth-name">{author.name}</span>
            </div>

            <div className="comment">
                <img src="https://cdn-icons-png.flaticon.com/128/134/134718.png" className="com-img" alt="img" />
                <input type="text" placeholder="Add a comment" className="com-box" />
            </div>

            <div className="cat">
                {categories.map((category, i) => {
                    return <span className="categories">{category}</span>
                })}
            </div>


        </Link>


    )
}


export default BlogCard