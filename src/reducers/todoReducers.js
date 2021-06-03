const initialData={
    list:[],
    todo:"",
    currentTodo:null
}

const todoReducers=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":

            const {id,data}=action.payload

            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

            case "EDIT_TODO":
                const todo=state.list.filter((elem)=> elem.id === action.id)
                state.currentTodo=todo
                
                return{
                    ...state,
                    currentTodo:state.currentTodo
                }
            
            case 'UPDATE_TODO':
                const newTodoList=[...state.list]
                const deta=newTodoList.filter((elem)=> elem===state.currentTodo[0])
                deta[0].data=action.payload.data
               return{
                   ...state,
                   currentTodo:null
               }

            case "DELETE_TODO_ASYNC":
                const newList=state.list.filter((elem)=> elem.id !== action.id)
                return{
                    ...state,
                    list:newList
                }

        default: return state
    }
}

export default todoReducers