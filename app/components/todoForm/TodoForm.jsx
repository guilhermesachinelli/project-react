"use client"
import styles from './TodoForm.module.css'
import { useState } from "react"
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    {/*Aqui estamos criando um estado para o nosso input e para a nossa categoria*/}
    const handleSubmit = (e) => {
        {/*Aqui estamos criando uma função que vai ser chamada quando o usuario clicar no botão submit 'HelperFunction' */}
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setCategory("");
        setValue("");
        {/**Aqui estamos pegando o valor do input e da categoria e setando como vazio para que o usuario possa digitar novamente */}
        console.log(value + " " + category);
    }
    return (
        <div className={styles.todoForm}>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input value ={value}type="text" placeholder="Digite o Título" onChange={(e) => setValue(e.target.value)} />
                {/*   e = evento target = input value = valor do input
                com isso podemos  entender que o onchange serve para pegar o valor do input e setar no value
                */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="#">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                {/**Aqui estamos criando um select para que o usuario possa escolher a categoria da sua task */}
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}
export default TodoForm