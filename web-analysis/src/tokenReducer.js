const initState = {
    token : ''
}

const tokenreducer = (state = initState, action) =>{
    if(action.type === 'ADD_TOKEN'){
        return {
            token : action.token
        }
    }
    
    
}

export default tokenreducer;