import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
  return (
    <>
      <Header name = {props.course.name} />
      <Content content = {props.course.parts} />
      <Total data = {props.course.parts} />
    </>
  )
}

export default Course;