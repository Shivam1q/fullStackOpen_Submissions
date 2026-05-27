import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = (props) => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  

  return (
    <div>
      <Header content={course.name} />
      <Content
        part1={course.parts[0].name}
        exercise1={course.parts[0].exercises}
        part2={course.parts[1].name}
        exercise2={course.parts[1].exercises}
        part3={course.parts[2].name}
        exercise3={course.parts[2].exercises}
      />
      <Total
        total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
