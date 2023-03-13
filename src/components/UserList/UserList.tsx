import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store'
import { deleteUser, filterUsers, resetFilter } from '../../store/actions';
import { User } from '../../store/types';
import UserModal from '../UserModal/UserModal';
import { Button, Table, InputGroup, FormControl } from 'react-bootstrap';

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showModal, setShowModal] = useState(false);
    const { filteredUsers, deletedUsers, filter } = useSelector(
        (state: RootState) => state
    );

    const handleDelete = (userId: number) => {
        dispatch(deleteUser(userId));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUsers(event.target.value));
    };

    const handleResetFilter = () => {
        dispatch(resetFilter());
    };

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <>
            {selectedUser && (
                <UserModal user={selectedUser} onHide={() => setShowModal(false)} />
            )}
            <h1>User List</h1>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by name, username or email"
                    value={filter}
                    onChange={handleFilterChange}
                />
                <Button variant="outline-secondary" onClick={handleResetFilter}>
                    Reset
                </Button>
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user: User) => (
                    <tr key={user.id}>
                        <td onClick={() => handleUserClick(user)}>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button variant="danger" onClick={() => handleDelete(user.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                {deletedUsers.map((user) => (
                    <tr key={user?.id} className="table-secondary">
                        <td>{user?.name}</td>
                        <td>{user?.username}</td>
                        <td>{user?.email}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default UserList;
