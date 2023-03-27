const Todos = ({todos}) => {
    return (
        <div className="">
            <h2 className="text-center">Todos</h2>
            <ul>
                {todos.map( (todos) => (
                    <li key ={todos.id}>{todos.title}</li>
                    ))}
            </ul>
        </div>
    )

}

export default Todos;