import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from '../../store/actions';
import {RootState} from "../../store";
import { InputGroup, FormControl } from 'react-bootstrap';

const Filter: React.FC = () => {
    const [filterText, setFilterText] = useState('');
    const dispatch = useDispatch();
    const filteredUsers = useSelector((state: RootState) => state.users.filteredUsers);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setFilterText(text);
        dispatch(filterUsers(text));
    };

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Filter users by name, username, or email"
                aria-label="Filter users by name, username, or email"
                aria-describedby="basic-addon2"
                value={filterText}
                onChange={handleFilterChange}
            />
        </InputGroup>
    );
};

export default Filter;
