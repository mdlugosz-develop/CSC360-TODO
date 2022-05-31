function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
}

function taskReducer(state, action) {
    switch(action.type) {
        case 'CREATE_TASK':
        const newPost = {
            author: action.author,
            title: action.title,
            description: action.description,
            dateCreated: action.dateCreated,
            dateCompleted: action.dateCompleted,
            completed: action.completed,
            id: action.id
        };
        return [newPost, ...state];
        case 'TOGGLE_TASK':
            return action.updatedTasks
        case 'DELETE_TASK':
            return action.updatedTasks
        case 'FETCH_TASKS':
            return action.tasks
        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        tasks: taskReducer(state.tasks, action)
    }
}
