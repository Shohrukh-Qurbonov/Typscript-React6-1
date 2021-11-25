import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const {id} = useParams<string>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchTodo()
    }, [])

    async function fetchTodo() {
        try {
            const response = await  axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + id)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1><input type="checkbox" checked={todo?.completed}/> {todo?.id} {todo?.title}</h1>
        </div>
    );
};

export default TodoItemPage;