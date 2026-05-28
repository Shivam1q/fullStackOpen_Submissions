import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  return (
    <>
      <Header name = {props.course.name} />
      <Content content = {props.course.parts} />
    </>
  )
}

export default Course;