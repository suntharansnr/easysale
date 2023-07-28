import React, { useState } from 'react'

export default function Todo() {
  const [todos, setTodos] = useState(['React JS', 'PHP']);
  const [task,setTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);

  const AddTask = (e) => {
    e.preventDefault();
    if(task === ''){

    }
    else{
      setTodos([...todos, task]);
      setTask('');
    }
  }

  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index,1);
    setTodos(updatedTodos);
  }

  const toggleTaskSelection = (index) => {
    const selectedIndex = selectedTasks.indexOf(index);
    if(selectedIndex === -1){
      setSelectedTasks([...selectedTasks,index]);
    }
    else{
      const updatedSelectedTasks = [...selectedTasks];
      updatedSelectedTasks.splice(selectedIndex,1);
      setSelectedTasks(updatedSelectedTasks);
    }
  }

  const deleteSelectedTasks = () => {
    const updatedTodos = todos.filter((_,index) => !selectedTasks.includes(index));
    setTodos(updatedTodos);
    setSelectedTasks([]);
  }
  
  return (
    <div>
        <h1>Todo</h1>
        <div className='row'>
        <div className='col-md-3'>
        <form>
           <div className="form-group">
               <label for="exampleInputPassword1">Task</label>
               <input type="text" className="form-control" placeholder="Task..." onChange={(e) => setTask(e.target.value)} required></input>
           </div>
           <button type="submit" className="btn btn-primary addTask" onClick={(e) => AddTask(e)}>Submit</button>
        </form>
        </div>
        <div className='col-md-9'>
        <div className='card'>
        {
          selectedTasks.length > 0 && <button className='btn btn-sm btn-info m-2' onClick={deleteSelectedTasks}>Delete</button>
        }
        <ul className='list-group'>
            {
                todos.map((todo,index) => (
                  <li key={index} className={`list-group-item ${selectedTasks.includes(index) ? 'active' : ''}`}>
                  <input 
                        type="checkbox" 
                        className='mr-2' 
                        checked={selectedTasks.includes(index)}
                        onChange={() => toggleTaskSelection(index)}>
                  </input>
                    {todo}
                  <button className='float-right btn btn-sm btn-info' onClick={() => deleteTask(index)}>X</button>
                  </li>
                ))
            }
        </ul>
        </div>
        </div>
        </div>
    </div>
  )
}
