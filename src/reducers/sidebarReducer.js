import { TOGGLE_SIDEBAR } from '../actions/types';


const sidebarname = "wrapper slide-menu";

export default function(state=sidebarname,action){
    switch(action.type){
            case TOGGLE_SIDEBAR:
            console.log('reducer called');
            console.log(state);
                return{

                        ...state,
                        sidebarname :  action.payload

                };
                
        
               
    }
    return state;


}
