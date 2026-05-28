import Part from "./Part";

const Content = (props) => {
  return (
    <>
    <Part data = {props.content[0]} />
    <Part data = {props.content[1]} />
    <Part data = {props.content[2]} />
    </>
  )
}

export default Content;