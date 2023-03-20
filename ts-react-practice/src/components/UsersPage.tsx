// 6. Типизация роутов (Страница со списком пользователей)
import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

const UsersPage: FC= () => {

    const [users, setUsers] = useState<IUser[]>([]);         // Хуки типизируются генериком
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {                                    // Ответ с сервера получаем с помощью axios ( >npm i axios )
        try {                                                        // Отлавливаем ошибки с помощью `try...catch`
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');    // Типизируем ответ генериком
            setUsers(response.data);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>                                       {/* Передаем массив с юзерами и функцию для `map`, которая по нему пройдется (renderItem) */}
            <List items={users}
                  renderItem={(user: IUser) => <UserItem user={user}
                                                         key={user.id}
                                                         onClick={(user) => navigate('/users/' + user.id)} />} />
        </div>
    );         {/* Для перехода на стр. конкретного пользователя внутри функции для `map` передаём функцию клика по пользователю - хук useNavigate */}
};

export default UsersPage;