import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const {id} = useParams<string>()
    const navigate = useNavigate()

    
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await  axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;