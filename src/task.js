export const Task = (props) =>{
    return (
        <div style={{ backgroundColor: props.bgColor }}>
            <h1>{props.name}</h1>
            <button onClick={()=> props.changeBgColor(props.id)}> Completed</button>
            <button onClick={()=> props.deleteTask(props.id)} >Delete</button>
        </div>
    )
}