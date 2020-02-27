const initState = {
    token : null
}

const tokenReducer = (state = initState,action) => {
    if(action.type == 'ADD_TOKEN'){
        token: action.token
    }
    if(action.type == 'D'){
        token: null
    }
}

export default tokenReducer;