

const Search = ({ search, setSearch }) => {
    return (
        <div><h2>Pesquisar :</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar."/>
        {/*   e = evento, target = input, value = valor do input
                com isso podemos  entender que o onchange serve para pegar o valor do input e setar no search
                */}
        </div>
    )
}

export default Search