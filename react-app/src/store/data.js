import {createStore} from 'redux';
import methods from './method'
import state from './state'

let data = state

let ActionFnObj = methods

function reducer(state=data, action){
    if (action.type.indexOf('redux') == -1) {
      state = ActionFnObj[action.type](state,action)
      return {...state}
    }
  
    return state
    
  }
  
  const store = createStore(reducer)

  export default store