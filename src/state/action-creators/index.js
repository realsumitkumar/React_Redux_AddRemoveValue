export const depositMoney = (amount) =>{
    return (dispatch) =>{
        //we are running the function dispatch
        dispatch({
            type:'deposit',
            payload: amount      
        })  
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:'withdraw',
            payload: amount     
        })  
    }
}
