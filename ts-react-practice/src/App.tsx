import React from "react";
import {Card1, Card2, CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";

// > npm i react-router-dom @types/react-router-dom     - для установки роутера и типов к нему
import {NavLink, Route, Routes} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


export default function App() {


    return (
        <>
                <Routes>
                    {/* дефолтный роут '/' в родительском main.tsx*/}
                    <Route path={'/users'} element={<UsersPage />} />           {/* Первый роут будет вызывать UsersPage */}
                    <Route path={'/todos'} element={<TodosPage />} />           {/* Второй будет вызывать TodosPage */}
                    <Route path={'/users/:id'} element={<UserItemPage />} />     {/* далее страницы отдельных пользователей/туду с динамическим `:id`*/}
                    <Route path={'/todos/:id'} element={<TodoItemPage />} />
                </Routes>

            <div>

                <div>
                    <NavLink to={'/users'} >Users</NavLink>                     {/* `NavLink` это пункты меню сайта */}
                    <NavLink to={'/todos'} >Todos</NavLink>
                </div>

                <Card1 onClick={() => console.log('card click!')} width={'200px'} height={'200px'} variant={CardVariant.outlined}>
                    <button>Кнопка!</button>
                </Card1>

                <Card2 width={'200px'} height={'200px'} variant={CardVariant.primary}>
                    <button>Кнопка!</button>
                </Card2>

                <EventsExample />
            </div>
        </>
    );
}