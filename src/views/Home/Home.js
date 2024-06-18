import "./Home.css"
import blogs from "./../../data"
import BlogCard from "../../components/BlogCard/BlogCard"
function Home() {

  return (
    <>
    <div className="container">
    {
      blogs.map((blogObj, i)=>{
        const {
          id,
          title,
          preImg,
          description,
          content,
          author,
          date,
          categories
        }=blogObj

        return (
          <BlogCard
          key={i}
          id={id}
          title={title}
          preImg={preImg}
          description={description}
          content={content}
          author={author}
          date={date}
          categories={categories}
          />
        )
      })
    }
    </div>
    </>
  )
}

export default Home