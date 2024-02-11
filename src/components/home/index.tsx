import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../store/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/home/homeSelector";
import { AppDispatch, useAppDispatch } from "../../store";
import NewUserModal from "../newUserModal";
import "./styles.css";
import { User } from "../../constants";

const Home = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const users = useSelector(usersSelector) || null;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const openModal = (user: User | null) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleEditUser = (user: User) => {
        openModal(user);
    };

    const handleDeleteUser = (userId: number) => {
        // Delete user
        dispatch(deleteUser(userId));
        dispatch(getUsers());
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await dispatch(getUsers());
            console.log("Fetched users:", response.payload);
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="usersContainer">
                {users?.map((user) => (
                    <div key={user.id} className="row">
                        <div className="cell">{user.firstName}</div>
                        <div className="cell">{user.lastName}</div>
                        <div className="cell">{user.age}</div>
                        <div className="cell">
                            <button onClick={() => handleEditUser(user)}>
                                edit
                            </button>
                        </div>
                        <div className="cell">
                            <button
                                onClick={() =>
                                    user.id !== undefined &&
                                    handleDeleteUser(user.id)
                                }
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => openModal(null)}>Add user</button>
            {isModalOpen && (
                <NewUserModal user={selectedUser} onCancel={closeModal} />
            )}
        </div>
    );
};

export default Home;
