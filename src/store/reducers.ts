import {
    LOAD_USERS,
    DELETE_USER,
    FILTER_USERS,
    RESET_FILTER,
} from './actions';
import { User } from './types';

export interface AppState {
    users: User[];
    filteredUsers: User[];
    deletedUsers: User[];
    filter: string;
}

const initialState: AppState = {
    users: [],
    filteredUsers: [],
    deletedUsers: [],
    filter: '',
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload,
                filteredUsers: action.payload,
            };
        case DELETE_USER:
            const userToDelete = state.filteredUsers.find(
                (user) => user.id === action.payload
            );
            return {
                ...state,
                filteredUsers: state.filteredUsers.filter(user => user.id !== action.payload.id),
                deletedUsers: [...state.deletedUsers, action.payload],
            };
        case FILTER_USERS:
            const filter = action.payload.toLowerCase().trim();
            const filteredUsers = state.users.filter(
                (user) =>
                    user.name.toLowerCase().includes(filter) ||
                    user.username.toLowerCase().includes(filter) ||
                    user.email.toLowerCase().includes(filter)
            );
            return {
                ...state,
                filteredUsers,
                filter,
            };
        case RESET_FILTER:
            return {
                ...state,
                filteredUsers: state.users,
                filter: '',
                deletedUsers: [],
            };
        default:
            return state;
    }
};

export default rootReducer;
