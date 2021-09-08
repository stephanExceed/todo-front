const initialState = {
    columns: [],
    tasks: [],
    subtasks: [],
    comments: [],
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return {...state, columns: [...state.columns, action.payload]}
        case 'EDIT_COLUMN_TITLE':
            return {...state, columns: state.columns.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, title: action.payload.title}
                }
                return item;
            })}
        case 'DELETE_COLUMN':
            return {...state, columns: state.columns.filter(item => item.id !== action.payload)}
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]}
        case 'TOGGLE_STATUS':
            return {...state, tasks: state.tasks.map(item => {
                if(item.id === action.payload) {
                    return {...item, status: !item.status}
                }
                return item;
            })}
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(item => item.id !== action.payload)}
        case 'MOVE_TASK':
            return {...state, tasks: state.tasks.map(item => {
                if(item.id === action.payload.taskID) {
                    return {...item, columnId: action.payload.columnId}
                }
                return item;
            })}
        default:
            return state
    }
}

export default tasksReducer;