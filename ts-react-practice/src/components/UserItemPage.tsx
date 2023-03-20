// 7. Страница отдельного пользователя

import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

type UserItemPageParams = {                                     // Описываем все параметры, которые запрашиваем хуком useParams
    id: string;                                // useParams работает только с type, НЕ с interface
}                                              // ( в интерфейс невозможно запихнуть <Params extends {[K in keyof Params]?: string} = {}>(): Params> )

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);           // Для указания нескольких типов используется `|`
    const params = useParams<UserItemPageParams>();                          // Хук запроса useParams в действии
    const navigate = useNavigate()                                            // Для возврата (кнопки Back) используем хук useNavigate (бывш. useHistory)

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {                                                                   // добавляем в url id, для этого юзаем хук запроса (useParams)
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>               {/* Используем хук useNavigate, чтобы перейти на стр. users */}
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    );
};

export default UserItemPage;