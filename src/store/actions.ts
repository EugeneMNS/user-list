import {User} from "./types";

export const LOAD_USERS = 'LOAD_USERS';
export const DELETE_USER = 'DELETE_USER';
export const FILTER_USERS = 'FILTER_USERS';
export const RESET_FILTER = 'RESET_FILTER';

export const loadUsers = (users: User[]) => ({
    type: LOAD_USERS,
    payload: users,
});

export const deleteUser = (userId: number) => ({
    type: DELETE_USER,
    payload: userId,
});

export const filterUsers = (filter: string) => ({
    type: FILTER_USERS,
    payload: filter,
});

export const resetFilter = () => ({
    type: RESET_FILTER,
});
