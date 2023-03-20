// 3. Типизация компонентов и пропсов
import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void          // ожидаем в компонент функцию для нажатия на конкретного пользователя
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {                      // Получаем функцию в пропсах
    return (
        <div style={{padding: 15, border: '1px solid gray'}} onClick={() => onClick(user)}>     {/* вызываем ее на конкретного пользователя по клику */}
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}.
        </div>
    );
};

export default UserItem;