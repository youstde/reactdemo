
const user = (state=[], action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_USER': 
        return [
            ...state,
            action.user
        ]
        default: 
        return state
    }
}
export default user;