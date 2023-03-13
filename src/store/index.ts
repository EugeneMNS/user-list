import { createStore } from 'redux';
import { loadUsers } from './actions';
import rootReducer from './reducers';
import { AppState } from './reducers';
import { API_URL } from './constants';


const store = createStore(rootReducer);

fetch(API_URL)
    .then((response) => response.json())
    .then((users) => {
        store.dispatch(loadUsers(users));
    });

export type RootState = ReturnType<typeof rootReducer>;
export default store;

// import { createStore } from 'redux';
// import rootReducer from './reducers';
//
// const store = createStore(rootReducer);
//
// export default store;
