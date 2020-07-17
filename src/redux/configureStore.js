import { createStore , combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Status} from './status';
import {Images} from './share';

export const ConfigureStore =()=>{
    const store = createStore(
        combineReducers({
            status: Status,
            images: Images
           
        }),
        applyMiddleware(thunk, logger)
      
    );

    return store;
}