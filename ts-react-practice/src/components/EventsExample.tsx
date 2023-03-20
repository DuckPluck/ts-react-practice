// 5. Типизация событий
import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');         // для хуков типы указываются в генерике
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

                                                                     // Колбэки, которые вешаются на слушателей событий принимают параметром event
                                                                     // в реакте event еще и оборачивается в обертку - synthetic event
                                                                     // Но ts позволяет указать тип event'a и в данном случае у нас `ChangeEvent`.
                                                                     // Это позволяет подсказывать методы события
                                                                     // Но событие можно вызвать на разных тегах, так что указываем еще и генерик `<HTMLInputEvent>`
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
    }
                                                                     // (!) для всех событий, связанных с мышкой (клик) указываем `MouseEvent`
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {              // также генерик тега - <HTMLButtonElement>
        console.log(value);
    }

    const clickRefHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);                     // ts предупреждает, что реф может быть null (тк мы его так определили - null), поэтому optional chaining
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {               // Все ниже тоже относится к типу DragEvent
        setIsDrag(true);
        console.log('Drop')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder={'Управляемый'}/>
            <button onClick={clickHandler}>Log Управляемый</button>

            <input type="text" ref={inputRef} placeholder={'Не управляемый (ref)'}/>
            <button onClick={clickRefHandler}>Log Не управляемый</button>

            {/* события для драг н дропа - при переносе мышкой одного блока на другой, второй будет менять цвет: */}
            <div onDrag={dragHandler} draggable style={{height: '200px', width: '200px', backgroundColor: "rebeccapurple"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{height: '200px', width: '200px', backgroundColor: isDrag ? 'coral' : "rebeccapurple", marginTop: '15px'}}></div>
        </div>
    );
};

export default EventsExample;