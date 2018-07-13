import * as Actions from '../actions/types';


//const sidebarname = "wrapper slide-menu";
let initialState = { sidebarname: "wrapper slide-menu" };

const sidebarReducer = (state=initialState,action) => {
    switch(action.type){
            case Actions.TOGGLE_SIDEBAR:
            console.log('reducer called');
            console.log(state);
            console.log('action',action);
            return Object.assign({}, state, {
                sidebarname: action.sidebarname
                
            })
            default:
            return state;
                
        
               
    } 


}
export default sidebarReducer;
