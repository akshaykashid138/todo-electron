
export const addTodo=(todo)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:todo
        }
    }
}

export const editTodo=(id)=>{
    return {
        type:"EDIT_TODO",
        id
    }
}

export const updateTodo=(data)=>{
    return {
        type:"UPDATE_TODO",
        payload:{
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return {
        type:"DELETE_TODO_ASYNC",
        id
    }
}