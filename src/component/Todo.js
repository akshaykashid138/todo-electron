import React,{useState} from 'react'
import {addTodo,deleteTodo,editTodo,updateTodo} from '../actions/index'
import {useDispatch,useSelector} from 'react-redux'

const Todo = () => {
    const [todo, setTodo]=useState("")

    const list=useSelector((state)=> state.todoReducers.list)
    const currentTodo=useSelector((state)=> state.todoReducers.currentTodo)

    
    const dispatch=useDispatch()


    const handleTodo=()=>{
         dispatch(addTodo(todo))
         setTodo("")
    }
        
    const handleEdit=(id)=>{
        dispatch(editTodo(id))
    }

    const handleUpdate=()=>{
         dispatch(updateTodo(todo))
         setTodo("")
    }

    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }
    
    return (
        <div>
            <h2 className='center mt-4'>Todo Application</h2>
            <div className='row mt-4 offset-3'>
                
                <div className="col-4">
                    <input type="text" value={todo} placeholder={currentTodo!==null ? currentTodo[0].data :"Type content"} className="form-control"  onChange={(event) => setTodo(event.target.value)}  />
                </div>
                <div className="col-1">
                    {
                        currentTodo!==null ? (<button className="btn btn-warning  mb-2" onClick={handleUpdate}>Update</button>) 
                        :( !currentTodo ? (<button className="btn btn-success  mb-2" onClick={handleTodo}>Add</button>) 
                        :(<button className="btn btn-warning" onClick={updateTodo}>Update</button>))
                   }
                </div>
            </div>
             
        
            <br />

            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">content</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {list.map((todo)=>(
                    <tr key={todo.id}>
                    <td>{todo.data}</td>
                    <td><button className='btn btn-primary' onClick={() => handleEdit(todo.id)}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todo
