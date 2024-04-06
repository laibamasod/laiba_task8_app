import "./App.css";
import styles from "./App.module.css";
// import Student from "./Student.js";
import { useState } from "react";
import { Task } from './task';
// comp : render/ return a part of UI
// comp is also a function
// func comp has to have a cap letter at the start
// props: js obj that exists in comp's arg, passes values to render them on interface

function App() {
  // const [age,setAge]= useState(0);
  // const increaseAge= ()=>{
  //   setAge(age+1);
  // };
  // const age = 20;
  // const isGreen = true;

  // const students = [
  //   { name: "Umer", isBSstudent: false },
  //   { name: "Laiba", isBSstudent: true },
  //   { name: "Nihal", isBSstudent: false },
  //   { name: "Jaria", isBSstudent: true },
  //   { name: "Nasir", isBSstudent: false },
  //   { name: "Asim", isBSstudent: true },
  //   { name: "Sameer", isBSstudent: false },
  //   { name: "Amna", isBSstudent: true },
  //   { name: "Aymen", isBSstudent: false },
  //   { name: "Abdullah", isBSstudent: true },
  // ];
  // const [ipvalue, setIpValue]= useState("");
  // const handleChange= (event)=>{
  //   setIpValue(event.target.value);
  // }

  // const [showText, setShowText]= useState(true);
  // const handleChange = ()=>{
  //   setShowText(!showText);
  // }
  // const [colour, setColor]= useState("red");
  // const handleColor = ()=>{
  //   setColor(colour === "red" ? "blue" : "red");
  // }
  // const [count, setCount]= useState(0);
  // const incCount = ()=>{
  //   setCount(count + 1);
  // }
  // const decCount = ()=>{
  //    setCount(count - 1);
  // }
  // const resetCount = ()=>{
  //   setCount(0);
  // }
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState(1); 
  const [bgColor, setBgColor] = useState('white');
  const handleChange = (event) => {
    setNewTask(event.target.value);
    console.log(newTask)
  };
  const changeBackgroundColor = (taskId) => {
    console.log("im here");
    const updatedTodoList = todoList.map((task) =>
    task.Id === taskId ? { ...task, bgColor :task.bgColor === 'blue' ? 'white' : 'blue' } : task
  );
  setTodoList(updatedTodoList);
  };
  
  const addTask = () => {
    const newTodo = {
      Id: taskId,
      name: newTask,
      bgColor: 'white'
    };
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
    setTaskId(taskId + 1);
    console.log(taskId);

  };
  const deleteTask = (taskId) =>{
    setTodoList( todoList.filter((task) => task.Id !== taskId));
  }
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
        {newTask}
      </div>
      <div className="list">
  {todoList.map((task) => {
    return (
      <Task
        key={task.Id}
        id={task.Id}
        name={task.name}
        deleteTask={deleteTask}
        changeBgColor= {changeBackgroundColor}
        bgColor = {task.bgColor}
      />
    );
  })}
</div>

      {/* {count}
    <br/>
    <button onClick={incCount}>+</button>
    <br/>
    <button onClick={decCount}>-</button>
    <br/>
    <button onClick={resetCount}>Reset</button>
    <p style={{color:colour}}>This is some text </p>
    <button onClick={handleColor} >Change Colour</button> */}
      {/* {showText && <h1>This is some Text</h1>} */}
      {/* <input type="text" onChange={handleChange}/> */}
      {/* {ipvalue} */}
      {/* <p>{age}</p>
      <button onClick={increaseAge}>+</button> */}
    </div>
    // className={styles.App}
    // <div className={styles.App}>
    //   <header className={styles.Apph}>
    //     {/* <p> { age<=18? <h1>Underage</h1> : <h1>Overage</h1>} </p> */}

    //     <h1>All Students</h1>
    //     {students.map((student, key) => {
    //       return <Student name={student.name} />;
    //       // return  <p> { user.name} {user.email}</p>
    //     })}

    //     <h1>Students of BS</h1>
    //     {students.map((student, key) => {
    //       return student.isBSstudent ? <Student name={student.name} /> : null;
    //       // if(student.isBSstudent){
    //       // return <Student name={student.name} />
    //       // }
    //     })}

    /* <p> { isGreen && <button>Click here</button>} </p>   */
    /* && is like if and its then  */
    /* //   <Student name="Laiba" semester="7" gpa="3.8" program="BS" />
    //   <Student name="Umer" semester="8" gpa="2.8" program="BS" />
      // <Student name="Nasir" semester="5" gpa="4.0" program="BS" />  */
    // </header>
    // </div>
  );
}

// const User = ({ name, email }) => {
//   return (
//     <h1 className={styles.name}>
//       Name: {name}, Email: {email}
//     </h1>
//   );
// };
// const Student = ({ name, semester, gpa, program }) => {
//   return (
//     <h1 className={styles.name}>
//       Name: {name}, Semester: {semester}, GPA: {gpa}, Program: {program}
//     </h1>
//   );
// };
export default App;
