import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {props.content.map((part) => {
        return <Part key={part.id} data={part} />;
      })}
    </>
  );
};

export default Content;
