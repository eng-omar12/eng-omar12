import React from 'react';

const Tasks = () => {
    const tasks = [
        {id:1 , title:"Studing HTML"},
        {id:2 , title:"Studing CSS"},
        {id:3 , title:"Studing JS"},
        {id:4 , title:"Do your graduation project"},
        {id:5 , title:"Portfolio"},
    ]
    const toDoList = tasks.map((task)=>{
        return(
            <li style={{background: "red", margin:"20px"}} key={task.id}>{task.title}</li>
        )
    })
    console.log(toDoList)
    return (
        <div className='App'>
            <ul>
                {toDoList}
            </ul>
        </div>
    );
}

export default Tasks;
