//Reducer => a function that takes in old state,, and an action => new state 

const transactions = [
    {id: 1,},
    {id:2, }
]
const contextReducer =(state,action) => {
    let transactions;

    switch (action.type){
        case 'Delete_Transaction':
            transactions = state.filter((t) => t.id !== action.payload ) 
            return transactions
         
        
        case 'Add_Transaction':
            transactions = [action.payload, ...state] 
            return transactions
        
        default:
            return state
    }

}

export default contextReducer