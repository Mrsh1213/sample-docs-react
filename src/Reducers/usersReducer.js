// let initUsers=;
const usersReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return [
                ...state,
                {
                    id: Math.random(), // not really unique but it's just an example
                    name: action.user.name,
                    status: action.user.status
                }
            ];
        case "CHANGE_STATUS_USERS":
            console.log(state);
            console.log(action);
            return state.map(user => {
                if (user.id === action.id) {
                    return {...user, status: action.status}
                }
                return user;
            });
        default:
            return state;
    }
};
export default usersReducer;