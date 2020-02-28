const initState = {
    token : null,
    type : null
}

const tokenreducer = (state = initState, action) =>{
    if(action.type === 'ADD_TOKEN'){
       
        return {
            token : action.token,
            type:action.id
        }
    }
    
    
}

export default tokenreducer;