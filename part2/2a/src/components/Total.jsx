const Total = (props) => {
    let sum = props.data.reduce((acc, current) => {
        return acc + current.exercises;
    }, 0);
    
    return(
        <p>total of {sum} exercises</p>
    )
}

export default Total;