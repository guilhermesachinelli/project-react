"use client"
import styles from './TodoCard.module.css'
export const TodoCard = ({ todo , removeTodo,completeTodo }) => {
    return (
        <div className={styles.todo} style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className={styles.todoCard}>
                <p>{todo.text}</p>
                <p className={styles.category}>({todo.category})</p>
            </div>
            <div>
                <button className={styles.complet} onClick={() => completeTodo  (todo.id)}>Completar</button>
                <button className={styles.remove} onClick={() => removeTodo (todo.id)}>Excluir</button>
            </div>
        </div>
    )
}

