import { createStore , combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Status} from './status';
import {Quotes} from './share';

export const ConfigureStore =()=>{
    const store = createStore(
        combineReducers({
            status: Status,
            quotes: Quotes
           
        }),
        applyMiddleware(thunk, logger)
      
    );

    return store;
}