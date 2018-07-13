import { connect } from 'react-redux';
import * as Actions from './types';
import App from '../App';

const mapStateToProps = (state) => (
    {
            sidebarname : state.sidebarReducer.sidebarname
    });

const mapDispatchToProps = (dispatch) => ({
    
    setName : (sidebarname) => {
            console.log('setName is called');
        if(sidebarname != "wrapper slide-menu")
        {
              dispatch({

                type: Actions.TOGGLE_SIDEBAR,
                sidebarname : sidebarname 

            })
        }
        if(sidebarname == "wrapper")
        {
          dispatch({

            type: Actions.TOGGLE_SIDEBAR,
            sidebarname : "wrapper slide-menu" 

        })

        }
       

  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App)
