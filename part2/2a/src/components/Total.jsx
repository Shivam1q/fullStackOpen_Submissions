const Total = (props) => {
    let sum = 0;
    for(let i = 0; i<=2; i++){
        sum += props.data[i].exercises;
    }

    return(
        <p>total of {sum} exercises</p>
    )
}

export default Total;