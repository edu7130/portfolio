
export const projectsReducer = (state = { projects: [], hasError:false }, action) => {
    switch (action.type) {
        case 'ADD_PROJECTS':
            return {
                projects: action.payload
            };
        case 'ERROR_LOADING':
            return {
                ...state,
                hasError: true
            };
        default:
            return state;
    }
}