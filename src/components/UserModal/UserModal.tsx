import React from 'react';
import { Modal } from 'react-bootstrap';
import {User} from "../../store/types";


interface Props {
    user: User;
    onHide: () => void;
}

const UserModal: React.FC<Props> = ({ user, onHide }) => {
    return (
        <Modal show onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{user.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <strong>Address:</strong> {user.address.street},{' '}
                    {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </p>
                <p>
                    <strong>Company:</strong> {user.company.name},{' '}
                    {user.company.catchPhrase}, {user.company.bs}
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default UserModal;
