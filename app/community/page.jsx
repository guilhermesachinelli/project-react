"use client"
import styles from './page.module.css'
import { useState } from "react"
import { Header } from "../components/header/Header"
import todosDate from "data/todos"
import { TodoCard } from "../components/todoCard/TodoCard"
import TodoForm from "../components/todoForm/TodoForm"
import Search from '../components/search/Search'
function page() {
    const [todos, setTodos] = useState(todosDate);
    {/*Aqui estamos criando um estado para o nosso array de todos*/}
    const [search, setSearch] = useState("");
    {/*Aqui estamos criando um estado para o nosso input de pesquisa*/}
    const addTodo = (text, category) => {
        const newTodo = [...todos, {
            id: Math.floor(Math.random() * 10000),
            text,
            category,
            isCompleted: false,
        },
        ];
        setTodos(newTodo);
    };
    {/*Aqui estamos criando uma função que vai ser chamada quando o usuario clicar Criar Tarefa*/ }
    {/*essa função é para adicionar uma nova task no nosso array*/ }
    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
    }
    {/*Aqui estamos criando uma função que vai ser chamada quando o usuario clicar Excluir*/ }
    {/*essa função filtramos o nosso array para buscar o id do todo assim removendo ele do nosso array e atualizando o nosso estado do todos*/ }
    const completeTodo = (id) => {
        const complete = [...todos]
        complete.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
                setTodos(complete)
            }
        })
    }
    {/*Aqui estamos criando uma função que vai ser chamada quando o usuario clicar completar ela vai decriptar o texto da task*/ }
    {/*essa função fala que vamos percorrer o nosso array se o nosso id for igual ela vai negar falando que é true e atualizando o estado dos Todos*/ }
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>Todo List</h1>
                <TodoForm addTodo={addTodo} />
                <Search search={search} setSearch={setSearch} />
                <div className={styles.todoList}>
                    {
                        todos.filter((todo) => todo.text.toLowerCase().includes(search.toLocaleLowerCase())).map((todo,) => (
                            <TodoCard todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
                        ))
                    }
                    {/*filter que vai passar por todos os todo e vai executar  um função que vai comparar o texto do todo e ver se o texto do search vai aparecer oq foi pesquisado se tiver os caracteris igual do titulo ele vai aparecer  
                    toLowerCase() = vai deixar tudo em minusculo para facilitar a pesquisa
                    includes() = vai verificar se o texto do search esta incluso no texto do todo
                    */}
                </div>
            </div>
        </div>
    )
}

export default page