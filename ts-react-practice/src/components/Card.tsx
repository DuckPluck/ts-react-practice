// 1. Типизация компонентов и пропсов
import React, {useState} from "react";

interface CardProps {                                       // Создаем интерфейс, чтобы указать какие пропсы ожидать компоненту
    width: string;
    height: string;
    children?: React.ReactNode;                             // Сделали проп необязательным (?), чтобы ts не ругался при отсутствии
    variant?: CardVariant;                                   // Этот проп теперь может быть только 'outlined' или 'primary'
    onClick?: () => void;           // Этот проп для функции - она ничего не возвращает, поэтому `void` (и у нее нет аргументов, которые нужно типизировать)
}



export enum CardVariant {                                   // Создаем перечисление, чтобы ограничить значения, которые может принимать тип
    outlined= 'outlined',
    primary= 'primary',
}



// Далее типизируем пропсы:
export const Card1 = ({width, height, children, onClick}: CardProps) => {       // Передаем в пропсах ширину, высоту - необходимо указать тип
                                    // Можно указать тип каждому пропсу, но лучше перечислить все пропсы в объекте, затем указать объекту интерфейс
    return (
        <div style={{width, height, border: '1px solid gray'}} onClick={onClick}>           {/* В атрибуты лучше сразу передавать массивы */}
            {children}
            card1
        </div>
    );
}



// Также можно типизировать сам компонент:
                                                                        // При типизации компонента, пропсы типизируются через генерик (<>)
export const Card2: React.FC<CardProps> = ({                            // React.FC(можно упростить до FC) - это тип компонента (Functional Component)
                                               width,
                                               height,
                                               children,
                                               variant = CardVariant.primary,
}) => {

    return (
        <div style={{width, height,
            border: variant === 'outlined' ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightblue' : 'none',
        }}>
            {children}
            card2
        </div>
    );
}