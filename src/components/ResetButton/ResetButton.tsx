import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFilter } from '../../store/actions';
import { Button } from 'react-bootstrap';

const ResetButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleResetFilter = () => {
        dispatch(resetFilter());
    };

    return (
        <Button variant="outline-secondary" onClick={handleResetFilter}>
            Reset
        </Button>
    );
};

export default ResetButton;
