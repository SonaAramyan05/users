// CreateUserModal.js
import React, { useEffect, useState } from "react";
import { User } from "../../constants";
import { useDispatch } from "react-redux";
import { saveUser, updateUser } from "../../store/home/homeSlice";
import { AppDispatch } from "../../store";
interface Props {
    user: User | null;
    onCancel: () => void;
}
const NewUserModal: React.FC<Props> = ({ user, onCancel }) => {
    const dispatch: AppDispatch = useDispatch();
    const [firstName, setFirstName] = useState(user ? user.firstName : "");
    const [lastName, setLastName] = useState(user ? user.lastName : "");
    const [age, setAge] = useState(user ? user.age : "");
    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setAge(user.age);
        }
    }, [user]);
    const handleSave = () => {
        const userData = { firstName, lastName, age };
        if (user) {
            dispatch(updateUser({ id: user.id, ...userData }));
            console.log("iiiiif");
        } else {
            console.log("elsee");

            dispatch(saveUser(userData));
        }
        onCancel();
    };

    return (
        <div className="modal">
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default NewUserModal;
