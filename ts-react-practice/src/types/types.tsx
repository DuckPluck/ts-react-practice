// тут объявляются глобальные типы, которые будут использоваться приложением

export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {            // Перечисляем поля, которыми будет обладать объект пользователя (на основе ответа сервера)
    id: number;
    name: string;
    email: string;
    address: IAddress;             // Тк адрес это вложенный объект, для него придется создать новый интерфейс
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;

}