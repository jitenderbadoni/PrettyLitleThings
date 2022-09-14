import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import store from './reducer';
export default function configureStore () {
    return createStore(store, applyMiddleware(thunk));
}
  