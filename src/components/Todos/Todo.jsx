import React from 'react';
import s from './Todo.module.css'


const Todo = (props) => {
    const t = props.todos;

    return <div className={s.postContainer}>
        <div>
            {t.id}
        </div>
        <div>
            {t.title}
        </div>
        <div>
            {t.completed}
        </div>
    </div>
}

export default Todo;